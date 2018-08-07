Site = {};

$(document).ready(function(){
  Site.focus = false;
  Site.body = $('body');
  $(document).on('click', Site.checkIfFocus);
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