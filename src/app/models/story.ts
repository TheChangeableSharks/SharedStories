export class Story {
    public $key: string;
    public title: string;
    public content: string;
    public authorId: string;

    constructor({ $key, title, content, authorId }) {
        this.$key = $key;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
    }
}
