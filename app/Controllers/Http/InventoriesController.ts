 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Inventory from 'App/Models/Inventory';


export default class InventoriesController {

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Inventory;
        return result;
    }
    
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Inventory.findOrFail(id);
        return result;
    }
    
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            store_id: schema.number(),
            film_id: schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var iventory = new Inventory;
        iventory.store_id = fields.store_id;
        iventory.film_id = fields.film_id;
        var result = await iventory.save;
        return result;
    
    }
    
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            store_id: schema.number(),
            film_id: schema.number(),
            id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var inventory = await Inventory.findOrFail(id);
    
        var inventory = await Inventory.findOrFail(id);
        inventory.store_id = fields.store_id;
        inventory.film_id = fields.film_id;
        var result = await inventory.save;
        return result;
    }
    
    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var inventory = await Inventory.findOrFail(id);
        await inventory.delete;
        return { message: "The inventory has been deleted!" };
    }
    
    
    }
