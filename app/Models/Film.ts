import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Language from './Language';

export default class Film extends BaseModel {
  public static table = "films";
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "title", })
  public title: string;

  
  @column({ serializeAs: " description", })
  public description: string;

  @column({ serializeAs: "release year", })
  public release_year: Number;

   
  @column({ serializeAs: "language_id", })
  public language_id: Number;

  
  @column({ serializeAs: "original_language_id", })
  public original_language_id: Number;

  
  @column({ serializeAs: "rental_duration", })
  public rental_duration: Number;

  
  @column({ serializeAs: "rental_rate", })
  public rental_rate: Number;

  
  
  @column({ serializeAs: "length", })
  public length: Number;

  
  
  @column({ serializeAs: "replacement_cost	", })
  public replacement_cost	: Number;

  
  
  @column({ serializeAs: "rating	", })
  public rating	: string;

  
  @column({ serializeAs: "special_features	", })
  public special_features	: string;

  //description
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Language, {
    foreignKey: 'language_id',
  })
  public languageId: BelongsTo<typeof Language>

}
