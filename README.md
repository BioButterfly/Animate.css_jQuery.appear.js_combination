# Animate.css + jQuery.appear.js

## Usage

Add Style

	<style>
		/* Hide Animate Section */
		.animated {visibility: hidden;}
	</style>

Example tag

	<button type="button" class="btn animated" data-fx="fadeInUp" data-delay="0" data-speed="1" data-click-state="1">Primary</button>
    
Appear Animations

	thisAppearAnimation('.alert', 0);


Appear without appear screen position (Ypos)

	thisAnimation('.btn');


Appear Animate without html speed/delay attributes - ID/Class, Ypos, delay, speed

	thisAppearAnimation('.toast', -129, 0, 1);
    

## Usage with additional options

    $('.btn').on('click', function(e) {
	    if($(this).attr('data-click-state') == 0) {
		    $(this).attr('data-click-state', 1);
		    thisAppearAnimation('.alert-primary', 0);
        } else {
            $(this).attr('data-click-state', 0);
            thisCloseAnimation('.alert-primary', 1000);
        }
    });

This script use https://daneden.github.io/animate.css/ animate.css and https://github.com/bas2k/jquery.appear/ jquery.appear.js

&copy;2019 - http://biobutterfly.com BioButterfly.com
