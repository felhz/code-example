import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly appService;
    constructor(appService: CatsService);
    getHello(): Promise<Cat[]>;
    create(): Promise<string>;
}
