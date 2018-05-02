import {Exception} from "ts-exceptions";
import {ConfigParser} from "./helpers/config.parser";
import {LoadedConfiguration} from "./models/loaded.configuration";

export class Configuration {

    private config: LoadedConfiguration = null;

    constructor(o: StartupOptions) {

        this.set(o);

    }

    public get() : LoadedConfiguration {

        return this.config;

    }

    public set(o: StartupOptions) {

        const std = Configuration._defaultStartupConfiguration();

        o = ConfigParser.mergeOptions(std, o);

        try {

            this.config = ConfigParser.fromOptions(o);

        } catch (e) {

            let message = "";
            let code = 500;

            if(typeof e.message !== "undefined")

                message = e.message !== null ? e.message : message;

            if(typeof e.code !== "undefined")

                message = typeof e.code === "number" ? e.code : code;

            throw new Exception(
                "Configuration can't produce output: " +
                "because of error: " + message,
                code);

        }

    }

    private static _defaultStartupConfiguration() : StartupOptions {

        return {
            configDirectory: "./config",
            certDirectory: "./certificates",
            configStructure : {
                database: {
                    sectionName: "db",
                },
                api: {
                    sectionName: "api"
                },
                server: {
                    sectionName: "server",
                    portParamName: "port",
                    SSLCertName: "server.cert",
                    SSLKeyName: "server.key"
                },
                other: {
                    sectionName: "other"
                }
            }
        }

    }

}

export interface StartupOptions {
    configDirectory: string;
    certDirectory: string;
    configStructure: ConfigStructureOptions;
}

export interface ConfigStructureOptions {
    database: DbConfigSchemaOptions;
    api: APIConfigSchemaOptions;
    server: ServerConfigSchemaOptions;
    other: OtherConfigSchemaOptions
}

export interface ServerConfigSchemaOptions {
    sectionName: string;
    portParamName: string;
    SSLCertName: string;
    SSLKeyName: string;
}

export interface DbConfigSchemaOptions {
    sectionName: string;
}

export interface APIConfigSchemaOptions {
    sectionName: string;
}

export interface OtherConfigSchemaOptions {
    sectionName: string;
}

export interface CertificateConfiguration {
    has(p: string) : boolean;
    get(p: string) : string;
}

export interface ServerConfiguration {
    host: string;
    port: number;
    url: string;
    tlsCert: string;
    tlsKey: string;

}

export interface DatabaseConfiguration {
    name: string | null;
    host: string | null;
    port: number | null;
    db: string | null;
    user: string | null;
    pass: string | null;
    authDb: string | null;
    socket: string | null;
    kind: string | null;
}

export interface APIConfiguration {
    url: string | null;
    host: string | null;
    port: number | null;
    client: string | null;
    key: string | null;
    prefix: string | null;
    kind: string;

}

export interface CommonConfiguration<T> {
    has(p: string) : boolean;
    get(p: string) : string | number | Array<any> | {[key: string] : any};
    set(p: string, v: T) : void;
    data: T;
}

export interface ConfigurationCollection {
    database:  {[key: string] : DatabaseConfiguration};
    api: {[key: string] : APIConfiguration};
    common: {[key: string] : CommonConfiguration<any>};
    cert: {[key: string] : CertificateConfiguration};
    server: {[key: string] : ServerConfiguration};
}

export enum DbConfigurationKind {
    Mongo = "mongo",
    MySQL = "mysql",
    Postgres = "postgres",
    Cassandra = "cassandra",
    Rocks = "rocks",
    Cockroach = "cockroach",
    Redis = "redis",
    Memcached = "memcached",
    MSSQL = "mssql",
    Oracle = "oracle",
    ElasticSearch = "elasticsearch",
    Other = "other"
}

export enum APIConfigurationKind {
    Google = "google",
    Amazon = "amazon",
    Ebay = "ebay",
    DigitalOcean = "digitalocean",
    Facebook = "facebook",
    Twitter = "twitter",
    Github = "github",
    Oauth = "oauth",
    Other = "other"
}
