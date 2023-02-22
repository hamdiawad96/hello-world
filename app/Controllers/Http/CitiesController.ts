 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import City from 'App/Models/City';
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class CitiesController {
    
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await City.query().preload("countryId");
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await City.findOrFail(id);
        
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            city: schema.string(),
            country_id: schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var city = new City();
        city.city = fields.city;
        city.country_id = fields.country_id;
        var result = await city.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
           city: schema.string(),
            country_id: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var city = await City.findOrFail(id);
        city.city = fields.city;
        city.country_id = fields.country_id;
        var result = await city.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var city = await City.findOrFail(id);
        await city.delete();
        return { message: "The City has been deleted!" };
    }
}
