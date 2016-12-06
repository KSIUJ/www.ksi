/* scrips for ksi history displaying */

function shouldBePosFixed(parent, child){
  var topBorderOk = $(parent)[0].getBoundingClientRect().top<100;
  var bottomBorderOk = ($(parent)[0].getBoundingClientRect().top - $(parent).position().top + $(parent).height()) > 100 /*$(child).height()*/;

  return topBorderOk && bottomBorderOk;
}

$( window ).bind('scroll', function() {
  var res = shouldBePosFixed($("#decade_viewer"), $("#decade_navigator"));
  if (res){
    $("#decade_navigator").css('position', 'fixed')
    $("#decade_navigator").css('top', '100px')
  } else {
    $("#decade_navigator").css('position', 'absolute')
    $("#decade_navigator").css('top', 'auto')
  }
});

function closeAllDecades(){
  $(".decade").hide();
}
function openDecade(id){
  closeAllDecades();
  $("#decade_"+id).each(function(){ $(this).show(); })
}

$(function(){
  openDecade("197");
});
