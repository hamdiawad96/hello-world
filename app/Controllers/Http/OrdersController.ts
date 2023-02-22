 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import OrderItem from 'App/Models/OrderItem';

export default class OrdersController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Order.query().preload("customerId");
        return result;
    }

    public async getById(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var result = await Order.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            customer_id: schema.number(),
            order_status: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var order = new Order();
        order.customer_id = fields.customer_id;
        order.order_status = fields.order_status;
        var result = await order.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            customer_id: schema.number(),
            order_status: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var order = await Order.findOrFail(id);
        order.customer_id = fields.customer_id;
        order.order_status = fields.order_status;
        var result = await order.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
var object = await ctx.auth.authenticate();
        console.log(object);
        
        var id = ctx.params.id;
        var order = await Order.findOrFail(id);
        await order.delete();
        return { message: "The order has been deleted!" };
    }
}

