import { Module } from '@nestjs/common';
import { IDataService } from './data.service';
import { MongoDataModule } from './mongo-data/mongo-data.module';
import { MongoDataService } from './mongo-data/mongo-data.service';

@Module({
  imports: [MongoDataModule],

  providers: [
    {
      provide: IDataService,
      useExisting: MongoDataService
    }
  ],
  
  exports: [IDataService],
})
export class DataModule { }
