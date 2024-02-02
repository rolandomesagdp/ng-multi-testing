export class SelectableItetm<T> {
    selected: boolean = false;

    constructor(public item: T) { }
}