import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectID } from 'typeorm';
import { PaymentTypesEnum } from '../enums/payment-types.enum';
import { RolesEnum } from '../enums/roles.enum';

@ObjectType("")
export class UserDto {
//   @Field(type => Int)
//   id: number;

//   @FilterableField({ nullable: true })
//   firstName?: string;

//   @Field({ nullable: true })
//   lastName?: string;

//   @Field(type => [Post])
//   posts: Post[];

  @Field()
  id: ObjectID;

  @Field()
  available: boolean; //@todo не понятно для чего это поле, но по смылсу вроде bool

  @Field()
  books: Record<string, unknown>;

  @Field()
  department: string;

  @Field()
  email: string;

  @Field()
  expertise: Record<string, unknown>;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  middleName: string;

  @Field()
  height: number;

  @Field()
  level: number;

  @Field()
  notes: string;

  @Field()
  paymentType: PaymentTypesEnum;
 
  @Field()
  phone: string;

  @Field()
  rate: string;

  @Field()
  role: RolesEnum;

  @Field()
  weight: number;

  @Field()
  password: string; 
}