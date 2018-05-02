export class Configuration {

    private config: any = null;

    constructor(o: StartupOptions) {



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
}

export interface ServerConfigSchemaOptions {
    sectionName: string;
    portParamName: number;
    tlsCertName: string;
    tlsKeyName: string;
}

export interface DbConfigSchemaOptions {
    sectionName: string;
}

export interface APIConfigSchemaOptions {
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
