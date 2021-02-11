import { ArgsType, Field } from "@nestjs/graphql";
import { ObjectID } from "typeorm";

@ArgsType()
export class UserArgs {
    @Field()
    public readonly id: ObjectID;
}