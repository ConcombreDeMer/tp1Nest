import { Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): any {
    return this.booksService.findAll();
  }

  @Post()
  create(): string {
    return 'This action adds a new book';
  }
}
