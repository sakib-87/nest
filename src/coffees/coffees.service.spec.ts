import { Test, TestingModule } from "@nestjs/testing";
import { DataModule } from "src/data/data.module";
import { IDataService } from "src/data/data.service";
import { CoffeesService } from "./coffees.service";

class MockDataService { 
    autocomplete(query: string) {}
}

describe('CoffeeService', () => {
    let service: CoffeesService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [DataModule],
            providers: [
                CoffeesService,
                {
                    provide: IDataService,
                    useValue: MockDataService
                }
            ],
        }).compile();

    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});