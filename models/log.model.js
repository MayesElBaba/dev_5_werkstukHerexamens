const { v4: uuidv4 } = require('uuid');
const knex = require('../knex/knex');

class log{
    constructor(text) {
        this.uuid = uuidv4();
        this.text = text;
    }
    static getAllLogs() {
        return knex('logs').select('*');
    }

    saveLog() {
        return knex('logs').insert({
            uuid_log: this.uuid_log,
            text: this.text
        }).returning('uuid_log');
    }

    static deleteLog(uuid) {
        return knex('logs')
            .del()
            .where('uuid_log', '=', uuid);
    }

    static updateLog(uuid, text) {
        return knex('logs')
            .update({
                text: text,
            }).where('uuid_log', '=', uuid)
            .returning('*');
    }
}
module.exports=log;