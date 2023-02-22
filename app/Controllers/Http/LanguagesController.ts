 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Inventory from 'App/Models/Inventory';
import Language from 'App/Models/Language';

export default class LanguagesController {

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Inventory.query().preload("filmId");
        var result = await Inventory.query().preload("storeId");

        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Language.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            name: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var language = new Language();
        language.name = fields.name;
        var result = await language.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            name: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var language = await Language.findOrFail(id);
        language.name = fields.name;
        var result = await language.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var language = await Language.findOrFail(id);
        await language.delete();
        return { message: "The language has been deleted!" };
    }
}
