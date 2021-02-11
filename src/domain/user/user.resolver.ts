import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UserDto } from './dtos/user.dto';
import { UserArgs } from './inputs/user.args';
import { UserCreateInput } from './inputs/user.input';
import { UserService } from './user.service';


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDto)
  async getUser(@Args() args: UserArgs): Promise<UserDto> {
    return await this.userService.getUser(args);
  }

  @Mutation(() => UserDto)
  async createUser(@Args() input: UserCreateInput): Promise<UserDto> {
    return await this.userService.createUser(input);
  }
}