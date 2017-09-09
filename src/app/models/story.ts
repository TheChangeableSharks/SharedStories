export class Story {
    public $key: string;
    public title: string;
    public content: string;
    public authorId: string;
    public likes: number;
    public likedUsers: string[];
    public comments: Object;
}
