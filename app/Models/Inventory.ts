import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Film from './Film';
import Store from './Store';

export default class Inventory extends BaseModel {

  public static table = "films , stores ";


  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "film_id	", })
  public film_id	: number;


  @column({ serializeAs: "store_id	", })
  public store_id	: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Film, {
    foreignKey: 'film_id',
  })
  public filmId: BelongsTo<typeof Film>

  @belongsTo(() => Store, {
    foreignKey: 'store_id',
  })
  public storeId: BelongsTo<typeof Store>
}
