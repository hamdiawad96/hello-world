import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order';
import Product from './Product';

export default class OrderItem extends BaseModel {
  public static table = "orders,products";

  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "order_id", })
  public order_id: number;

  
  @column({ serializeAs: "product_id", })
  public product_id: number;

  
  @column({ serializeAs: "quantity", })
  public quantity: number;

  
  @column({ serializeAs: "list_price", })
  public list_price: number;

  
  @column({ serializeAs: "discount", })
  public discount: number;



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => OrderItem, {
    foreignKey: 'order_id',
  })
  public orderId: BelongsTo<typeof OrderItem>

  @belongsTo(() => Product, {
    foreignKey: 'product_id',
  })
  public productId: BelongsTo<typeof Product>
}
