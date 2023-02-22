import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Store from 'App/Models/Store';

export default class StoresController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var result = await Store.query().preload("managerStaff");
        var result = await Store.query().preload("addressId");

        return result;
}

public async getById(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
        console.log(object);

    var id = ctx.params.id;
    var result = await Store.findOrFail(id);
    return result;
}

public async create(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
        console.log(object);

    // var fields = ctx.request.all();
    // var store = new Store();
    // store.manager_staff_id = fields.manager_staff_id;
    // store.adress_id = fields.adress_id;

    // var result = await store.save();
    // return result;
    const newSchema = schema.create({
        manager_staff_id: schema.number(),
        adress_id: schema.number(),
        id: schema.number(),
    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id;
    var store = await Store.findOrFail(id);
    store.manager_staff_id = fields.manager_staff_id;
    store.adress_id = fields.adress_id;
    var result = await store.save();
    return result;
}

public async update(ctx: HttpContextContract) {

    var object = await ctx.auth.authenticate();
        console.log(object);
    // var fields = ctx.request.all();
    // var id = fields.id;
    // var store = await Store.findOrFail(id);
    // store.manager_staff_id = fields.manager_staff_id;
    // store.adress_id = fields.adress_id;
    //     var result = await store.save();
    // return result;
    const newSchema = schema.create({
        manager_staff_id: schema.number(),
        adress_id: schema.number(),
        id: schema.number(),
    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id;
    var store = await Store.findOrFail(id);
    store.manager_staff_id = fields.manager_staff_id;
    store.adress_id = fields.adress_id;
    var result = await store.save();
    return result;


}


public async destory(ctx: HttpContextContract) {

    var object = await ctx.auth.authenticate();
        console.log(object);

    var id = ctx.params.id;
    var store = await Store.findOrFail(id);
    await store.delete();
    return { message: "The store has been deleted!" };
}
}