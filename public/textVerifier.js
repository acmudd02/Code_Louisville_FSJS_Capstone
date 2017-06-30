console.log("All Systems Nominal");

$(document).ready(function(){

$(('#quote')).mouseover(function() {
  if ($('#name').val() && $('#quote').val()== '' || 0){
  $('#submitbutton').prop('disabled', true);
  }
  else{
    $('#submitbutton').prop('disabled', false);
  }
})});
