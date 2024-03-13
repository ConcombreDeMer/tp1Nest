"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedSearchService = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("../books/books.service");
const dvd_service_1 = require("../dvd/dvd.service");
const users_service_1 = require("../users/users.service");
let CombinedSearchService = class CombinedSearchService {
    constructor(booksService, dvdService, usersService) {
        this.booksService = booksService;
        this.dvdService = dvdService;
        this.usersService = usersService;
    }
    async searchAll() {
        const books = await this.booksService.findAll();
        const dvds = await this.dvdService.findAll();
        const users = await this.usersService.findAll();
        return { books, dvds, users };
    }
};
exports.CombinedSearchService = CombinedSearchService;
exports.CombinedSearchService = CombinedSearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [books_service_1.BooksService,
        dvd_service_1.DvdService,
        users_service_1.UsersService])
], CombinedSearchService);
//# sourceMappingURL=combined-search.service.js.map