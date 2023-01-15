import { Module } from '@nestjs/common';
import { DocsController } from './controllers/docs.controller';

@Module({
    controllers: [DocsController],
    providers: []
})
export class WebModule {}
