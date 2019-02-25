/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });


    // Menu.
    var $menu = $('#menu');

    $menu._locked = false;

    $menu._lock = function () {

        if ($menu._locked) {
            return false;
        }

        $menu._locked = true;

        window.setTimeout(function () {
            $menu._locked = false;
        }, 350);

        return true;

    };

    $menu._show = function () {

        if ($menu._lock()) {
            $body.addClass('is-menu-visible');
        }

    };

    $menu._hide = function () {

        if ($menu._lock()) {
            $body.removeClass('is-menu-visible');
        }

    };

    $menu._toggle = function () {

        if ($menu._lock()) {
            $body.toggleClass('is-menu-visible');
        }

    };

    $body
        .on('click', 'a[href="#menu"]', function (event) {

            console.log("lol");
            event.stopPropagation();
            event.preventDefault();

            // Toggle.
            $menu._toggle();

        })
        .on('keydown', function (event) {
            // Hide on escape.
            if (event.keyCode === 27)
                $menu._hide();

        });

})(jQuery);
