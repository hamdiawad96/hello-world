 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Rental from 'App/Models/Rental';

export default class RentalsController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Rental.query().preload("inventoryId");
        var result = await Rental.query().preload("customerId");
        var result = await Rental.query().preload("staffId");


        return result;
    }

    public async getById(ctx: HttpContextContract) {
var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var result = await Rental.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            rental_date: schema.number(),
            inventory_id: schema.number(),
            customer_id: schema.number(),
            return_date: schema.number(),
            staff_id: schema.number(),


        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var rental = new Rental();
        rental.rental_date = fields.rental_date;
        rental.inventory_id = fields.inventory_id;
        rental.customer_id = fields.customer_id;
        rental.return_date = fields.return_date;
        rental.staff_id = fields.staff_id;

        var result = await rental.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            rental_date: schema.number(),
            inventory_id: schema.number(),
            customer_id: schema.number(),
            return_date: schema.number(),
            staff_id: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var rental = await Rental.findOrFail(id);
        rental.rental_date = fields.rental_date;
        rental.inventory_id = fields.inventory_id;
        rental.customer_id = fields.customer_id;
        rental.return_date = fields.return_date;
        rental.staff_id = fields.staff_id;
        var result = await rental.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var rental = await Rental.findOrFail(id);
        await rental.delete();
        return { message: "The retnal has been deleted!" };
    }
}
