import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get('find/:name')
  find(@Param('name') name: string): string {
    console.log(name);
    return this.usersService.find(name);
  }

  @Post('create')
  create(@Body('name') name: string, @Body('mdp') mdp: string): string {
    console.log(name, mdp);
    return this.usersService.create(name, mdp);
  }

  @Delete('delete')
  delete(): string {
    return 'This action removes a user';
  }
}
