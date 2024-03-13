import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  nbUsers = 2;

  users = [
    {
      id: 1,
      name: 'John',
      mdp: '1234',
    },
    {
      id: 2,
      name: 'Jane',
      mdp: '5678',
    },
  ];

  findAll(): string {
    return this.users.toString();
  }

  find(name: string): any {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name == name) {
        return this.users[i];
      }
    }
  }

  create(name: string, mdp: string): string {
    this.users.push({
      id: this.nbUsers + 1,
      name,
      mdp,
    });
    this.nbUsers++;
    return 'User added';
  }
}
