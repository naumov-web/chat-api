import { RegisterUserInputDto } from './input/register-user.input.dto';
import { BaseUseCase } from '../base.use-case';
import {Inject} from "@nestjs/common";
import {UserDocument, UserService} from "../../models";

export class RegisterUserUseCase extends BaseUseCase {

    @Inject(UserService)
    private readonly userService: UserService;

    private inputDto: RegisterUserInputDto;

    private _jwt: string;

    setInputDto(inputDto: RegisterUserInputDto): void {
        this.inputDto = inputDto;
    }

    async execute() {
        const user: UserDocument = await this.userService.registerUser(this.inputDto.username, this.inputDto.password);
        this._jwt = this.userService.getJwt(user);
    }

    get jwt(): string {
        return this._jwt;
    }
}