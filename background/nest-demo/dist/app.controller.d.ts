/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class AppController {
    private readonly cat;
    constructor(cat: any);
    getHello(): any;
    add(res: any): StreamableFile;
    upload(file: Express.Multer.File): string;
    cookie(response: Response, res: Request): string;
}
