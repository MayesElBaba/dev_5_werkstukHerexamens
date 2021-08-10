const Log = require("../models/log.model")

/* om alle logs te tonen*/
exports.getLogs = async(req, res) => {
    try {
        let logs = await Log.getAllLogs();
        res.status(200).send({ logs });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

/* om een log toe te voegen */
exports.saveLog = async(req, res) => {

    let { text, uuid_category_fk } = req.body;
    if (!text || !uuid_category_fk) {
        return res.status(400).send({
            message: "Bad request",
            status: 400
        });
    }
    let log = new Log(text, uuid_category_fk);
    try {
        await log.saveLog();
        res.status(201).send({
            message: "Log saved !",
            status: 201,
            uuid_log: log.uuid
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

/* om een log toe te verwijderen */
exports.deleteLog = async(req, res) => {
    let { uuid } = req.params;
    try {
        await Log.deleteLog(uuid);
        res.status(200).send({
            message: "Log deleted !",
            status: 200,
            uuid
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

/* om een log up te daten */
exports.updateLog = async(req, res) => {
    let { uuid } = req.params;
    let { text, uuid_category_fk } = req.body;
    if (!text || !uuid_category_fk) {
        return res.status(400).send({
            message: "Bad request",
            status: 400
        });
    }
    try {
        let log = await Log.updateLog(uuid, text, uuid_category_fk);
        res.status(200).send({
            message: "Log updated !",
            status: 200,
            log
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}