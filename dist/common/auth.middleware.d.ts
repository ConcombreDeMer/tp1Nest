import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly validAuthToken;
    use(req: Request, res: Response, next: NextFunction): void;
}
