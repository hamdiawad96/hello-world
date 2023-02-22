//  import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
// import Database from '@ioc:Adonis/Lucid/Database';

// export default class CategoriesController {
//     public async getAll(ctx: HttpContextContract) {

//     return Database.from("categories").select("*");
// }

// public async getById(ctx: HttpContextContract) {
//     var category_id = ctx.params.category_id;
//     var result = await Database.from("categories").select("*").where("id", category_id);
//     return result[0];
// }

// public async create(ctx: HttpContextContract) {

//     var fields = ctx.request.all();
//     const result = await Database
//         .table('categories')
//         .insert({
//             city: fields.city,
//             country_id: fields.country_id,
//         });
//     var id = result[0];

//     var newObject = await Database.from("categories").select("*").where("id", id)
//     return newObject[0];
// }

// public async update(ctx: HttpContextContract) {

//     var fields = ctx.request.all();
//     await Database
//         .from('categories')
//         .where('id', fields.category_id)
//         .update({ first_name: fields.first_name });
//     return { message: "The category name has been updated!" };
// }

// public async destory(ctx: HttpContextContract) {
//     var category_id = ctx.params.category_id;

//     await Database
//         .from('categories')
//         .where('id', category_id)
//         .delete();
//     return { message: "The category name has been deleted!" };

// }

// }


import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Category from 'App/Models/Category';

export default class ActorsController {

    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Category.all();

        return result;
    }

    public async getById(ctx: HttpContextContract) {
var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Category.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        // var fields = ctx.request.all();
        // var category = new Category();
        // category.name = fields.name;
        // var result = await category.save();
        // return result;
        const newSchema = schema.create({
            name: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var category = await Category.findOrFail(id);
        category.name = fields.name;
        var result = await category.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            name: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var category = await Category.findOrFail(id);
        category.name = fields.name;
        var result = await category.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var category = await Category.findOrFail(id);
        await category.delete();
        return { message: "The category has been deleted!" };
    }
}