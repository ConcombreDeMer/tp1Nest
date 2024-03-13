"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DvdService = void 0;
const common_1 = require("@nestjs/common");
let DvdService = class DvdService {
    constructor() {
        this.dvds = [
            { id: 1, title: 'Hunger Games', author: 'Suzanne Collins' },
            { id: 2, title: 'Star Wars IV', author: 'George Lucas' },
            { id: 3, title: 'Jurrasic Park', author: 'Steven Spielberg' },
        ];
    }
    findAll() {
        return this.dvds;
    }
};
exports.DvdService = DvdService;
exports.DvdService = DvdService = __decorate([
    (0, common_1.Injectable)()
], DvdService);
//# sourceMappingURL=dvd.service.js.map