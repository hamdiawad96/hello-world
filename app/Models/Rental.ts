import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Inventory from './Inventory';
import Customer from './Customer';
import Staff from './Staff';

export default class Rental extends BaseModel {
  public static table = "inventorie,customers,satffs";

  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "rental_date", })
  public rental_date: number;

  
  @column({ serializeAs: "inventory_id", })
  public inventory_id: number;

  
  @column({ serializeAs: "customer_id", })
  public customer_id: number;

  
  @column({ serializeAs: "return_date", })
  public return_date: number;

  
  @column({ serializeAs: "staff_id", })
  public staff_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Inventory, {
    foreignKey: 'inventory_id',
  })
  public inventoryId: BelongsTo<typeof Inventory>
  @belongsTo(() => Customer, {
    foreignKey: 'customer_id',
  })
  public customerId: BelongsTo<typeof Customer>
  @belongsTo(() => Staff, {
    foreignKey: 'staff_id',
  })
  public staffId: BelongsTo<typeof Staff>
}
