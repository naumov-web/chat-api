import { MongooseModule } from '@nestjs/mongoose';

export default MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL);