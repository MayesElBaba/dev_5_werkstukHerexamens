const { capitalLetter } = require("../helpers/function");
const Category = require("../models/category.model");

/* om alle categorieen te tonen*/
exports.getCategories = async(req, res) => {
    try {
        let categories = await Category.getAllCategories();
        /* om de laatste toegevoede categorie als eerste te zien*/
        res.status(200).send({ categories: categories.reverse() })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

exports.getCategory = async(req, res) => {
    let { uuid } = req.params;
    try {
        let category = await Category.getCategory(uuid);
        res.status(200).send({ category })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

/* om een categorie op te slaan*/
exports.saveCategory = async(req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).send({
            message: "Bad request",
            status: 400
        });
    }
    let category = new Category(capitalLetter(name));
    try {
        await category.saveCategory();
        res.status(201).send({
            message: "Category saved !",
            status: 201,
            category_uuid: category.uuid
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}
/* om een categorie te verwijderen*/
exports.deleteCategory = async(req, res) => {
    let { uuid } = req.params;
    try {
        await Category.deleteCategory(uuid);
        res.status(200).send({
            message: "Category deleted !",
            status: 200,
            uuid
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

/* om eem categorie up te daten*/
exports.updateCategory = async(req, res) => {
    let { uuid } = req.params;
    let { name } = req.body;
    if (!name) {
        return res.status(400).send({
            message: "Bad request",
            status: 400
        });
    }
    try {
        let category = await Category.updateCategory(uuid, capitalLetter(name));
        res.status(200).send({
            message: "Category updated !",
            status: 200,
            category
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}