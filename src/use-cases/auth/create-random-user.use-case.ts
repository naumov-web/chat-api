import { BaseUseCase } from '../base.use-case';
import { Inject } from '@nestjs/common';
import { UserService } from '../../models';

export class CreateRandomUserUseCase extends BaseUseCase {
    @Inject(UserService)
    private readonly userService: UserService;

    public async execute() {
        const result = await this.userService.createRandomUser();
        console.log(result);
    }

}