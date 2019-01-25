function robotSounds(inputNum) {

  var arrayResult = [];

  for (var i = 0; i <= inputNum; i++) {
    if (i % 3 === 0 && i !== 0) {
      arrayResult.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if (i.toString().split("").includes("1")) {
      arrayResult.push(" Boop");
    }
    else if (i.toString().split("").includes("0")) {
      arrayResult.push(" Beep");
    }
    else {
      arrayResult.push(i.toString())
    }
  }
  return arrayResult
};



$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var inputNum = $("input#inputNumber").val();
    var result = robotSounds(inputNum);

    $("#result").show();
v    $("#result").text(result);
  });
});
