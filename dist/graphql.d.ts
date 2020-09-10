export declare class Author {
    id: number;
    name?: string;
}
export declare class Post {
    id: number;
    title: string;
    votes?: number;
}
export declare abstract class IQuery {
    abstract authors(): Author | Promise<Author>;
}
export declare abstract class IMutation {
    abstract addAuthor(name: string): Author | Promise<Author>;
}
