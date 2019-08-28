const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(event){
    // console.log("yeah")
    if (event.which === code[index]){
      // console.log("correct")
      index++
    } else {
      index = 0
      // console.log("incorrect")
    }
    if (index === code.length){
      alert("Hurray!")
    }
  })

}