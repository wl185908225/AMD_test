require.config({
	paths: {
		"jquery": "../lib/jquery.min"
	}
});

// 方法1
require(['jquery', 'backtop'], function($, backtop) {
	$("#backTop").backtop({
		mode: 'move'
	});
});

// 方法2
// require(["jquery", "backtop"], function($, backtop) {
// 	new backtop.BackTop($("#backTop"), {
// 		mode: 'move',
// 		pos: 100,
// 		speed: 1000
// 	});
// });

//方法3
// require(["jquery", "scrollto"], function($, scrollto) {
// 	var scroll = new scrollto.ScrollTo({
// 		dest: 100,
// 		speed: 1000
// 	});
// 	$("#backTop").on('click', $.proxy(scroll.move, scroll));
// 	$(window).on('scroll', function() {
// 		checkPosition($(window).height());
// 	});
// 	checkPosition($(window).height());
// 	
// 	function checkPosition(pos) {
// 		if($(window).scrollTop() > pos) {
// 			$("#backTop").fadeIn();
// 		} else {
// 			$("#backTop").fadeOut();
// 		}
// 	}
// });
// 