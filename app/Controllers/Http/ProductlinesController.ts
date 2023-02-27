 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Office from 'App/Models/Office';
import Payment from 'App/Models/Payment';
import Product from 'App/Models/Product';
import Productline from 'App/Models/Productline';

export default class ProductlinesController {
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Productline.all();
        return result;
    
    //         const page = request.input('page', 1)
    // const limit = 10
    
    // const posts = await Database.from('sales').paginate(page, limit)
    // console.log(posts)    
    }
    
    
    
    
    
    
    public async index ({ request }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 10
    
        const posts = await Database.from('productlines').paginate(page, limit)
    
        // Changes the baseURL for the pagination links
        posts.baseUrl('/productlines')
    
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
            Product_line: schema.string(),
    
            text_description: schema.string(),
            
        });
    
       
        
    
        const fields = await ctx.request.validate({ schema: newSchema })
        var productlines = new Productline();
        productlines.productLine = fields.Product_line;
        
        productlines.textDescription = fields.text_description;
      
                var result = await productlines.save();
                return result;
      
    
        
    
    }
    
    
    
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            Product_line: schema.string(),
    
            text_description: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var productlines = new Productline();
        productlines.productLine = fields.Product_line;
        
        productlines.textDescription = fields.text_description;
    
    
    
                var result = await productlines.save();
                return result;
       
    }
    
    public async destory(ctx: HttpContextContract) {
     
        var id = ctx.params.id;
        var productlines = await productlines.findOrFail(id);
        await productlines.delete();
        return { message: "The productlines has been deleted!" };
    //     }
    }
    }
    
    

