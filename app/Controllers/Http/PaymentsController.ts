import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Customer from 'App/Models/Customer'
import Payment from 'App/Models/Payment';

export default class PaymentsController {
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Payment.query().preload("customerId");
        return result;
    
    //         const page = request.input('page', 1)
    // const limit = 10
    
    // const posts = await Database.from('sales').paginate(page, limit)
    // console.log(posts)    
    }
    
    
    
    
    
    
    public async index ({ request }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 10
    
        const posts = await Database.from('payments').paginate(page, limit)
    
        // Changes the baseURL for the pagination links
        posts.baseUrl('/payments')
    
    }
    
    
    
    public async getById(ctx: HttpContextContract) {
        
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Payment.query().preload("customerId");
        return result;        
    }
    
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            customer_id: schema.number(),
    
            check_number: schema.number(),
            payment_date: schema.date(),
            amount: schema.number(),   
        });
    
       
        
    
        const fields = await ctx.request.validate({ schema: newSchema })
        var payments = new Payment();
        payments.customerId = fields.customer_id;
        
        payments.checkNumber = fields.check_number;
        payments.paymentDate = fields.payment_date;
        payments.amount = fields.amount; 
                var result = await payments.save();
                return result;
      
    
        
    
    }
    
    
    
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            customer_id: schema.number(),
    
            check_number: schema.number(),
            payment_date: schema.date(),
            amount: schema.number(), 
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var payments = new Payment();
        payments.customerId = fields.customer_id;
        
        payments.checkNumber = fields.check_number;
        payments.paymentDate = fields.payment_date;
        payments.amount = fields.amount; 
    
    
    
                var result = await payments.save();
                return result;
       
    }
    
    public async destory(ctx: HttpContextContract) {
     
        var id = ctx.params.id;
        var payments = await payments.findOrFail(id);
        await payments.delete();
        return { message: "The payments has been deleted!" };
    //     }
    }
    }
    
    
