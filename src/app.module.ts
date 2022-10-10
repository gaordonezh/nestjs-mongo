import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://GERMANORDONEZ:5j0j2JUVw1eWn43y@principalcluster.cj3an.mongodb.net/nest_crud?retryWrites=true&w=majority',
    ),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
