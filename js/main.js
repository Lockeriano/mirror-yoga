$(function() {
	$(".car-left").click(function(){
		$(".client-1").css({
			"transition-duration": "1s",
			"opacity": "0.1",
			"z-index":"300",
			"transform":"translate(-120px,0)"
		})
		$(".client-2").css({
			"transition-duration": "1s",
			"opacity": "0.1",
			"z-index":"300",
			"transform":"translate(285px, 0)"
		})
		$(".client-3").css({
			"transition-duration": "1s",
			"opacity": "1",
			"z-index":"500",
			"transform":"translate(-150px, 20px)"
		})
	})
})

$(function() {
	$(".car-right").click(function(){
		$(".client-1").css({
			"opacity": "0.1",
			"z-index":"300",
			"transform":"translate(170px,0)"
		})
		$(".client-2").css({
			"opacity": "1",
			"z-index":"500",
			"transform":"translate(140px, 20px)"
		})
		$(".client-3").css({
			"opacity": "0.1",
			"z-index":"300",
			"transform":"translate(-285px, 0)"
		})
	})
})