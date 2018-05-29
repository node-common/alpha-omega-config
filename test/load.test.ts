import {Configuration} from "../src/main";

describe("api-connector", () => {

    /*
     *  Preload startup options with zero configuration test
     */

    it("Should load startup options properly with zero configuration", () => {

        const conf = new Configuration({

        });

        console.log(conf._getStartupOptions());

    });

    /*
     *  Preload startup options with merge configuration
     */

    it("Should load startup options properly with provided configuration", () => {

        const conf = new Configuration({
            configDirectory: "./custom",
            certDirectory: "./custom_cert",
            configStructure: {
                database: {
                    sectionName: "customDB"
                },
                api: {
                    sectionName: "customAPI"
                },
                server: {
                    sectionName: "customServer",
                    portParamName: "customPort",
                    SSLKeyName: "customSSLKey",
                    SSLCertName: "customSSLCert"
                },
                other: {
                    sectionName: "customOther"
                }
            }
        });

        console.log(conf);

    });

});