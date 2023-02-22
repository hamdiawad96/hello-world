import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import OrderItem from './OrderItem';

export default class Order extends BaseModel {

  public static table = "customers";


  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "customer_id", })
  public customer_id: number;

  
  @column({ serializeAs: "order_status", })
  public order_status: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => OrderItem, {
    foreignKey: 'customer_id',
  })
  public customerId: BelongsTo<typeof OrderItem>
}
