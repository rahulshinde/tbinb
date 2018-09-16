Site = {};

$(document).ready(function(){
  Site.focus = false;
  Site.body = $('body');
  $(document).on('click', Site.checkIfFocus);
  // $("#mc-embedded-subscribe").on('click', Site.validateForm);
});

Site.checkIfFocus = function(){
  if ($('#signup').is(":focus")){
    Site.focus = true;
    Site.body.addClass('focussed');
  } else if (Site.focus){
    Site.body.removeClass('focussed');
    Site.focus = false;
  }
}

// Site.validateForm = function(){
//   event.preventDefault();

//   submission = $('#signup').val();
//   console.log('submisssion');
// }