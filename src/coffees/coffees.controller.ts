import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeeService.findOne(id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        this.coffeeService.create(createCoffeeDto);
        return createCoffeeDto;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id);
    }
}
