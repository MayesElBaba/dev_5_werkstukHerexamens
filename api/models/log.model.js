const { v4: uuidv4 } = require('uuid');
const knex = require('../knex/knex');

class Log{
    constructor(text, uuid_category_fk) {
        this.uuid = uuidv4();
        this.text = text;
        this.uuid_category_fk= uuid_category_fk;
    }
    static getAllLogs() {
        return knex('logs').select('*');
    }

    saveLog() {
        return knex('logs').insert({
            uuid_log: this.uuid,
            text: this.text,
            uuid_category_fk: this.uuid_category_fk
        }).returning('uuid_log');
    }

    static deleteLog(uuid_log) {
        return knex('logs')
            .del()
            .where('uuid_log', '=', uuid_log);
    }

    static updateLog(uuid_log, text, uuid_category_fk) {
        return knex('logs')
            .update({
                text: text,
                uuid_category_fk:uuid_category_fk
            }).where('uuid_log', '=', uuid_log)
            .returning('*');
    }
}
module.exports=Log;