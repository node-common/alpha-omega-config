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

    public dbConfig(n: string) {



    }

    public dbConfigListForKind(k: DbConfigurationKind | string) {



    }

    public apiConfig(n: string) {



    }

    public apiConfigListForKind(k: APIConfigurationKind | string) {



    }

    public commonConfig(n: string) {



    }

    public secureCertificate(n: string) {



    }

    public secureKey(n: string) {



    }

    public serverConfig(s: string) {



    }

}