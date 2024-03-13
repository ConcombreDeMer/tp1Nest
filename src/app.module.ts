import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { DvdController } from './dvd/dvd.controller';
import { DvdModule } from './dvd/dvd.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { LoggingMiddleware } from './common/logging.middleware';
import { AuthMiddleware } from './common/auth.middleware';
import { CombinedSearchModule } from './combined-search/combined-search.module';
import { CombinedSearchController } from './combined-search/combined-search.controller';
import { CombinedSearchService } from './combined-search/combined-search.service';
import { ConfigModule } from './config-dynamic/config.module';

@Module({
  imports: [
    BooksModule,
    DvdModule,
    UsersModule,
    CombinedSearchModule,
    ConfigModule,
  ],
  controllers: [
    AppController,
    BooksController,
    DvdController,
    UsersController,
    CombinedSearchController,
  ],
  providers: [AppService, BooksService, UsersService, CombinedSearchService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
