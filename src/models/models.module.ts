import { Module } from '@nestjs/common';
import { User, UserSchema, UserService, RandomUsernameGenerator } from './';
import { MongooseModule } from '@nestjs/mongoose';
import {JwtModule} from "@nestjs/jwt";

@Module({
    exports: [
        User, UserService, RandomUsernameGenerator
    ],
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema,
            },
        ]),
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '6h' },
        }),
    ],
    providers: [
        User, UserService, RandomUsernameGenerator
    ]
})
export class ModelsModule {}