import {  TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfiguration: TypeOrmModuleOptions ={

    username: 'postgres' ,
    password: 'root',
    port: 5432,
    host: 'localhost',
    type: 'postgres',
    database:'user_data',
    entities : [__dirname + '/../**/*.entity.{ts,js}'] ,
    synchronize: true,

};