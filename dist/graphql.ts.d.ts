export declare class Author {
    id: number;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}
export declare class Post {
    id: number;
    title: string;
    votes?: number;
}
export declare abstract class IQuery {
    abstract author(id: number): Author | Promise<Author>;
}
