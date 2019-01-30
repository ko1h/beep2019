function robotSounds(inputNum) {

  var soundResult = [];

  for (var i = 0; i <= inputNum; i++) {
    if (i % 3 === 0 && i !== 0) {
      soundResult.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if (i.toString().includes("1")) {
      soundResult.push(" Boop");
    }
    else if (i.toString().includes("0")) {
      soundResult.push(" Beep");
    }
    else {
      soundResult.push(i.toString())
    }
  }
  return soundResult;
};


$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var inputNum = $("input#inputNumber").val();
    var result = robotSounds(inputNum);

    $("#result").text(result);
  });
});
