import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { MongoDataService } from './mongo-data.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URL')
      }),
    }),
    
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema
      }
    ])
  ],
  providers: [MongoDataService],
  exports: [MongoDataService]
})
export class MongoDataModule { }
