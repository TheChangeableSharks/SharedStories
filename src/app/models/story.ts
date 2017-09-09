export class Story {
    public $key: string;
    public title: string;
    public content: string;
    public authorId: string;
    public _likes: number;
    public likedUsers: string[];
    constructor({ $key, title, content, authorId}) {
        this.$key = $key;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.likes = 0;
        this.likedUsers = [];
    }
    set likes(number)
    {
        this._likes += 1;
    }
    get likes()
    {
        return this._likes;
    }
}
