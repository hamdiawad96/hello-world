import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer';
import Staff from './Staff';
import Rental from './Rental';

export default class Payment extends BaseModel {
  public static table = "customers,staffs,rentals";

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "customer_id", })
  public customer_id: number;

  
  @column({ serializeAs: "staff_id", })
  public staff_id: number;

  
  @column({ serializeAs: "rental_id", })
  public rental_id: number;
  
  @column({ serializeAs: "amount", })
  public amount: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime


  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Customer, {
    foreignKey: 'customer_id',
  })
  public customerId: BelongsTo<typeof Customer>

  @belongsTo(() => Staff, {
    foreignKey: 'staff_id',
  })
  public staffId: BelongsTo<typeof Staff>

  @belongsTo(() => Rental, {
    foreignKey: 'rental_id',
  })
  public rentalId: BelongsTo<typeof Rental>


}
