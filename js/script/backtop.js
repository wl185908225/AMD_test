define(['jquery', 'scrollto'], function($, scrollto) {
	function BackTop(el, opts) {
		this.opts = $.extend({}, BackTop.DEFAULT, opts);
		this.$el = $(el);
		
		this.scroll = new scrollto.ScrollTo({
			dist: 0,
			speed: this.opts.speed
		});
		
		this._checkPosition();
		
		if (this.opts.mode == 'move') {
			this.$el.on('click', $.proxy(this._move, this));
		} else {
			this.$el.on('click', $.proxy(this._go, this));
		}
		
		$(window).on('scroll', $.proxy(this._checkPosition, this));
	}
	
	BackTop.DEFAULT = {
		mode: 'move',
		pos: $(window).height(),
		speed: 800
	}
	
	BackTop.prototype._move = function() {
		this.scroll.move();
	}
	
	BackTop.prototype._go = function() {
		this.scroll.go();
	}
	
	BackTop.prototype._checkPosition = function() {
		var el = this.$el;
		if ($(window).scrollTop() > this.opts.pos) {
			el.fadeIn();
		} else {
			el.fadeOut();
		}
	}
	
	// 方法1需要开启
	$.fn.extend({
		backtop: function(opts) {
			// 元素可能有多个所以便利循环
			return this.each(function() {
				new BackTop(this, opts);
			});
		}
	})
	
	
	return {
		BackTop: BackTop
	}
});