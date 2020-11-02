class Queue {
    constructor() {
        this._queueMembers = [];
    }

    enqueue(element) {
        this._queueMembers.push(element);
    }

    dequeue() {
        let first = this._queueMembers[0]
        this._queueMembers = this._queueMembers.filter((v, i) => i != 0)
        return first;
    }
}

const m = new Queue();
m.enqueue('me');
m.enqueue('g');
m.dequeue();
m.enqueue('quq');