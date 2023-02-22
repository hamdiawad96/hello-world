import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address';
import Store from './Store';


export default class Customer extends BaseModel {
  public static table = "customers";
  @column({ isPrimary: true })
  public id: number;
 
  @column({ serializeAs: "store_id", })
  public store_id: number;

  @column({ serializeAs: "first_name", })
  public first_name: string;

  @column({ serializeAs: "last_name", })
  public last_name: string;

  @column({ serializeAs: "email", })
  public email: string;

  @column({ serializeAs: "address_id", })
  public address_id: number;
  
  @column({ serializeAs: "active", })
  public active: number;



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Store, {
    foreignKey: 'store_id',
  })
  public storeId: BelongsTo<typeof Store>

  
  @belongsTo(() => Address, {
    foreignKey: 'address_id',
  })
  public addressId: BelongsTo<typeof Address>

}