import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Eomploye extends BaseModel {



  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "first_name", })
  public firstName: string;

  @column({ serializeAs: "last_name", })
  public lastName: string;

  @column({ serializeAs: "extension", })
  public extension: string;

  
  @column({ serializeAs: "email", })
  public email: string;

  
  @column({ serializeAs: "office_code", })
  public officeCode: number;

  
  @column({ serializeAs: "reports_to", })
  public reportsTo: number;

  
  @column({ serializeAs: "job_title", })
  public jobTitle: string;




  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
