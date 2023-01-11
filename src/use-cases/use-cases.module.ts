import { Module } from '@nestjs/common';
import { ModelsModule } from '../models/models.module';
import { CreateRandomUserUseCase } from './auth/create-random-user.use-case';

@Module({
    exports: [
        CreateRandomUserUseCase
    ],
    imports: [
        ModelsModule
    ],
    providers: [
        CreateRandomUserUseCase
    ]
})
export class UseCasesModule {}