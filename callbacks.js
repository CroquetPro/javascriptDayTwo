function Clock () {
  this.currentTime = new Date();
  this.printTime();
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  var time = this.currentTime.getHours() + ":" +
            this.currentTime.getMinutes() + ":" +
            this.currentTime.getSeconds();
  console.log(time);
};

Clock.prototype._tick = function () {
  this.currentTime.setSeconds(this.currentTime.getSeconds() + 1);
  this.printTime();
};

// var clock = new Clock();

var readline = require('readline');
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }
  reader.question("Give me a number ",
      function (answer){
    var number = parseInt(answer);
    sum += number;
    console.log("partial sum: " + sum);
    numsLeft -= 1;
    addNumbers(sum, numsLeft, completionCallback);
  });
}

// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });

function absurdBubbleSort(){
  
}
