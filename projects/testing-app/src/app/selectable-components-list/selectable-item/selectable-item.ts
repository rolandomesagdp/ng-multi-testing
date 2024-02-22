export class SelectableItem<T> {
    selected: boolean = false;

    constructor(public item: T) { }
}