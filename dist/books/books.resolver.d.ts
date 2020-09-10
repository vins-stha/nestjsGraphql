export declare class BookResolver {
    bookData: {
        id: number;
        title: string;
        authorId: number;
    }[];
    getBooks(): {
        id: number;
        title: string;
        authorId: number;
    }[];
    addBook(title: string, authorId: number): {
        id: number;
        title: string;
        authorId: number;
    };
}
