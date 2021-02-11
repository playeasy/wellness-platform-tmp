import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { QueryService } from "@nestjs-query/core"
import { UserArgs } from "./inputs/user.args";
import { UserCreateInput } from "./inputs/user.input";
import { UserDto } from "./dtos/user.dto";

@Injectable()
export class UserService {
    async getUser(args: UserArgs): Promise<UserDto> {
        return {} as UserDto;
    }

    async createUser(input: UserCreateInput): Promise<UserDto> {
        return {} as UserDto;
    }
}