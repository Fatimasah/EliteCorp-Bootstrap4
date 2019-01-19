

/*** cnvyr.min.js ***/
$(function(){$(".featured-work ul li").on("click",function(){$(this).addClass("active").siblings().removeClass("active");if($(this).data("class")==="all"){$(".shuffle-imgs .feat-w-item").css("opacity","1")}else{$(".shuffle-imgs .feat-w-item").css("opacity","0.08");$($(this).data("class")).parent().css("opacity",1)}})});