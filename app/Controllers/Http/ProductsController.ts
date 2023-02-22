 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product';

export default class ProductsController {
    
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Product.query().preload("brandId");
        var result = await Product.query().preload("categoryId");

        return result;
    }

    public async getById(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var result = await Product.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            product_name: schema.string(),
            brand_id: schema.number(),
            category_id: schema.number(),
            model_year: schema.number(),
            list_price: schema.number(),


        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var product = new Product();
        product.product_name = fields.product_name;
        product.brand_id = fields.brand_id;
        product.category_id = fields.category_id;
        product.model_year = fields.model_year;
        product.list_price = fields.list_price;


        var result = await product.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            product_name: schema.string(),
            brand_id: schema.number(),
            category_id: schema.number(),
            model_year: schema.number(),
            list_price: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var product = await Product.findOrFail(id);
        product.product_name = fields.product_name;
        product.brand_id = fields.brand_id;
        var result = await product.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var product = await Product.findOrFail(id);
        await product.delete();
        return { message: "The produt has been deleted!" };
    }
}
