export class Story {
    public $key: string;
    public title: string;
    public description: string;

    constructor({ $key, title, description }) {
        this.$key = $key;
        this.title = title;
        this.description = description;
    }
}
