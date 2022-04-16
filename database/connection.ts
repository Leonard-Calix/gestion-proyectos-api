var mongoose = require("mongoose");

var server: string = String(process.env.PORT);
var dbName: string = String(process.env.PORT);

class Database {
    constructor() {
        this.conect();
    }

    conect() {
        mongoose.connect(`mongodb://${server}/${dbName}`)
            .then(() => {
                console.log("Se conecto a la base de datos...");
            })
            .catch((error: any) => {
                console.error(JSON.stringify(error));
            });
    }
}

module.exports = new Database();