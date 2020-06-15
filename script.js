$("#joke-form").on("submit", function(event){
  event.preventDefault();
  var $guess = $("#joke-form").find("[type=text]");
  var guess = $guess.val();
  if (guess === "code") {
    $("#outcome")
      .text("You got it right!")
      .css("font-family", "bold")
      .css("font-family", "monospace")
      .css("font-size", "3em")
      .css("color", "rgb(242, 9, 242)")
  } else {
    $("#outcome")
      .text("No problem, try again!")
      .css("font-family", "bold")
      .css("font-family", "monospace")
      .css("font-size", "3em")
      .css("color", "rgb(255, 8, 8)")
  }
});