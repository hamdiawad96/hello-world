 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AddressesController {
    
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Address.query().preload("cityName");
        return result;       
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Address.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            address: schema.string(),
            district : schema.string(),
            city_id: schema.number(),
            postal_code: schema.number(),
            phone : schema.number(),
            location : schema.string(),




        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var addres = new Address();
        addres.address = fields.address;
        addres.district = fields.district;
        addres.city_id = fields.city_id;
        addres.postal_code = fields.postal_code;
        addres.phone = fields.phone;
        addres.location = fields.location;


        var result = await addres.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            address: schema.string(),
            district : schema.string(),
            city_id: schema.number(),
            postal_code: schema.number(),
            phone : schema.number(),
            location : schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var addres = await Address.findOrFail(id);
        addres.address = fields.address;
        addres.district = fields.district;
        addres.city_id = fields.city_id;
        addres.postal_code = fields.postal_code;
        addres.phone = fields.phone;
        addres.location = fields.location;
        var result = await addres.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var addres = await Address.findOrFail(id);
        await addres.delete();
        return { message: "The Address has been deleted!" };
    }
}

