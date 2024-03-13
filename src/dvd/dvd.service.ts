import { Injectable } from '@nestjs/common';

@Injectable()
export class DvdService {
  dvds = [
    { id: 1, title: 'Hunger Games', author: 'Suzanne Collins' },
    { id: 2, title: 'Star Wars IV', author: 'George Lucas' },
    { id: 3, title: 'Jurrasic Park', author: 'Steven Spielberg' },
  ];

  findAll(): any {
    return this.dvds;
  }
}
