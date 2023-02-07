import {Inject} from "@nestjs/common";
import {BaseUseCase} from "../base.use-case";
import {UserService} from "../../models";
import {LoginUserInputDto} from "./input/login-user.input.dto";

export class LoginUserUseCase extends BaseUseCase {
    @Inject(UserService)
    private readonly userService: UserService;

    private inputDto: LoginUserInputDto;

    private _jwt: string;

    setInputDto(inputDto: LoginUserInputDto): void {
        this.inputDto = inputDto;
    }

    async execute() {
        const user = await this.userService.validateUser(
            this.inputDto.username,
            this.inputDto.password
        );

        this._jwt = this.userService.getJwt(user);
    }

    get jwt(): string {
        return this._jwt;
    }
}