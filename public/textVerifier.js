//My test to make certain my js file is correctly linked
console.log("All Systems Nominal");

//Double check that something has been entered into the fields before allowing a submission
$(document).ready(function(){

$(('#quote')).mouseover(function() {
  if ($('#name').val().length === 0 || $('#quote').val().length === 0) {
  $('#submitbutton').prop('disabled', true);
  console.log("The Form is Empty");
  }
  else{
    $('#submitbutton').prop('disabled', false);
    console.log("The Form is Full");
  }
})});
