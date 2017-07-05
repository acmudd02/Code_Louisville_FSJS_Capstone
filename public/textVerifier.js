//My test to make certain my js file is correctly linked
console.log("All Systems Nominal");

//Double check that something has been entered into the fields before allowing a submission
$(document).ready(function(){

$(('#submitbutton')).click(function() {
  if ($('#name').val().length === 0 || $('#quote').val().length === 0) {
  alert("Please Add both a Character and a Quote.");
  }
  else{
    $.post("/quotes",
    {
      name: $("#name").val() ,
      quote: $("#quote").val()
    });
  };
})});
