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
    return completionCallback(sum);
  }

  reader.question("Give me a number", function callback(number) {
    var num1 = parseInt(number);
  });
}
