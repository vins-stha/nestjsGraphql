import { Module } from '@nestjs/common';
import { BookResolver } from './books.resolver';

@Module({
    providers: [BookResolver],
    exports:[BookResolver]
})
export class BooksModule {}
