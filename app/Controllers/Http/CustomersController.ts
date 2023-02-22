 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'
 import Customer from 'App/Models/Customer';

export default class CustomersController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Customer.query().preload("storeId");
        var result = await Customer.query().preload("addressId");

        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var result = await Customer.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            store_id: schema.number(),
            first_name: schema.string(),
            last_name: schema.string(),
            email: schema.string(),
            address_id: schema.number(),
            active: schema.number(),




        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var customer = new Customer();
        customer.store_id = fields.store_id;
        customer.first_name = fields.first_name;
        customer.last_name = fields.last_name;
        customer.email = fields.email;
        customer.address_id = fields.address_id;
        customer.active = fields.active;



        var result = await customer.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            store_id: schema.number(),

            first_name: schema.string(),
            last_name: schema.string(),
            id: schema.number(),
            email: schema.string(),
            address_id: schema.number(),
            active: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var customer = await Customer.findOrFail(id);
        customer.store_id = fields.store_id;
        customer.first_name = fields.first_name;
        customer.last_name = fields.last_name;
        customer.email = fields.email;
        customer.address_id = fields.address_id;
        var result = await customer.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var customer = await Customer.findOrFail(id);
        await customer.delete();
        return { message: "The customer has been deleted!" };
    }

}
