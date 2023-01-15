import {Controller, Post } from '@nestjs/common';
import { BaseController } from '../../../base/controllers/base.controller';
import { CreateRandomUserUseCase } from '../../../use-cases/auth/create-random-user.use-case';
import i18n from '../../../resources/lang/en';

@Controller('api/v1/auth')
export class AuthController extends BaseController {
    public constructor(private createRandomUserUseCase: CreateRandomUserUseCase) {
        super();
    }

    @Post('random-user')
    public async createRandomUser() {
        await this.createRandomUserUseCase.execute();

        return {
            ...this.getSuccessResponse(i18n.userCreatedSuccessfully),
            token: this.createRandomUserUseCase.jwt
        };
    }
}