import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'


@Resolver()
export class BookResolver {
    bookData = [
        { id: 0, title : "test", authorId: 11001},
        { id: 1, title : "test1", authorId: 11002},
    
    ];
    @Query('books')
    getBooks(){
        return this.bookData
    }
    @Mutation()
    addBook(@Args('title') title : string,@Args('authorId') authorId: number){ 
        const id = this.bookData.length
        const newBook = {id, title, authorId}
        this.bookData.push(newBook);
        return newBook
    }
}