 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

 import { schema, rules } from '@ioc:Adonis/Core/Validator'
import FilmText from 'App/Models/FilmText';

export default class FilmTextController {
    
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await FilmText.all();
        return result;
    }
    
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await FilmText.findOrFail(id);
        return result;
    }
    
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
    
        const newSchema = schema.create({
            title: schema.string(),
            description: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var filmtext = new FilmText;
        filmtext.title = fields.title;
        filmtext.decription = fields.description;
        var result = await filmtext.save;
        return result;
    
    }
    
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            title: schema.string(),
            description: schema.string(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var filmtext = await FilmText.findOrFail(id);
    
        var filmtext = await FilmText.findOrFail(id);
        filmtext.title = fields.title;
        filmtext.decription = fields.description;
        var result = await filmtext.save;
        return result;
    }
    
    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
    
        var id = ctx.params.id;
        var filmtext = await FilmText.findOrFail(id);
        await filmtext.delete;
        return { message: "The film text has been deleted!" };
    }
    
    
    }

