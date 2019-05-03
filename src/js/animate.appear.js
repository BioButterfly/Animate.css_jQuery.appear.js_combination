/*
* Animate.css + jQuery.appear.js - Functions
* https://github.com/BioButterfly/Animate.css_jQuery.appear.js
* https://codepen.io/BioButterfly/pen/oRvxBE
* https://biobutterfly.com
*
* Copyright (c) 2019 BioButterfly.com
*/
function thisAppearAnimation(thatID, Ypos, delay, speed){
	$(thatID).appear(function() {
		$(this).each(function(){
			$(this).removeClass($(this).data('fx-close'));
			$(this).css('visibility','visible');
			$(this).addClass($(this).data('fx'));
			function SecondToMillisecond(second) {var s = second * 1000; return s;}
			if(delay == undefined) {
				$(this).css("animation-delay", $(this).data('delay')+"s");
			}
			if(speed == undefined) {
				$(this).css("animation-duration", $(this).data('speed')+"s");
				setTimeout(function(){ $(thatID).attr('animated-visible','true'); }, SecondToMillisecond($(this).data('speed')) );
				return;
			}
			$(this).css("animation-delay", delay+"s");
			$(this).css("animation-duration", speed+"s");	
			setTimeout(function(){ $(thatID).attr('animated-visible','true'); }, SecondToMillisecond($(this).data('speed')) );
		});
	},{accY: Ypos});
}

function thisCloseAnimation(thatID, timeout, delay, speed){
	$(thatID).each(function(){ 
		var that = $(this);
		that.removeClass(that.data('fx'));
		that.addClass(that.data('fx-close'));
		if(delay == undefined) {
			that.css("animation-delay", that.data('delay-close')+"s");
			var t = setTimeout(function(){
				that.css('visibility','hidden');
				that.attr('animated-visible','false');
			}, timeout);
		}
		if(speed == undefined) {
			that.css("animation-duration", $(this).data('speed-close')+"s");
			var t = setTimeout(function(){
				that.css('visibility','hidden');
				that.attr('animated-visible','false');
			}, timeout);
			return;
		}
		that.css("animation-delay", delay+"s");
		that.css("animation-duration", speed+"s");
		var t = setTimeout(function(){
			that.css('visibility','hidden');
			that.attr('animated-visible','false');
			that.removeClass(that.data('fx'));
		}, timeout);
	});
}

function thisAnimation(thatID, delay, speed){
	$(thatID).each(function(){
		$(this).removeClass($(this).data('fx-close'));
		$(this).css('visibility','visible');
		$(this).addClass($(this).data('fx'));
		function SecondToMillisecond(second) {var s = second * 1000; return s;}
		if(delay == undefined) {
			$(this).css("animation-delay", $(this).data('delay')+"s");
		}
		if(speed == undefined) {
			$(this).css("animation-duration", $(this).data('speed')+"s");
			setTimeout(function(){ $(thatID).attr('animated-visible','true'); }, SecondToMillisecond($(this).data('speed')) );
			return;
		}
		$(this).css("animation-delay", delay+"s");
		$(this).css("animation-duration", speed+"s");	
		setTimeout(function(){ $(thatID).attr('animated-visible','true'); }, SecondToMillisecond($(this).data('speed')) );
	});
}