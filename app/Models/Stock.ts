import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Store from './Store';
import Product from './Product';

export default class Stock extends BaseModel {
  public static table = "stores,products";

  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "store_id", })
  public store_id: number;

  
  @column({ serializeAs: "product_id", })
  public product_id: number;

  
  @column({ serializeAs: "qunatity", })
  public qunatity: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Store, {
    foreignKey: 'store_id',
  })
  public storeId: BelongsTo<typeof Store>

  @belongsTo(() => Product, {
    foreignKey: 'product_id',
  })
  public productId: BelongsTo<typeof Product>


}
