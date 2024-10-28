export default class todoModel {
    public completed: boolean = false;
    public created_at: Date;

    constructor(public title: string) {
        this.created_at = new Date();
    }
}