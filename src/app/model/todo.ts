export class Todo {
    public contentOverview: string;
    constructor(
        public id: number,
        public title: string,
        public deadline: string,
        public content: string,
        public done: boolean,
    ) { }
}
