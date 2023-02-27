import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer';

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public static table = 'customers';

  @column({ serializeAs: "customer_id", })
  public customerId: number;

   
  @column({ serializeAs: "check_number", })
  public checkNumber: number;

   
  @column({ serializeAs: "payment_date", })
  public paymentDate: DateTime;

    
  @column({ serializeAs: "amount", })
  public amount: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @hasMany(() => Customer, {
    foreignKey: 'customerId',
  })
  public managerStaff: HasMany<typeof Customer>
}
