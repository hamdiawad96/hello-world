 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Orderdetail from 'App/Models/Orderdetail';

export default class OrderdetailsController {
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Orderdetail.query().preload("productId");
        return result;
       
    
    //         const page = request.input('page', 1)
    // const limit = 10
    
    // const posts = await Database.from('sales').paginate(page, limit)
    // console.log(posts)    
    }
    
    
    
    
    
    
    public async index ({ request }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 10
    
        const posts = await Database.from('orderdetails').paginate(page, limit)
    
        // Changes the baseURL for the pagination links
        posts.baseUrl('/orderdetails')
    
    }
    
    
    
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Orderdetail.findOrFail(id);
        
        return result;
    }
    
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            order_id: schema.number(),
    
            quantity: schema.number(),
            price: schema.number(),
            order_line_number: schema.number(),
            product_id: schema.number(),
        
        });
    
       
        
    
        const fields = await ctx.request.validate({ schema: newSchema })
        var orderdetails = new Orderdetail();
        orderdetails.orderId = fields.order_id;
        
        orderdetails.quantity = fields.quantity;
        orderdetails.price = fields.price;
        orderdetails.orderLineNumber = fields.order_line_number;
        orderdetails.productId = fields.product_id;
       
    
    
    
                var result = await orderdetails.save();
                return result;
      
    
        
    
    }
    
    
    
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            order_id: schema.number(),
    
            quantity: schema.number(),
            price: schema.number(),
            order_line_number: schema.number(),
            product_id: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var orderdetails = new Orderdetail();
        orderdetails.orderId = fields.order_id;
        
        orderdetails.quantity = fields.quantity;
        orderdetails.price = fields.price;
        orderdetails.orderLineNumber = fields.order_line_number;
        orderdetails.productId = fields.product_id;
    
    
    
                var result = await orderdetails.save();
                return result;
       
    }
    
    public async destory(ctx: HttpContextContract) {
     
        var id = ctx.params.id;
        var orderdetails = await orderdetails.findOrFail(id);
        await orderdetails.delete();
        return { message: "The orderdetails has been deleted!" };
    //     }
    }
    }
    
    
