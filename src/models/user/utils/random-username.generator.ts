import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

export class RandomUsernameGenerator {
    public generate(): string {
        return randomStringGenerator();
    }
}