import {Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user.entity';
import {RandomUsernameGenerator} from '../utils/random-username.generator';

@Injectable()
export class UserService {
    @Inject(RandomUsernameGenerator)
    private readonly randomUsernameGenerator: RandomUsernameGenerator;

    constructor(
        @InjectModel(User.name) private readonly userRepository: Model<UserDocument>
    ) {}

    async createRandomUser(): Promise<UserDocument> {
        const user = new User();
        user.username = this.randomUsernameGenerator.generate();
        user.isAutoGenerated = true;
        console.log(user);
        return await this.userRepository.create(user);
    }
}