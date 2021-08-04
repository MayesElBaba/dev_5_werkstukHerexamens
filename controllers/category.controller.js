const Category = require("../models/category.model")


exports.getCategories = async(req, res) => {
    let categories = await Category.getAllCategories();
    res.status(200).send({ categories })
}


exports.saveCategory = async(req, res) => {
    let { name } = req.body;
    let category = new Category(name);
    await category.saveCategory();
    res.status(201).send({
        message: "Category saved !",
        status: 201,
        category_uuid: category.uuid
    })
}

exports.deleteCategory = async(req, res) => {
    let { uuid } = req.params;
    await Category.deleteCategory(uuid);
    res.status(200).send({
        message: "Category deleted !",
        status: 200,
        uuid
    });
}

exports.updateCategory = async(req, res) => {
    let { uuid } = req.params;
    let { name } = req.body;
    let category = await Category.updateCategory(uuid, name);
    res.status(200).send({
        message: "Category updated !",
        status: 200,
        category
    })
}