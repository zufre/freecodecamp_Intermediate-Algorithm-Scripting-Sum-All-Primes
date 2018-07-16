function sumPrimes(num) {

  let sum = 0;

  function primeCheck(i) {
    for (let j = 2; j<i; j++){
      if(i % j === 0){
        return false;
      }    
    }
    return true;
  }
  
  for(let i =2; i<=num;i++){
    if (primeCheck(i)){
      sum +=i;
    }
  }return sum;
}

sumPrimes(10);
