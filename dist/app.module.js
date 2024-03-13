"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const books_controller_1 = require("./books/books.controller");
const books_module_1 = require("./books/books.module");
const books_service_1 = require("./books/books.service");
const dvd_controller_1 = require("./dvd/dvd.controller");
const dvd_module_1 = require("./dvd/dvd.module");
const users_controller_1 = require("./users/users.controller");
const users_module_1 = require("./users/users.module");
const users_service_1 = require("./users/users.service");
const logging_middleware_1 = require("./common/logging.middleware");
const auth_middleware_1 = require("./common/auth.middleware");
const combined_search_module_1 = require("./combined-search/combined-search.module");
const combined_search_controller_1 = require("./combined-search/combined-search.controller");
const combined_search_service_1 = require("./combined-search/combined-search.service");
const config_module_1 = require("./config-dynamic/config.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logging_middleware_1.LoggingMiddleware).forRoutes('*');
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            books_module_1.BooksModule,
            dvd_module_1.DvdModule,
            users_module_1.UsersModule,
            combined_search_module_1.CombinedSearchModule,
            config_module_1.ConfigModule,
        ],
        controllers: [
            app_controller_1.AppController,
            books_controller_1.BooksController,
            dvd_controller_1.DvdController,
            users_controller_1.UsersController,
            combined_search_controller_1.CombinedSearchController,
        ],
        providers: [app_service_1.AppService, books_service_1.BooksService, users_service_1.UsersService, combined_search_service_1.CombinedSearchService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map