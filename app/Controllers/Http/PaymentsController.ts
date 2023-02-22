import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Payment from 'App/Models/Payment';

export default class PaymentsController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Payment.query().preload("customerId");
        var result = await Payment.query().preload("staffId");
        var result = await Payment.query().preload("rentalId");


      
        return result;
    }

    public async getById(ctx: HttpContextContract) {
var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Payment.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            customer_id: schema.number(),
            staff_id: schema.number(),
            rental_id: schema.number(),
            amount: schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var payment = new Payment();
        payment.customer_id = fields.customer_id;
        payment.staff_id = fields.staff_id;
        payment.rental_id = fields.rental_id;
        payment.amount = fields.amount;

        var result = await payment.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            customer_id: schema.number(),
            staff_id: schema.number(),
            rental_id: schema.number(),
            amount: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var payment = await Payment.findOrFail(id);
        payment.customer_id = fields.customer_id;
        payment.staff_id = fields.staff_id;
        payment.rental_id = fields.rental_id;
        payment.amount = fields.amount;

        var result = await payment.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
var object = await ctx.auth.authenticate();
        console.log(object);
        
        var id = ctx.params.id;
        var payment = await Payment.findOrFail(id);
        await payment.delete();
        return { message: "The Payment has been deleted!" };
    }
}
