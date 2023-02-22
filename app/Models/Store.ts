import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Staff from './Staff';
import Address from './Address';


export default class Store extends BaseModel {
  public static table = "staffs";


  @column({ isPrimary: true })
  public id: number
  @column({ serializeAs: "manager_staff_id", })
  public manager_staff_id: number;
  @column({ serializeAs: "adress_id", })
  public adress_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Staff, {
    foreignKey: 'managerStaffId',
  })
  public managerStaff: BelongsTo<typeof Staff>

  @belongsTo(() => Address, {
    foreignKey: 'address_id',
  })
  public addressId: BelongsTo<typeof Address>
}
