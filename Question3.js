//iteratively 41873;
console.time("loop start");
function digitProduct1(n){
  if (n < 1){
    return "Invalid number";
  }else if (n === 1){
    return 1;
  }else{
    let result, before = 1;
    for (let i = 2; i <= n; i++){
      result = 1;
      before = before.toString();
      for (let e in before){
        result *= parseInt(before[e]);
      }
      result += parseInt(before);
      before = result;
    }
    return result;
  }
}
console.log(digitProduct1(5000));
console.timeEnd("loop end");


//recursively
console.time("recursion start");
function digitProduct2(n){
  if (n < 1){
    return "Invalid number";
  } else if (n === 1){
    return 1;
  } else{
    let beforeNumber = digitProduct2(n-1);
    let beforeString = beforeNumber.toString();
    let result = 1;
    for (let i in beforeString){
      result *= parseInt(beforeString[i]);
    }
    return beforeNumber + result;
  }
}
console.log(digitProduct2(5000));
console.timeEnd("recursive end");

// 1489636033581.286ms
// 1489636058990.172ms
// Run time is similar. But when the number goes large, stack will overflow using recursive function.
