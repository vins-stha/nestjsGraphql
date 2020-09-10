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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let BookResolver = class BookResolver {
    constructor() {
        this.bookData = [
            { id: 0, title: "test", authorId: 11001 },
            { id: 1, title: "test1", authorId: 11002 },
        ];
    }
    getBooks() {
        return this.bookData;
    }
    addBook(title, authorId) {
        const id = this.bookData.length;
        const newBook = { id, title, authorId };
        this.bookData.push(newBook);
        return newBook;
    }
};
__decorate([
    graphql_1.Query('books'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getBooks", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('title')), __param(1, graphql_1.Args('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "addBook", null);
BookResolver = __decorate([
    graphql_1.Resolver()
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=books.resolver.js.map