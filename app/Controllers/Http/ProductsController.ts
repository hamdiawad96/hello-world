 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Payment from 'App/Models/Payment';
import Product from 'App/Models/Product';

export default class ProductsController {
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Product.query().preload("customerId");
        return result;

        
        var object = await ctx.auth.authenticate();
        var productLineId = ctx.request.input("productLineId");
        var quantity_in_stock  = ctx.request.input("quantity_in_stock ");

        var query = Product.query();

        if (productLineId) {
            query.where("product_line_id", productLineId);
        }
        if (quantity_in_stock) {
            query.where("quantity_in stock", quantity_in_stock);
        }

        var result = await query;
        return result;
    }
      
    
    //         const page = request.input('page', 1)
    // const limit = 10
    
    // const posts = await Database.from('sales').paginate(page, limit)
    // console.log(posts)    
    
    
    
    public async index ({ request }: HttpContextContract) {
        // const page = request.input('page', 1)
        // const limit = 10
    
        // const posts = await Database.from('products').paginate(page, limit)
    
        // // Changes the baseURL for the pagination links
        // posts.baseUrl('/products')

class ProductController {
  async getMostRequested({ response }) {
    const products = await Database
      .select('products.*', Database.raw('COUNT(*) as requests'))
      .from('products')
      .leftJoin('orders', 'products.id', 'orders.product_id')
      .groupBy('products.id')
      .orderBy('requests', 'desc');

    return response.json(products);
  }
}

    
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
            product_dode: schema.string(),
    
            product_name: schema.string(),
            product_line_id: schema.number(),
            product_scale: schema.number(),
            product_vendor: schema.string(),
            product_description: schema.string(),
            quantity_in_stock: schema.number(),
            price: schema.number(),
            msrp: schema.number(),


            
        });
    
       
        
    
        const fields = await ctx.request.validate({ schema: newSchema })
        var products = new Product();
        products.productDode = fields.product_dode;
        
        products.productName = fields.product_name;
        products.productLineId = fields.product_line_id;
        products.productScale = fields.product_scale;
        products.productVendor = fields.product_vendor;
        products.productDescription = fields.product_description;
        products.quantityInsStock = fields.quantity_in_stock;
        products.price = fields.price;
        products.msrp = fields.msrp;



      
                var result = await products.save();
                return result;
      
    
        
    
    }
    
    
    
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            product_dode: schema.string(),
    
            product_name: schema.string(),
            product_line_id: schema.number(),
            product_scale: schema.number(),
            product_vendor: schema.string(),
            product_description: schema.string(),
            quantity_in_stock: schema.number(),
            price: schema.number(),
            msrp: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var products = new Product();
        products.productDode = fields.product_dode;
        
        products.productName = fields.product_name;
        products.productLineId = fields.product_line_id;
        products.productScale = fields.product_scale;
        products.productVendor = fields.product_vendor;
        products.productDescription = fields.product_description;
        products.quantityInsStock = fields.quantity_in_stock;
        products.price = fields.price;
        products.msrp = fields.msrp;
    
    
                var result = await products.save();
                return result;
       
    }
    
    public async destory(ctx: HttpContextContract) {
     
        var id = ctx.params.id;
        var products = await products.findOrFail(id);
        await products.delete();
        return { message: "The products has been deleted!" };
    //     }
    }
    }
    
    

