import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './DTO/AuthCredential.dto';
import { JwtPayload } from './jwt.payload';
import { UserInput } from './type/user.input';
import { UserRespository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRespository)
         private userRepository: UserRespository ,
         private jwtService: JwtService
    ){}
    
    async signup(userInput:UserInput){
        return this.userRepository.signup(userInput)
    }

    async signin(userInput:UserInput){
        const user =  await this.userRepository.signin(userInput)
        if(!user){
            throw new NotFoundException('user not found')
        }

        //create jwt token: first need to create payload
        const payload: JwtPayload={ username: user.username , id: user.id}

        const token =  await this.jwtService.sign(payload)

        return{token , user}
    }
}
