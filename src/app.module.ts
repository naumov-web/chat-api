import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {WebModule} from './modules/web/web.module';
import {ApiModule} from './modules/api/api.module';
import {User, UserSchema} from './models/user/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import DBConnect from './configs/database';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    DBConnect,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src/public'),
      exclude: ['/api*'],
    }),
    WebModule,
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
