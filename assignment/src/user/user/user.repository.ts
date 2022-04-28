import { AuthCredentialsDTO } from "./DTO/AuthCredential.dto";
import { UserEntity } from "./user.entity";
import * as crypto from 'crypto-js'
import { EntityRepository } from "typeorm/decorator/EntityRepository";
import {  Repository } from "typeorm";
import { UserInput } from "./type/user.input";


@EntityRepository(UserEntity)
export class UserRespository extends Repository<UserEntity>  {

    async signup(userInput:UserInput){
        console.log("hello")
        const user = new UserEntity()
        
        user.username =userInput.username
        user.password =`${crypto.MD5(userInput.password)}`
        
        await user.save()

        return user

    }
    async signin(userInput:UserInput){
        const{username ,password} = userInput

        const user = await this.findOne({username})
       
        if(!user){
            return null
        }

        const validatePassword= user.validatePassword(password)

        if(!validatePassword){
            return null
        }
        // console.log('returning user')
        return user;
    }

}