import { Injectable } from '@nestjs/common';
import { BooksService } from '../books/books.service';
import { DvdService } from '../dvd/dvd.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class CombinedSearchService {
  constructor(
    private readonly booksService: BooksService,
    private readonly dvdService: DvdService,
    private readonly usersService: UsersService,
  ) {}

  async searchAll(): Promise<any> {
    const books = await this.booksService.findAll();
    const dvds = await this.dvdService.findAll();
    const users = await this.usersService.findAll();

    return { books, dvds, users };
  }
}
