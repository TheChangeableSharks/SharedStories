class Comment {
    public authorId;
    public content;
}

export class Story {
    constructor(dbModel: any, viewerId?: string) {
        this.$key = dbModel.$key;
        this.title = dbModel.title;
        this.content = dbModel.content;
        this.authorId = dbModel.authorId;
        this.dateAdded = new Date((dbModel.dateAdded || 0) * - 1);

        this.likes = dbModel.likes ? Object.values(dbModel.likes) : [];
        this.likesCount = (dbModel.reversedLikesCount || 0) * -1;
        this.likedByViewer = this.likes.includes(viewerId);

        this.comments = dbModel.comments ? Object.values(dbModel.comments) : [];
    }

    public $key: string;

    public title: string;
    public content: string;
    public authorId: string;
    public dateAdded: Date;

    public likedByViewer: boolean;
    public likes: string[];
    public likesCount: number;

    public comments: Comment[];
}
