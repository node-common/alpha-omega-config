import {
    APIConfiguration, APIConfigurationKind,
    CertificateConfiguration,
    CommonConfiguration, ConfigurationCollection,
    DatabaseConfiguration, DbConfigurationKind,
    ServerConfiguration
} from "../main";

export class LoadedConfiguration {

    private databaseMap: {[key: string] : DatabaseConfiguration} = {};

    private apiMap: {[key: string] : APIConfiguration} = {};

    private commonMap: {[key: string] : CommonConfiguration<any>} = {};

    private certMao: {[key: string] : CertificateConfiguration} = {};

    private serverMap: {[key: string] : ServerConfiguration} = {};

    constructor(c: ConfigurationCollection) {

    }

    public getDbConfig(n: string) {



    }

    public getDbConfigListForKind(k: DbConfigurationKind | string) {



    }

    public getAPIConfig(n: string) {



    }

    public getAPIConfigListForKind(k: APIConfigurationKind | string) {



    }

    public getCommonConfig(n: string) {



    }

    public getCertificate(n: string) {



    }

    public getKey(n: string) {



    }

    public getServerConfig(s: string) {



    }

}