import { Field, InputType } from "@nestjs/graphql";
import { PaymentTypesEnum } from "../enums/payment-types.enum";
import { RolesEnum } from "../enums/roles.enum";


@InputType()
export class UserCreateInput {
    @Field()
    public readonly available: boolean;

    @Field()
    public readonly department: string;

    @Field()
    public readonly email: string;

    @Field()
    public readonly firstName: string;

    @Field()
    public readonly lastName: string;

    @Field()
    public readonly middleName: string;
    
    @Field()
    public readonly height: number;

    @Field()
    public readonly level: number;

    @Field()
    public readonly paymentType: PaymentTypesEnum;
    
    @Field()
    public readonly phone: string;

    @Field()
    public readonly phonrolee: RolesEnum;

    @Field()
    public readonly weight: number;

    @Field()
    public readonly password: string;
}