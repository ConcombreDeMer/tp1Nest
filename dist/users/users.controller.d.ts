import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): string;
    find(name: string): string;
    create(name: string, mdp: string): string;
    delete(): string;
}
