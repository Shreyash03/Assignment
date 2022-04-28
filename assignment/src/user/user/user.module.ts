import {  Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GQLAuthGuard } from './gql.authguard';
import { JwtStrategy } from './jwt.strategy';
import { UserInput } from './type/user.input';
import { UserEntity } from './user.entity';
import { UserRespository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [ 
        //for jwt
        JwtModule.register({secret:'secret', signOptions:{expiresIn: 3600}}),
        //for passport
        PassportModule.register({defaultStrategy:'jwt'}),
        //Typeorm dependency
        TypeOrmModule.forFeature([UserRespository])],
        
    providers: [UserService ,JwtStrategy, UserResolver, UserInput, GQLAuthGuard],
    controllers: []
    
})
export class UserModule{}
