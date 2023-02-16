import { Injectable } from '@nestjs/common';
import { IDataService } from '../data.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Coffee } from './entities/coffee.entity';


@Injectable()
export class MongoDataService extends IDataService {

    constructor(
        @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>
    ) {
        super();
    }

    findAllCoffees() {
        return this.coffeeModel.find();
    }
}
