 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Stock from 'App/Models/Stock';

export default class StocksController {

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Stock.query().preload("storeId");
        var result = await Stock.query().preload("productId");

        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var result = await Stock.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            store_id: schema.number(),
            product_id: schema.number(),
            qunatity: schema.number(),
           

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var stock = new Stock();
        stock.store_id = fields.store_id;
        stock.product_id = fields.product_id;
        stock.qunatity = fields.qunatity;

        var result = await stock.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            store_id: schema.number(),
            product_id: schema.number(),
            qunatity: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var stock = await Stock.findOrFail(id);
        stock.store_id = fields.store_id;
        stock.product_id = fields.product_id;
        stock.qunatity = fields.qunatity;

        var result = await stock.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var stock = await Stock.findOrFail(id);
        await stock.delete();
        return { message: "The stock has been deleted!" };
    }
}