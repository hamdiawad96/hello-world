import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address';
import Store from './Store';

export default class Staff extends BaseModel {
  public static table = "address,stores";

  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "first_name", })
  public first_name: string;

  
  @column({ serializeAs: "last_name", })
  public last_name: string;

  
  @column({ serializeAs: "address_id", })
  public address_id: number;

  
  @column({ serializeAs: "email", })
  public email: string;

    
  @column({ serializeAs: "store_id", })
  public store_id: number;

    
  @column({ serializeAs: "active", })
  public active: number;

    
  @column({ serializeAs: "username", })
  public username: string;

   
  @column({ serializeAs: "password", })
  public password: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Address, {
    foreignKey: 'address_id',
  })
  public addressId: BelongsTo<typeof Address>

  @belongsTo(() => Store, {
    foreignKey: 'store_id',
  })
  public storeId: BelongsTo<typeof Store>


}
