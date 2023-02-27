import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {

 
  
    public static table = "customers";
    @column({ isPrimary: true })
    public id: number
  
    @column({ serializeAs: "customer_name", })
    public customerName: string;

    @column({ serializeAs: "contact_first_name", })
    public firstName: string;
  
    @column({ serializeAs: "contact_last_name", })
    public lastName: string;

    @column({ serializeAs: "employee_id", })
    public employeeId: number;
  
    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime
  
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @hasMany(() => Employee, {
      foreignKey: 'employee_id',
    })
    public employeee: HasMany<typeof Employee>




  
  
  }