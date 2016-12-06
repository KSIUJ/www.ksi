/*
	Solid State by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

	Adapted for KSI by KSI - ksi.ii.uj.edu.pl
*/

function showPhoto(url){
    $("#photoCanvas").css("display","table-cell");
    $("#photoCanvas").html("Wciśnij Escape lub kliknij gdziekolwiek by zamknąć.<br /><div id='photoCanvasImgWrapepr'><img id='photoCanvasImg' src='"+url+"' /></div>");
    $("#siteGrayout").css("display","block");
}
function hidePhoto(){
    $("#photoCanvas").css("display","none");
    $("#siteGrayout").css("display","none");
}

(function($) {

	"use strict";

  /* keep this synced with /css/main.scss */
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
    menucritical: '(max-width: 1170px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

		// Loading elements of page
			$.getScript( "http://www.w3schools.com/lib/w3data.js", function( data, textStatus, jqxhr ) {
				w3IncludeHTML();
			} );


		// Menu.
			var $menu = $('#header ul.links');
			var menuButton = $('#header nav a#menu-button');
			var menuIsOpen = false;

			$menu.css("display","none");
			if (! skel.breakpoint('menucritical').active)
				$menu.css("display","block");

			function toggleMenu() {
				menuIsOpen = !menuIsOpen;

				if (menuIsOpen){
					$menu.css("display","block");
				}
				else{
					$menu.css("display","none");
				}
			}
			$( menuButton ).click(toggleMenu);
			$( menuButton ).on("tap",toggleMenu);

			skel.on('-menucritical', function() {
				$menu.show();
			});
			skel.on('+menucritical', function() {
				$menu.hide();
			});

		//PhotoShower

			$(document).keydown(function(e) {
			    if (e.keyCode == 27) {
			        hidePhoto();
			    }
			});
			$('.clicker').click(function(event) {
		        event.stopPropagation();
		    });
		    $('html').click(function() {
		        hidePhoto();
		    });

		    $("body").append( "<div id='siteGrayout'></div>" );
		    $("body").append( "<div id='photoCanvas'></div>" );

		    $(".clickablePicture").click(function(){
		    	var x = $(this).attr('src');
		    	showPhoto(x);
		    });

	});

})(jQuery);
