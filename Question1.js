const Hash = function(object){
    this.hash = object;
}

Hash.prototype = {
  isEmpty(){
    if (Object.keys(this.hash).length < 1){
      return true;
    }else{
      return false;
    }
  },
  merge(newhash){
    return Object.assign({}, this.hash, newhash);
  },
  hasKey(key){
    if (this.hash[key]){
      return true;
    }else{
      return false;
    }
  },
  invert(){
    let newhash = {};
    let keys = Object.keys(this.hash);
    let values = Object.values(this.hash);
    for (let i in values){
      newhash[values[i].toString()] = keys[i];
    }
    return newhash;
  },
  inspect(){
    let string = "";
    let counter = 1;
    for (let item in this.hash){
      if(counter < Object.keys(this.hash).length){
        string = string + `${item} => ${this.hash[item]}, `;
        counter += 1;
      }else{
        string = string + `${item} => ${this.hash[item]}`;
      }
    }
    string = "{" + string + "}";
    return string;
  },
  keys(){
    return Object.keys(this.hash);
  },
  values(){
    return Object.values(this.hash);
  }
}
let hash = new Hash({a:1, b:3, c:4});
console.log(hash.isEmpty());
console.log(hash.merge({d:5}));
console.log(hash.hasKey("c"));
console.log(hash.invert());
console.log(hash.inspect());
console.log(hash.keys());
console.log(hash.values());
