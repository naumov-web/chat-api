import {Body, Controller, Post } from '@nestjs/common';
import { BaseController } from '../../../../base/controllers/base.controller';
import { CreateRandomUserUseCase } from '../../../../use-cases/auth/create-random-user.use-case';
import {RegisterUserUseCase} from '../../../../use-cases/auth/register-user.use-case';
import i18n from '../../../../resources/lang/en';
import {RegisterDto} from "../requests/register.dto";
import {RegisterUserInputDto} from "../../../../use-cases/auth/input/register-user.input.dto";
import {ValidationPipe} from "../../../../base/pipes/validation.pipe";
import {RegisterSchema} from "../schemas/register.schema";

@Controller('api/v1/auth')
export class AuthController extends BaseController {
    public constructor(
        private createRandomUserUseCase: CreateRandomUserUseCase,
        private registerUserUseCase: RegisterUserUseCase
    ) {
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

    @Post('register')
    public async registerUser(
        @Body(
            new ValidationPipe(RegisterSchema)
        ) body: RegisterDto
    ) {
        try {
            const inputDto = new RegisterUserInputDto();
            inputDto.username = body.username;
            inputDto.password = body.password;
            this.registerUserUseCase.setInputDto(inputDto);
            await this.registerUserUseCase.execute();
        } catch (exception) {
            return this.getErrorResponse(i18n.usernameAlreadyRegistered);
        }

        return {
            ...this.getSuccessResponse(i18n.userRegisteredSuccessfully),
            token: this.registerUserUseCase.jwt
        };
    }
}