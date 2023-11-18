/// <reference types="multer" />
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    query(name: string, age: number): string;
    urlParam(id: string): string;
    body(createPersonDto: CreatePersonDto): string;
    body2(createPersonDto: CreatePersonDto, files: Array<Express.Multer.File>): string;
}
