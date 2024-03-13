import { Module } from '@nestjs/common';
import { BooksModule } from '../books/books.module';
import { DvdModule } from '../dvd/dvd.module';
import { UsersModule } from '../users/users.module';
import { CombinedSearchController } from './combined-search.controller';
import { CombinedSearchService } from './combined-search.service';

@Module({
  imports: [BooksModule, DvdModule, UsersModule],
  controllers: [CombinedSearchController],
  providers: [CombinedSearchService],
})
export class CombinedSearchModule {}
