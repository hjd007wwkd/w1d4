var countdownGenerator = function (x) {
  /* your code here */
  var i = x+1;
  return function(){
    i--
    if(i === 0) {
      return "Blast Off!"
    } else if (i < 0){
      return "Rockets already gone, bub!"
    } else {
      return `T-minus ${i}...`
    }
  }
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!