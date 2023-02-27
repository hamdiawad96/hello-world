 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator';
import Customer from 'App/Models/Customer';
import Eomploye from 'App/Models/Eomploye';

export default class EmployeesController {
    
    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
    //     var cityId = ctx.request.input("cityId");
    //     var typeId = ctx.request.input("typeId");

    //     var query = Actor.query();

    //     if (cityId) {
    //         query.where("city_id", cityId);
    //     }
    //     if (typeId) {
    //         query.where("type_id", typeId);
    //     }

    //     var result = await query;
    //     return result;
    // 
}

    public async getById(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var result = await Eomploye.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({

            first_name: schema.string(),
            last_name: schema.string(),
            extension: schema.string(),
            email: schema.string(),
            office_code: schema.number(),
            reports_to: schema.number(),
            job_title: schema.string(),


            

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var employe = new Eomploye();

        employe.firstName = fields.first_name;
        employe.lastName = fields.last_name;
        employe.extension = fields.extension;
        employe.email = fields.email;
        employe.officeCode = fields.office_code;
        employe.reportsTo = fields.reports_to;
        employe.jobTitle = fields.job_title;


        var result = await employe.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {
        const newSchema = schema.create({

    
            first_name: schema.string(),
            last_name: schema.string(),
            extension: schema.string(),
            email: schema.string(),
            office_code: schema.number(),
            reports_to: schema.number(),
            job_title: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var employe = await Eomploye.findOrFail(id);
        employe.firstName = fields.first_name;
        employe.lastName = fields.last_name;
        employe.extension = fields.extension;
        employe.email = fields.email;
        employe.officeCode = fields.office_code;
        employe.reportsTo = fields.reports_to;
        employe.jobTitle = fields.job_title;
        var result = await employe.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var employe = await employe.findOrFail(id);
        await employe.delete();
        return { message: "The employe has been deleted!" };
    }
}
