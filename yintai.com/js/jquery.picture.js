;(function($){

     
	$.fn.extend({


  		pictureLight:function(a){

  			//console.log(this);
				$(this).hover(function(){
					//console.log(a)

		  			var that = this;
		  			//console.log($(that))
		  			//console.log(this);
			  			$(this).stop().animate({//图片忽闪互亮的特效

			  				opacity:a

			  			},200)

		  		},function(){

		  				$(this).stop().animate({//图片忽闪互亮的特效

			  				opacity:1

			  			},200)


		  		})
 		}
  	
    });


})(jQuery)

//使用方法
//$("选中元素").pictureLight(opacity(大小自己定))