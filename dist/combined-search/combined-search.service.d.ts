import { BooksService } from '../books/books.service';
import { DvdService } from '../dvd/dvd.service';
import { UsersService } from '../users/users.service';
export declare class CombinedSearchService {
    private readonly booksService;
    private readonly dvdService;
    private readonly usersService;
    constructor(booksService: BooksService, dvdService: DvdService, usersService: UsersService);
    searchAll(): Promise<any>;
}
