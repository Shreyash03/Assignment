import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfiguration } from './config/typeorm.config';
import { UserModule } from './user/user/user.module';
import { UserRespository } from './user/user/user.repository';
import { UserService } from './user/user/user.service';


@Module({
  imports:[
      JwtModule.register({secret:'secret', signOptions:{expiresIn: 3600}}),
      PassportModule.register({defaultStrategy:'jwt'}),
      TypeOrmModule.forFeature([UserRespository]),
      UserModule,
      TypeOrmModule.forRoot(TypeOrmConfiguration),
      GraphQLModule.forRoot({
        driver: ApolloDriver,
        autoSchemaFile: true,
      }),
    ],
  controllers: [],
  providers: [UserService],
})
export class AppModule {}
