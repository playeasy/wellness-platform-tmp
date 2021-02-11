import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserService } from './domain/user/user.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './database/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://wellness-platform:uXf8VrFo1GNkL3mG@wellness-platform.fd0wb.mongodb.net/wellness-platform?retryWrites=true&w=majority',
    }),
    GraphQLModule.forRoot({}),
    UserService
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
