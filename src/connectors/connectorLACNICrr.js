import Connector from "./connector";
import fs from "fs";

export default class ConnectorLACNIC extends Connector {
    constructor(params) {
        super(params)

        this.connectorName = "lacnic-rr";
        this.cacheDir += this.connectorName + "/";
        this.dumpUrl = this.params.dumpUrl || "http://ftp.lacnic.net/lacnic/rr/lacnic.db.gz";
        this.cacheFile = [this.cacheDir, "lacnic-rr.db.gz"].join("/").replace("//", "/");
        this.daysWhoisCache = this.params.defaultCacheDays || 2;

        if (!fs.existsSync(this.cacheDir)) {
            fs.mkdirSync(this.cacheDir,  { recursive: true });
        }
    }
}
