//Stack: first in last out
//Queue: first in first out

const Stack = function (array){
  this.array = array;

}
Stack.prototype = {
  add(element){
    this.array.push(element);
    return this.array;
  },
  remove(){
    this.array.pop();
    return this.array;
  }
}

let stack = new Stack([1,2,3,4]);
console.log(stack.add(77));
console.log(stack.remove());


class Queue {
  constructor(array){
    this.array = array;
  }

  add(element){
    return this.array.push(element);
  }

  remove(){
    this.array.shift(); 
    return this.array;
  }

}

let queue = new Queue([1,2,3,4]);
console.log(queue.add(77));
console.log(queue.remove());
