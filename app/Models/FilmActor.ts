import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Actor from './Actor';
import Film from './Film';

export default class FilmActor extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "actor_id	", })
  public actor_id	: number;
  @column({ serializeAs: "film_id	", })
  public film_id	: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Actor, {
    foreignKey: 'actor_id',
  })
  public actorId: BelongsTo<typeof Actor>

  @belongsTo(() => Film, {
    foreignKey: 'film_id',
  })
  public filmId: BelongsTo<typeof Film>

}
