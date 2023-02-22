import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FilmText extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "title	", })
  public title	: string;
  @column({ serializeAs: "decription	", })
  public decription	: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
