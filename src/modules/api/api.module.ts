import { Module } from '@nestjs/common';
import { AuthController } from './auth/controllers/auth.controller';
import { UseCasesModule } from '../../use-cases/use-cases.module';

@Module({
    imports: [
        UseCasesModule
    ],
    controllers: [AuthController],
})
export class ApiModule {}