 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/FilmCategory';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import FilmCategory from 'App/Models/FilmCategory';

export default class FilmCategoriesController {

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await FilmCategory.query().preload("filmId");
        var result = await FilmCategory.query().preload("categoryId");

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
    const newSchema = schema.create({
        film_id: schema.number(),
        category_id: schema.number(),
    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var filmcategory = new Category;
    filmcategory.film_id = fields.film_id;
    filmcategory.category_id = fields.category_id;
    var result = await filmcategory.save;
    return result;

}

public async update(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
        console.log(object);
    const newSchema = schema.create({
        film_id: schema.number(),
        category_id: schema.number(),
        id: schema.number(),
    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id;
    var filmcategory = await Category.findOrFail(id);

    var filmcategory = await Category.findOrFail(id);
    filmcategory.film_id = fields.film_id;
    filmcategory.category_id = fields.category_id;
    var result = await filmcategory.save;
    return result;
}

public async destory(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    var id = ctx.params.id;
    var filmcategory = await Category.findOrFail(id);
    await filmcategory.delete;
    return { message: "The film category has been deleted!" };
}


}