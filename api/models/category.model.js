const { v4: uuidv4 } = require('uuid');
const knex = require('../knex/knex');

class Category {
    constructor(name) {
        this.uuid = uuidv4();
        this.name = name;
    }

    static getCategory(uuid){
        /*hierdoor kan hij de eerste category kiezen en selecteren */
       return knex('categories').select().where('uuid_category', '=', uuid).first();

    }

    static getAllCategories() {
        return knex('categories').select('*');
    }

    saveCategory() {
        return knex('categories').insert({
            uuid_category: this.uuid,
            name: this.name
        }).returning('uuid_category');
    }

    static deleteCategory(uuid) {
        return knex('categories')
            .del()
            .where('uuid_category', '=', uuid);
    }

    static updateCategory(uuid, name) {
        return knex('categories')
            .update({
                name: name,
            }).where('uuid_category', '=', uuid)
            .returning('*');
    }

}

module.exports = Category;