import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer';

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

    
  @column({ serializeAs: "product_dode", })
  public productDode: string;

   
  @column({ serializeAs: "product_name", })
  public productName: string;

  @column({ serializeAs: "product_line_id", })
  public productLineId: number;

  @column({ serializeAs: "product_scale", })
  public productScale: number;

  @column({ serializeAs: "product_vendor", })
  public productVendor: string;

  @column({ serializeAs: "product_description", })
  public productDescription: string;

  @column({ serializeAs: "quantity_in_stock", })
  public quantityInsStock: number;

  @column({ serializeAs: "price", })
  public price: number;

  @column({ serializeAs: "msrp", })
  public msrp: number;
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}
