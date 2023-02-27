 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Database from '@ioc:Adonis/Lucid/Database';
import Customer from 'App/Models/Customer';
import Office from 'App/Models/Office';

export default class OfficesController {
    public async getAll(ctx: HttpContextContract) {

    var object = await ctx.auth.authenticate();
    console.log(object);
    var result = await Office.all();
    return result;

//         const page = request.input('page', 1)
// const limit = 10

// const posts = await Database.from('sales').paginate(page, limit)
// console.log(posts)    
}






public async index ({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 10

    const posts = await Database.from('offices').paginate(page, limit)

    // Changes the baseURL for the pagination links
    posts.baseUrl('/offices')

}



public async getById(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    var id = ctx.params.id;
    var result = await Office.findOrFail(id);
    
    return result;
}

public async create(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    const newSchema = schema.create({
        city: schema.string(),

         phone: schema.number(),
        address_line1: schema.string(),
        address_line2: schema.string(),
        state: schema.string(),
        country: schema.string(),
        postal_code: schema.string(),
        territory: schema.string(),



    });

   
    

    const fields = await ctx.request.validate({ schema: newSchema })
    var office = new Office();
    office.city = fields.city;
    
    office.phone = fields.phone;
    office.addressLine1 = fields.address_line1;
    office.addressLine2 = fields.address_line2;
    office.state = fields.state;
    office.country = fields.country;
    office.postalCode = fields.postal_code;
    office.territory = fields.territory;



            var result = await office.save();
            return result;
  

    

}



public async update(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    const newSchema = schema.create({
        city: schema.string(),

        phone: schema.number(),
       address_line1: schema.string(),
       address_line2: schema.string(),
       state: schema.string(),
       country: schema.string(),
       postal_code: schema.string(),
       territory: schema.string(),
        id: schema.number(),
    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var office = new Office();
    office.city = fields.city;
    
    office.phone = fields.phone;
    office.addressLine1 = fields.address_line1;
    office.addressLine2 = fields.address_line2;
    office.state = fields.state;
    office.country = fields.country;
    office.postalCode = fields.postal_code;
    office.territory = fields.territory;



            var result = await office.save();
            return result;
   
}

public async destory(ctx: HttpContextContract) {
 
    var id = ctx.params.id;
    var office = await office.findOrFail(id);
    await office.delete();
    return { message: "The office has been deleted!" };
//     }
}
}

