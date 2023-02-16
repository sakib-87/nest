import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { IDataService } from 'src/data/data.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {

    constructor(private readonly dataService: IDataService) { }

    findAll() {
        return this.dataService.findAllCoffees();
    }

    async findOne(id: string) {
        // // const coffee = await this.coffeeModel.findOne({ _id: id }).exec();
        // // if (!coffee) {
        // //     throw new NotFoundException(`coffee #${id} not found`);
        // // }
        // return coffee;
    }

    create(createCorreeDto: CreateCoffeeDto) {
        // const coffee = new this.coffeeModel(createCorreeDto);
        // return coffee.save();
    }

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        // const existingCoffee = await this.coffeeModel
        //     .findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true })
        //     .exec();

        // if (!existingCoffee) {
        //     throw new NotFoundException(`coffee #${id} not found`);
        // }
        // return existingCoffee;
    }

    async remove(id: string) {
        // const coffee = await this.findOne(id);
        // return coffee.remove();
    }
}