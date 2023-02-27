import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "order_date", })
  public orderDate: DateTime;

  
  @column({ serializeAs: "required_date", })
  public requiredDate: DateTime;

  
  @column({ serializeAs: "shipped_date", })
  public shippedDate: DateTime;

  
  @column({ serializeAs: "status", })
  public status: string;

  
  @column({ serializeAs: "comments", })
  public comments: string;

  
  @column({ serializeAs: "customer_id", })
  public customerId: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
    order: DateTime;
}
