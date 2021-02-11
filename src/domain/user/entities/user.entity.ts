import { Column, ObjectID, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentTypesEnum } from '../enums/payment-types.enum';
import { RolesEnum } from '../enums/roles.enum';

@Entity({ name: 'user' })
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  available: boolean; //@todo не понятно для чего это поле, но по смылсу вроде bool

  @Column()
  books: Record<string, unknown>;

  @Column()
  department: string;

  @Column()
  email: string;

  @Column()
  expertise: Record<string, unknown>;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @Column()
  height: number;

  @Column()
  level: number;

  @Column()
  notes: string;

  @Column()
  paymentType: PaymentTypesEnum;
 
  @Column()
  phone: string;

  @Column()
  rate: string; //@todo тут тоже не понятна смысловая нагрузка этого поля

  @Column()
  role: RolesEnum;

  @Column()
  weight: number;

  @Column()
  password: string; //@todo пароль надо захешировать
}
