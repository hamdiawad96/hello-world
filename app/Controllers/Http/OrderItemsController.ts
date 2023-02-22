import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import OrderItem from 'App/Models/OrderItem';


export default class OrderItemsController {

    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        
        var result = await OrderItem.query().preload("orderId");
        var result = await OrderItem.query().preload("productId");


        return result;
    }

    public async getById(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var result = await OrderItem.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            order_id: schema.number(),
            product_id: schema.number(),
            qunatity: schema.number(),
            list_price: schema.number(),
            discount: schema.number(),


        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var orderItem = new OrderItem();
        orderItem.order_id = fields.order_id;
        orderItem.product_id = fields.product_id;
        orderItem.quantity = fields.qunatity;
        orderItem.list_price = fields.list_price;
        orderItem.discount = fields.discount;


        var result = await orderItem.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            order_id: schema.number(),
            product_id: schema.number(),
            qunatity: schema.number(),
            list_price: schema.number(),
            discount: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var orderItem = await OrderItem.findOrFail(id);
        orderItem.order_id = fields.order_id;
        orderItem.product_id = fields.product_id;
        orderItem.quantity = fields.qunatity;
        orderItem.list_price = fields.list_price;
        orderItem.discount = fields.discount;


        var result = await orderItem.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var orderItem = await OrderItem.findOrFail(id);
        await orderItem.delete();
        return { message: "The orderItem has been deleted!" };
    }
}
