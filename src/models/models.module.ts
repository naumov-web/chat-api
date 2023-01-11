import { Module } from '@nestjs/common';
import { User, UserSchema, UserService, RandomUsernameGenerator } from './';
import { MongooseModule } from '@nestjs/mongoose';

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
    ],
    providers: [
        User, UserService, RandomUsernameGenerator
    ]
})
export class ModelsModule {}