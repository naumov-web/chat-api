import { Module } from '@nestjs/common';
import { ModelsModule } from '../models/models.module';
import { CreateRandomUserUseCase } from './auth/create-random-user.use-case';
import {RegisterUserUseCase} from "./auth/register-user.use-case";

@Module({
    exports: [
        CreateRandomUserUseCase,
        RegisterUserUseCase
    ],
    imports: [
        ModelsModule
    ],
    providers: [
        CreateRandomUserUseCase,
        RegisterUserUseCase
    ]
})
export class UseCasesModule {}