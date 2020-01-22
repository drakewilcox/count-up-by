$(document).ready(function()  {
  $("form.numbers").submit(function(event)  {
    var countBy = parseInt($("input#countby").val());
    var countTo = parseInt($("input#countto").val());
    console.log(countBy);
    var total = 0
    for (var currentNumber = 0 ; currentNumber <= countTo; currentNumber += countBy) {
      $("ul").append("<li>"+currentNumber+"</li>");
    }
    
    
    event.preventDefault();

  });
});                      