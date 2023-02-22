import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Film from './Film';
import Category from './Category';

export default class FilmCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "film_id	", })
  public film_id	: number;

  @column({ serializeAs: "category_id	", })
  public category_id	: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Film, {
    foreignKey: 'film_id',
  })
  public filmId: BelongsTo<typeof Film>

  
  @belongsTo(() => Category, {
    foreignKey: 'category_id',
  })
  public categoryId: BelongsTo<typeof Category>

}
