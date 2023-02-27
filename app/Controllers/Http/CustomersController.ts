

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Actor from 'App/Models/Customer';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Customer from 'App/Models/Customer';
import I18n from '@ioc:Adonis/Addons/I18n';
import Database from '@ioc:Adonis/Lucid/Database';

export default class CustomersController {

    public async getAll(ctx: HttpContextContract) {
        
         
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Customer.query().preload("employeeId");
        return result;
        var country = ctx.request.input("country");
        var employeId = ctx.request.input("employeId");

        var query = Actor.query();

        if (country) {
            query.where("country", country);
        }
        if (employeId) {
            query.where("employe_id", employeId);
        }

        var result = await query;
        return result;
    }

       

//         const page = request.input('page', 1)
// const limit = 10

// const posts = await Database.from('sales').paginate(page, limit)
// console.log(posts)    
    };

   
    

    

    public async index ({ request }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 10
    
        const posts = await Database.from('customers').paginate(page, limit)
    
        // Changes the baseURL for the pagination links
        posts.baseUrl('/customers')
    
    }



    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Customer.findOrFail(id);
        
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            customer_name: schema.string(),

             contact_first_name: schema.string(),
            contact_last_name: schema.string(),
        });

       
        

        const fields = await ctx.request.validate({ schema: newSchema })
        var customer = new Customer();
                customer.customerName = fields.customer_name;
        
                customer.firstName = fields.contact_first_name;
                customer.lastName = fields.contact_last_name;
                var result = await customer.save();
                return result;
      

        

    }

    

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            customer_name: schema.string(),

            contact_first_name: schema.string(),
            contact_last_name: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var customer = new Customer();
                customer.customerName = fields.customer_name;
        
                customer.firstName = fields.contact_first_name;
                customer.lastName = fields.contact_last_name;
                var result = await customer.save();
                return result;
       
    }

    public async destory(ctx: HttpContextContract) {
     
        var id = ctx.params.id;
        var customer = await customer.findOrFail(id);
        await customer.delete();
        return { message: "The customer has been deleted!" };
//     }
    }
}


//         var object = await ctx.auth.authenticate();
//     //     var cityId = ctx.request.input("cityId");
//     //     var typeId = ctx.request.input("typeId");

//     //     var query = Actor.query();

//     //     if (cityId) {
//     //         query.where("city_id", cityId);
//     //     }
//     //     if (typeId) {
//     //         query.where("type_id", typeId);
//     //     }

//     //     var result = await query;
//     //     return result;
//     // 
// }

//     public async getById(ctx: HttpContextContract) {

//         var id = ctx.params.id;
//         var result = await Customer.findOrFail(id);
//         return result;
//     }

//     public async create(ctx: HttpContextContract) {

//         const newSchema = schema.create({
//             customer_name: schema.string(),

//             contact_first_name: schema.string(),
//             contact_last_name: schema.string(),
//         });
//         const fields = await ctx.request.validate({ schema: newSchema })
//         var customer = new Customer();
//         customer.customerName = fields.customer_name;

//         customer.firstName = fields.contact_first_name;
//         customer.lastName = fields.contact_last_name;
//         var result = await customer.save();
//         return result;

//     }

//     public async update(ctx: HttpContextContract) {
//         const newSchema = schema.create({
//             customer_name: schema.string(),

//             contact_first_name: schema.string(),
//             contact_last_name: schema.string(),
//             id: schema.number(),
//         });
//         const fields = await ctx.request.validate({ schema: newSchema })
//         var id = fields.id;
//         var customer = await Customer.findOrFail(id);
//         customer.customerName = fields.customer_name;

//         customer.firstName = fields.contact_first_name;
//         customer.lastName = fields.contact_last_name;
//         var result = await customer.save();
//         return result;
//     }

//     public async destory(ctx: HttpContextContract) {

//         var id = ctx.params.id;
//         var customer = await customer.findOrFail(id);
//         await customer.delete();
//         return { message: "The customer has been deleted!" };
//     }
// }