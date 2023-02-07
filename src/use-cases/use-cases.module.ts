import { Module } from '@nestjs/common';
import { ModelsModule } from '../models/models.module';
import { CreateRandomUserUseCase } from './auth/create-random-user.use-case';
import { RegisterUserUseCase } from './auth/register-user.use-case';
import { LoginUserUseCase } from './auth/login-user.use-case';

@Module({
    exports: [
        CreateRandomUserUseCase,
        RegisterUserUseCase,
        LoginUserUseCase
    ],
    imports: [
        ModelsModule
    ],
    providers: [
        CreateRandomUserUseCase,
        RegisterUserUseCase,
        LoginUserUseCase
    ]
})
export class UseCasesModule {}