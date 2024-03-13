export declare class UsersService {
    nbUsers: number;
    users: {
        id: number;
        name: string;
        mdp: string;
    }[];
    findAll(): string;
    find(name: string): any;
    create(name: string, mdp: string): string;
}
