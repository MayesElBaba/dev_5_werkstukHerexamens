
const Log= require("../models/log.model")

exports.getLogs = async(req, res) => {
    let logs = await Log.getAllLogs();
    res.status(200).send({ logs });
}

exports.saveLog = async(req, res) => {
    let { text,uuid_category_fk } = req.body;
    let log = new Log(text, uuid_category_fk);
    await log.saveLog();
    res.status(201).send({
        message: "Log saved !",
        status: 201,
        uuid_log:log.uuid
    })
}

exports.deleteLog = async(req, res) => {
    let { uuid } = req.params;
    await Log.deleteLog(uuid);
    res.status(200).send({
        message: "Log deleted !",
        status: 200,
        uuid
    });
}

exports.updateLog = async(req, res) => {
    let { uuid } = req.params;
    let { text,uuid_category_fk } = req.body;
    let log = await Log.updateLog(uuid, text, uuid_category_fk);
    res.status(200).send({
        message: "Log updated !",
        status: 200,
        log
    })
}