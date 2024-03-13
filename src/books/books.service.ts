import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  books = [
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ];

  findAll(): any {
    return this.books;
  }

  create(): string {
    return 'This action adds a new book';
  }
}
