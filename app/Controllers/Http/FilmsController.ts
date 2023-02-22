 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Film from 'App/Models/Film';


export default class FilmsController {public async getAll(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
        console.log(object);
    var result = await Film.query().preload("languageId");
    return result;
}

public async getById(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    var id = ctx.params.id;
    var result = await Film.findOrFail(id);
    return result;
}

public async create(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    const newSchema = schema.create({
        title: schema.string(),
        description: schema.string(),
        release_year: schema.number(),
        language_id: schema.number(),
        original_language_id: schema.number(),
        rental_duration: schema.number(),
        rental_rate: schema.number(),
        length: schema.number(),
        replacement_cost: schema.number(),
        rating: schema.string(),
        special_features: schema.string(),







    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var film = new Film();
    film.title = fields.title;
    film.description = fields.description;
    film.release_year = fields.release_year;
    film.language_id = fields.language_id;
     film.original_language_id = fields.original_language_id;
    film.rental_duration = fields.rental_duration; 
    film.rental_rate = fields.rental_rate;
    film.length = fields.length;
    film.replacement_cost = fields.replacement_cost;
    film.rating = fields.rating;

    var result = await film.save();
    return result;

}

public async update(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
        console.log(object);
    const newSchema = schema.create({
        title: schema.string(),
        description: schema.string(),
        release_year: schema.number(),
        language_id: schema.number(),
        original_language_id: schema.number(),
        rental_duration: schema.number(),
        rental_rate: schema.number(),
        length: schema.number(),
        replacement_cost: schema.number(),
        rating: schema.string(),
        special_features: schema.string(),
        id: schema.number(),

    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id;
    var film = await Film.findOrFail(id);

    film.title = fields.title;
    film.description = fields.description;
    film.release_year = fields.release_year;
    film.language_id = fields.language_id;
     film.original_language_id = fields.original_language_id;
    film.rental_duration = fields.rental_duration; 
    film.rental_rate = fields.rental_rate;
    film.length = fields.length;
    film.replacement_cost = fields.replacement_cost;
    film.rating = fields.rating;

    var result = await film.save();
    return result;
}

public async destory(ctx: HttpContextContract) {
    
    var object = await ctx.auth.authenticate();
    console.log(object);
    var id = ctx.params.id;
    var film = await Film.findOrFail(id);
    await film.delete();
    return { message: "The film has been deleted!" };
}
}
