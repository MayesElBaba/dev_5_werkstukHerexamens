
const Log= require("../models/log.model")

exports.getLogs = async(req, res) => {
    let logs = await Log.getAllLogs();
    res.status(200).send({ logs });
}

exports.saveLog = async(req, res) => {
    let { text } = req.body;
    let log = new Log(text);
    await log.saveLog();
    res.status(201).send({
        message: "Log saved !",
        status: 201,
        uuid_log: uuid_log
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
    let { text } = req.body;
    let log = await Log.updateLog(uuid, text);
    res.status(200).send({
        message: "Log updated !",
        status: 200,
        log
    })
}