export class Story {
    public $key: string;
    public title: string;
    public content: string;
    public authorId: string;
    public dateAdded: any;

    public likes: number;
    public likedUsers: string[];

    public comments: Object;
}
