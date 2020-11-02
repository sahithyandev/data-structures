// Lower priorities are given precedence here
class PriorityQueue {
    constructor() {
        this._queueMembers = [];
    }

    enqueue(item, priority) {
        this._queueMembers.push([item, priority]);
        this._queueMembers.sort((a, b) => a[1] - b[1]);
    }
    dequeue() {
        let temp = this._queueMembers.reverse()
        let v = temp.pop()[0];
        this._queueMembers = temp.reverse();
        return v
    }
    size() {
        return this._queueMembers.length;
    }
    front() {
        return this._queueMembers[0][0]
    }
    isEmpty() {
        return this.size() === 0;
    }
}

const p = new PriorityQueue();
p.enqueue('m1', 1);
p.enqueue('m2', 5);
p.enqueue('m3', 4);
p.enqueue('m4', 3);
p.enqueue('m5', 0);
p.enqueue('m6', 2);

console.log("Size of p:", p.size());
console.log(p.dequeue(), "is the first of p");
console.log("Size of p:", p.size());

console.log("The front of the p:", p.front());