
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

/* Модалочка, никаких библиотек, как и просили */

function showModalWin() {

    var fixed = document.body;
    var button = document.getElementById('button');
    var darkLayer = document.createElement('div'); 
    darkLayer.id = 'shadow'; 
    document.body.appendChild(darkLayer); 
    var modalWin = document.getElementById('popupWin'); 
    modalWin.style.display = 'inline-block'; 
    fixed.style.overflow = "hidden";
    fixed.style.marginLeft = "-17px";
    darkLayer.onclick = function () {  
    darkLayer.parentNode.removeChild(darkLayer); 
    modalWin.style.display = 'none'; 
    fixed.style.overflow = "auto";
    fixed.style.borderLeft = "0";
    fixed.style.marginLeft = "0";
    return false;
    };

    button.onclick = function(){
    darkLayer.parentNode.removeChild(darkLayer);
    modalWin.style.display = 'none';
    fixed.style.overflow = "auto";
    fixed.style.borderLeft = "0";
    fixed.style.marginLeft = "0";
    return false;
    };
}
var cls1 = document.getElementById("col-6-1");
var cls2 = document.getElementById("col-6-2");
var cls3 = document.getElementById("col-6-3");
var cls4 = document.getElementById("col-6-4");
var cls5 = document.getElementById("col-6-5");
var cls6 = document.getElementById("col-6-6");
var cls7 = document.getElementById("col-6-img1");
var cls8 = document.getElementById("col-6-img2");
var cls9 = document.getElementById("col-6-img3");
var cls10 = document.getElementById("col-6-7");
var cls11 = document.getElementById("col-6-8");
var cls12 = document.getElementById("col-6-9");
var cls13 = document.getElementById("col-6-10");
var cls14 = document.getElementById("col-6-11");
var cls15 = document.getElementById("col-6-12");
var cls16 = document.getElementById("col-6-foot1");
var cls17 = document.getElementById("col-6-foot2");
var cls18 = document.getElementById("col-6-foot3");
var cls19 = document.getElementById("col-6-foot4");

var html = document.documentElement;

setInterval (function (){
if (html.clientWidth <= 1150){ 
 cls1.className = "col-12 dish1";
 cls2.className = "col-12 dish1-price one";
 cls3.className = "col-12 dish1-price";
 cls4.className = "col-12 dish2";
 cls5.className = "col-12 dish1 dish3";
 cls6.className = "col-12 dish1-price";
 cls7.className = "col-12 alione-img imgAlione1";
 cls8.className = "col-12 alione-img imgAlione2";
 cls9.className = "col-12 alione-img imgAlione3";
 cls10.className = "col-12 Speisekarte1";
 cls11.className = "col-12 Speisekarte1";
 cls12.className = "col-12 Speisekarte1";
 cls13.className = "col-12 Speisekarte1";
 cls14.className = "col-12 Kontakt form";
 cls15.className = "col-12 Kontakt google";
 cls16.className = "col-12 footer-img";
 cls17.className = "col-12 footer-img";
 cls18.className = "col-12 footer-img";
 cls19.className = "col-12 footer-img";
} else{
    cls1.className = "col-6 dish1";
    cls2.className = "col-6 dish1-price one";
    cls3.className = "col-6 dish1-price";
    cls4.className = "col-6 dish2";
    cls5.className = "col-6 dish1 dish3";
    cls6.className = "col-6 dish1-price";
    cls7.className = "col-3 alione-img imgAlione1";
    cls8.className = "col-3 alione-img imgAlione1";
    cls9.className = "col-3 alione-img imgAlione1";
    cls10.className = "col-6 Speisekarte1";
    cls11.className = "col-6 Speisekarte1";
    cls12.className = "col-6 Speisekarte1";
    cls13.className = "col-6 Speisekarte1";
 	cls14.className = "col-6 Kontakt form";
 	cls15.className = "col-6 Kontakt google";
 	cls16.className = "col-3 footer-img";
 	cls17.className = "col-3 footer-img";
 	cls18.className = "col-3 footer-img";
 	cls19.className = "col-3 footer-img";

}
}, 500); 
$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
            $('html').animate({ scrollTop: destination }, 1100);
        return false; 
    });
});
