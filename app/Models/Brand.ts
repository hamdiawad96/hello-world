import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Brand extends BaseModel {
  public static table = "staffs";

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "brand_name", })
  public brand_name: string;

  
}
