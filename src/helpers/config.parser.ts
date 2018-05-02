import {LoadedConfiguration} from "../models/loaded.configuration";
import {StartupOptions} from "../main";

export class ConfigParser {

    public static fromOptions(o: any) : LoadedConfiguration {

        return null;

    }

    public static mergeOptions(o1: StartupOptions & {[key:string] : any},
                               o2: StartupOptions & {[key:string] : any})
        : StartupOptions | {[key:string] : any} {


        for(const key in o1) {

            if(!o1.hasOwnProperty(key))
                continue;

            if(typeof o1[key] === "object") {

                if(typeof o2[key] === "object") {

                    o1[key] = this.mergeOptions(o1[key], o2[key]);

                }

            } else if(o2.hasOwnProperty(key)) {

                o1[key] = o2[key];

            }

        }

        return o1;

    }

    private static getCertificates(path: string) {

    }

    private static getConfiguration(path: string) {

    }

}