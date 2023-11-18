import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly person;
    private readonly person2;
    private readonly person5;
    constructor(appService: AppService, person: {
        name: string;
        age: number;
    }, person2: {
        name: string;
        desc: number;
    }, person5: {
        name: string;
        desc: string;
    });
    getHello(): string;
    header(accept: string, headers: Record<string, any>): void;
    ip(ip: string): void;
    session(session: any): any;
}
