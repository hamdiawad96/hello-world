import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Brand from './Brand';
import Category from './Category';

export default class Product extends BaseModel {
  public static table = "brands,categories";

  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "product_name", })
  public product_name: string;

  
  @column({ serializeAs: "brand_id", })
  public brand_id: number;

  
  @column({ serializeAs: "category_id", })
  public category_id: number;

  
  @column({ serializeAs: "model_year", })
  public model_year: number;

  
  @column({ serializeAs: "list_price", })
  public list_price: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Brand, {
    foreignKey: 'brand_id',
  })
  public brandId: BelongsTo<typeof Brand>

  @belongsTo(() => Category, {
    foreignKey: 'category_id',
  })
  public categoryId: BelongsTo<typeof Category>
}
