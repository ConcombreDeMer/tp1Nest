"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedSearchModule = void 0;
const common_1 = require("@nestjs/common");
const books_module_1 = require("../books/books.module");
const dvd_module_1 = require("../dvd/dvd.module");
const users_module_1 = require("../users/users.module");
const combined_search_controller_1 = require("./combined-search.controller");
const combined_search_service_1 = require("./combined-search.service");
let CombinedSearchModule = class CombinedSearchModule {
};
exports.CombinedSearchModule = CombinedSearchModule;
exports.CombinedSearchModule = CombinedSearchModule = __decorate([
    (0, common_1.Module)({
        imports: [books_module_1.BooksModule, dvd_module_1.DvdModule, users_module_1.UsersModule],
        controllers: [combined_search_controller_1.CombinedSearchController],
        providers: [combined_search_service_1.CombinedSearchService],
    })
], CombinedSearchModule);
//# sourceMappingURL=combined-search.module.js.map