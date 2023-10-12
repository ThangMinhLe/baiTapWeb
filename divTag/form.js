// function myFunction (a, para) {
//         // mycallBack(a);
//         para(a);
    

// }

// function callBack(a) {
//  console.log(`${a} is not a function`); 
        

// }

// myFunction(1,callBack);
// var test = Math.round(Math.random()*100);
// if(test < 50) {
//     console.log("This is ti le la < 50%")
// console.log(test);
// }

// else{
//     console.log("This is ti le la 50% > 50")
// console.log(test);

// }

// function num() {
// document.getElementsByClassName("headerContends")[0].innerHTML = "Hello"
// }
// var testArrow = (nums) => {
//     nums();
// }

// testArrow(num);

function num() {
    var element = document.getElementsByClassName("headerContends")[0];
    if (element) {
      element.innerHTML = "Hello";
    }
  }
  
  var testArrow = (nums) => {
    nums();
  }
  
  testArrow(num);
  
