import { Injectable, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from 'src/data/data.module';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
    imports: [DataModule],

    controllers: [CoffeesController],

    providers: [
        CoffeesService,
    ],

    exports: [CoffeesService]
})
export class CoffeesModule { }