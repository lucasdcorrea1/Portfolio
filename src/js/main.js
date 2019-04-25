/* Demo purposes only */
$( document ).ready(function() {

});
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

function load(){
  $("body").show().html("<div class='loader'>"+
			"<div class='inner one'></div>"+
			"<div class='inner two'></div>"+
			"<div class='inner three'></div>"+
		  "</div>");
			setTimeout(function(){
        
			}, 1000);
}