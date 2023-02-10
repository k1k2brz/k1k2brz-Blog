export interface Posts {
    id: string;
    title: string;
    content: string;
    status: PostStatus
}

export enum PostStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}