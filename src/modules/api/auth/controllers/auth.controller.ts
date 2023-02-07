import {Body, Controller, Post } from '@nestjs/common';
import { BaseController } from '../../../../base/controllers/base.controller';
import { CreateRandomUserUseCase } from '../../../../use-cases/auth/create-random-user.use-case';
import {RegisterUserUseCase} from '../../../../use-cases/auth/register-user.use-case';
import i18n from '../../../../resources/lang/en';
import {RegisterDto} from "../requests/register.dto";
import {RegisterUserInputDto} from "../../../../use-cases/auth/input/register-user.input.dto";
import {ValidationPipe} from "../../../../base/pipes/validation.pipe";
import {RegisterSchema} from "../schemas/register.schema";
import {LoginSchema} from "../schemas/login.schema";
import {LoginDto} from "../requests/login.dto";
import {LoginUserUseCase} from "../../../../use-cases/auth/login-user.use-case";
import {LoginUserInputDto} from "../../../../use-cases/auth/input/login-user.input.dto";

@Controller('api/v1/auth')
export class AuthController extends BaseController {
    public constructor(
        private createRandomUserUseCase: CreateRandomUserUseCase,
        private registerUserUseCase: RegisterUserUseCase,
        private loginUserUseCase: LoginUserUseCase
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

    @Post('login')
    public async loginUser(
        @Body(
            new ValidationPipe(LoginSchema)
        ) body: LoginDto
    ) {
        try {
            const inputDto = new LoginUserInputDto();
            inputDto.username = body.username;
            inputDto.password = body.password;
            this.loginUserUseCase.setInputDto(inputDto);
            await this.loginUserUseCase.execute();
        } catch (exception) {
            return this.getErrorResponse(i18n.invalidUsernameOrPassword);
        }

        return {
            ...this.getSuccessResponse(i18n.userLoggedSuccessfully),
            token: this.loginUserUseCase.jwt
        };
    }
}