function sumPrimes(num) {
 let arr = [];
 
 for (let i = 2; i<=num; i++){
   arr.push(i);
 }
  for (let i = 0; i<num; i++) {
    for (let j = 2; j < arr[i]; j++){
      if (arr[i]%j == 0){
        arr.splice(i,1);
        break;
      }
    }
  }
  return arr.reduce((a, b) => a + b, 0)

}

sumPrimes(10);
