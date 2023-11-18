import { NextFunction, Request, Response } from 'express';
export declare class AaaController {
    hello(host: any): any;
    ccc(req: Request): void;
    ddd(res: Response): string;
    eee(next: NextFunction): string;
    eee2(next: NextFunction): string;
    ggg(): string;
    user(): {
        name: string;
        age: number;
    };
}
