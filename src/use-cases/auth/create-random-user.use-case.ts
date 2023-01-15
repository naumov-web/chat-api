import { BaseUseCase } from '../base.use-case';
import { Inject } from '@nestjs/common';
import { UserService } from '../../models';

export class CreateRandomUserUseCase extends BaseUseCase {
    @Inject(UserService)
    private readonly userService: UserService;

    private _jwt: string;

    public async execute() {
        const user = await this.userService.createRandomUser();
        this._jwt = this.userService.getJwt(user);
    }

    get jwt(): string {
        return this._jwt;
    }
}