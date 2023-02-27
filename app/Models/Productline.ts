import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Productline extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "product_line", })
  public productLine: string;

   
  @column({ serializeAs: "text_description", })
  public textDescription: string;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
