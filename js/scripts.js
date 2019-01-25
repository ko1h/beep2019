$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var inputNum = $("input#inputNumber").val();
    var result = robotSounds(inputNum);

    $("#result").show();
    $("#result").text(result);
  });
});
