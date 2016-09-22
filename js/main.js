$(function(){
	$('.car-left').click(function(){
		$('.client-1').css({
					"opacity": "0.1",
					"z-index": "300",
					"left": "3%",
					"border": "0",
					"transform":"matrix(0.75, 0, 0, 0.75, 0, 0)"})
		$('.client-2').css({
					"opacity": "0.1",
					"z-index": "300",
					"left": "18%",
					"border": "0",
					"transform":"matrix(0.75, 0, 0, 0.75, 0, 0)"})
		$('.client-3').css({
					"opacity": "1",
					"z-index": "500",
					"left": "14%",
					"border": "0",
					"transform":"matrix(1, 0, 0, 1, 0, 0)"})
	});
});

$(function(){
	$('.car-right').click(function(){
		$('.client-1').css({
					"opacity": "0.1",
					"z-index": "300",
					"left": "27%",
					"display": "block",
					"height": "auto",
					"float": "left",
					"width": "100%",
					"border": "0",
					"transform":"matrix(0.75, 0, 0, 0.75, 0, 0)"})
		$('.client-2').css({
					"opacity": "1",
					"z-index": "500",
					"left": "18%",
					"display": "block",
					"height": "auto",
					"float": "left",
					"width": "100%",
					"border": "0",
					"transform":"matrix(1, 0, 0, 1, 0, 0)"})
		$('.client-3').css({
					"opacity": "0.1",
					"z-index": "300",
					"left": "-8%",
					"display": "block",
					"height": "auto",
					"float": "left",
					"width": "100%",
					"border": "0",
					"transform":"matrix(0.75, 0, 0, 0.75, 0, 0)"})
	});
});