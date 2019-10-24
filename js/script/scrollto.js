define(['jquery'], function($) {
	function ScrollTo(opts) {
		this.opts = $.extend({}, ScrollTo.DEFAULT, opts);
		this.$el = $("html, body");
	}
	
	ScrollTo.prototype.move = function () {
		console.log("move");
		var opts = this.opts;
		
		// 当前是否到达指定位置且不处于动画期间(解决动画过程中多次点击问题)
		if($(window).scrollTop() != opts.dest && !this.$el.is(":animated")) {
			this.$el.animate({
				scrollTop: opts.dest
			}, opts.speed);
		}
	};
	
	ScrollTo.prototype.go = function () {
		var dest = this.opts.dest;
		
		if($(window).scrollTop() != dest) {
			this.$el.scrollTop(dest);
		}
	};
	
	ScrollTo.DEFAULT = {
		dest: 0,
		speed: 500
	};
	
	return {
		ScrollTo: ScrollTo
	}
});