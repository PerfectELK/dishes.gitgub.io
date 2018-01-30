
$(".overlay2").hover(function(){
	$(".overlay1").fadeOut(300);
	});
$(".overlay1").hover(function(){
	$(".overlay1").fadeOut(300);
	});
$(".overlay").hover(function(){
	$(".overlay1").fadeOut(300);
	});
$(".overlay").mouseout(function(){
	$(".overlay1").fadeIn(300);
	});

$(".layer1").click(function(){
	$(".layer1").css("box-shadow","0 0 0 1px #fff, 0 0 0 2px #888");
	$(".wrapper").fadeOut(500, function(){
		$(".wrapper").css("background","url(img/image.png) center center no-repeat").fadeIn(500);
		});
	$(".layer2").css("box-shadow","");
	$(".layer3").css("box-shadow","");
	});
$(".layer2").click(function(){
	$(".layer2").css("box-shadow","0 0 0 1px #fff, 0 0 0 2px #888");
	$(".wrapper").fadeOut(500, function(){
		$(".wrapper").css("background","url(img/image2.png) center center no-repeat").fadeIn(500);
		});
	$(".layer1").css("box-shadow","none");
	$(".layer3").css("box-shadow","none");
	});
$(".layer3").click(function(){
	$(".layer3").css("box-shadow","0 0 0 1px #fff, 0 0 0 2px #888");
	$(".wrapper").fadeOut(500, function(){
		$(".wrapper").css("background","url(img/image3.png) center center no-repeat").fadeIn(500);
		});
	$(".layer1").css("box-shadow","none");
	$(".layer2").css("box-shadow","none");
	});

$(".layer-alionen-img1").click(function(){
	$(".layer-alionen-img1").attr("src","img/layer-alionen1.png");
	$(".layer-alionen-img2").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img3").attr("src","img/layer-alionen.png");
	$(".imgAlione1").fadeOut(500, function(){
		$(".imgAlione1").attr("src","img/Alionen1.jpg").fadeIn(500);
		});
	$(".imgAlione2").fadeOut(500, function(){
		$(".imgAlione2").attr("src","img/Alionen2.jpg").fadeIn(500);
		});
	$(".imgAlione3").fadeOut(500, function(){
		$(".imgAlione3").attr("src","img/Alionen3.jpg").fadeIn(500);
		});
});

$(".layer-alionen-img2").click(function(){
	$(".layer-alionen-img1").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img2").attr("src","img/layer-alionen1.png");
	$(".layer-alionen-img3").attr("src","img/layer-alionen.png");
	$(".imgAlione1").fadeOut(500, function(){
		$(".imgAlione1").attr("src","img/Alionen4.jpg").fadeIn(500);
		});
	$(".imgAlione2").fadeOut(500, function(){
		$(".imgAlione2").attr("src","img/Alionen5.jpg").fadeIn(500);
		});
	$(".imgAlione3").fadeOut(500, function(){
		$(".imgAlione3").attr("src","img/Alionen6.jpg").fadeIn(500);
		});
});
$(".layer-alionen-img3").click(function(){
	$(".layer-alionen-img1").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img2").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img3").attr("src","img/layer-alionen1.png");
	$(".imgAlione1").fadeOut(500, function(){
		$(".imgAlione1").attr("src","img/Alionen7.jpg").fadeIn(500);
		});
	$(".imgAlione2").fadeOut(500, function(){
		$(".imgAlione2").attr("src","img/Alionen8.jpg").fadeIn(500);
		});
	$(".imgAlione3").fadeOut(500, function(){
		$(".imgAlione3").attr("src","img/Alionen9.jpg").fadeIn(500);
		});
});

setInterval( function(){
	setTimeout(function(){
	$(".layer-alionen-img1").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img2").attr("src","img/layer-alionen1.png");
	$(".layer-alionen-img3").attr("src","img/layer-alionen.png");
	$(".imgAlione1").fadeOut(500, function(){
		$(".imgAlione1").attr("src","img/Alionen4.jpg").fadeIn(500);
		});
	$(".imgAlione2").fadeOut(500, function(){
		$(".imgAlione2").attr("src","img/Alionen5.jpg").fadeIn(500);
		});
	$(".imgAlione3").fadeOut(500, function(){
		$(".imgAlione3").attr("src","img/Alionen6.jpg").fadeIn(500);
		});
		},1);
	setTimeout(function(){
	$(".layer-alionen-img1").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img2").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img3").attr("src","img/layer-alionen1.png");
	$(".imgAlione1").fadeOut(500, function(){
		$(".imgAlione1").attr("src","img/Alionen7.jpg").fadeIn(500);
		});
	$(".imgAlione2").fadeOut(500, function(){
		$(".imgAlione2").attr("src","img/Alionen8.jpg").fadeIn(500);
		});
	$(".imgAlione3").fadeOut(500, function(){
		$(".imgAlione3").attr("src","img/Alionen9.jpg").fadeIn(500);
		});
	}, 5000);
	setTimeout(function(){
		$(".layer-alionen-img1").attr("src","img/layer-alionen1.png");
	$(".layer-alionen-img2").attr("src","img/layer-alionen.png");
	$(".layer-alionen-img3").attr("src","img/layer-alionen.png");
	$(".imgAlione1").fadeOut(500, function(){
		$(".imgAlione1").attr("src","img/Alionen1.jpg").fadeIn(500);
		});
	$(".imgAlione2").fadeOut(500, function(){
		$(".imgAlione2").attr("src","img/Alionen2.jpg").fadeIn(500);
		});
	$(".imgAlione3").fadeOut(500, function(){
		$(".imgAlione3").attr("src","img/Alionen3.jpg").fadeIn(500);
		});
	},10000);
	},15000);

setInterval(function(){
	setTimeout(function(){
	$(".layer2").css("box-shadow","0 0 0 1px #fff, 0 0 0 2px #888");
	$(".wrapper").fadeOut(500, function(){
		$(".wrapper").css("background","url(img/image2.png) center center no-repeat").fadeIn(500);
		});
	$(".layer1").css("box-shadow","none");
	$(".layer3").css("box-shadow","none");
	},1);
	setTimeout(function(){
	$(".layer3").css("box-shadow","0 0 0 1px #fff, 0 0 0 2px #888");
	$(".wrapper").fadeOut(500, function(){
		$(".wrapper").css("background","url(img/image3.png) center center no-repeat").fadeIn(500);
		});
	$(".layer1").css("box-shadow","none");
	$(".layer2").css("box-shadow","none");
	},5000);
	setTimeout(function(){
	$(".layer1").css("box-shadow","0 0 0 1px #fff, 0 0 0 2px #888");
	$(".wrapper").fadeOut(500, function(){
		$(".wrapper").css("background","url(img/image.png) center center no-repeat").fadeIn(500);
		});
	$(".layer2").css("box-shadow","");
	$(".layer3").css("box-shadow","");
	},10000);
},15000);
