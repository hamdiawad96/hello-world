import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Office from 'App/Models/Office';
import Order from 'App/Models/Order';

export default class OrdersController {
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Order.query().preload("customerId");
       
        return result;
    
    //         const page = request.input('page', 1)
    // const limit = 10
    
    // const posts = await Database.from('sales').paginate(page, limit)
    // console.log(posts)    
    }
    
    
    
    
    
    
    public async index ({ request }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 10
    
        const posts = await Database.from('orders').paginate(page, limit)
    
        // Changes the baseURL for the pagination links
        posts.baseUrl('/orders')
    
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
            order_date: schema.date(),
            required_date: schema.date(),
            shipped_date: schema.date(),


             status: schema.string(),
            comments: schema.string(),
            customer_id: schema.number(),
            
    
    
    
        });
    
       
        
    
        const fields = await ctx.request.validate({ schema: newSchema })
        var order = new Order();
        order.orderDate = fields.order_date;
        
        order.requiredDate = fields.required_date;
        order.shippedDate = fields.shipped_date;
        order.status = fields.status;
        order.comments = fields.comments;
        order.customerId = fields.customer_id;
      
    
    
                var result = await order.save();
                return result;
      
    
        
    
    }
    
    
    
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            order_date: schema.date(),
            required_date: schema.date(),
            shipped_date: schema.date(),


             status: schema.string(),
            comments: schema.string(),
            customer_id: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var order = new Order();
        order.orderDate = fields.order_date;
        
        order.requiredDate = fields.required_date;
        order.shippedDate = fields.shipped_date;
        order.status = fields.status;
        order.comments = fields.comments;
        order.customerId = fields.customer_id;
      
    
    
    
                var result = await order.save();
                return result;
       
    }
    
    public async destory(ctx: HttpContextContract) {
     
        var id = ctx.params.id;
        var order = await order.findOrFail(id);
        await order.delete();
        return { message: "The order has been deleted!" };
    //     }
    }
    }
    
    
