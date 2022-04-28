import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as crypto from "crypto-js"


@Entity('User')
@Unique(['username'])
export class UserEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    validatePassword(password:string){
        const encypt =`${crypto.MD5(password)}`
        return encypt == this.password
    }

    // @Column()
    // mob: number

    // @Column()
    // fname: string

    // @Column()
    // lname: string

}