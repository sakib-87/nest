import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesModule } from './coffees/coffees.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
     
    CoffeesModule,
    DataModule,
  ],

  controllers: [],
 
  providers: [],
})
export class AppModule { }