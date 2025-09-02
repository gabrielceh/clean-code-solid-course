import {  PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProider: PostProvider) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // this.posts = await jsonDB.getFakePosts();

        // const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();
        
        this.posts = await this.postProider.getPosts();

        return this.posts;
    }
}