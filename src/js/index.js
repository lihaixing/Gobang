$(function(){
	var cav=document.getElementById('cav');
	var context=cav.getContext('2d');
	context.strokeStyle="#000";
	for(var i=0;i<16;i++){
		for(var j=0;j<16;j++){
			context.strokeRect(i*40.625,j*40.625,40.625,40.625);
		}
	}
	var black=new Image(),white=new Image();
	black.src='../img/black.png';
	white.src='../img/white.png';
	var n=0,first=1,isRepeat=[];
	$('#cav').on('click',function(e){
		if(n==0){
			if(first){
				drawImg(e,black,'black');
			}else{
				drawImg(e,white,'white');
			}
		}else{
			if((n%2&&first)||(!n%2 && !first)){
				drawImg(e,white,'white');
			}else{
				drawImg(e,black,'black');
			}
		}
	});

	function drawImg(e,image,color){
		var x=e.pageX-$('#cav').offset().left;
		var y=e.pageY-$('#cav').offset().top;
		x=Math.round(x/40.625)*40.625;
		y=Math.round(y/40.625)*40.625;
		if(!$.isEmptyObject(isRepeat)){
			for(var i in isRepeat){
				if(x==isRepeat[i][0]&&y==isRepeat[i][1]){
					alert('该位置已经有棋子，请选择其它位置！');
					return;
				}

			}
		}
		context.drawImage(image,x-18,y-18);
		n++;

		if(color=='black'){
			isRepeat.push([x,y,'black']);
		}else{
			isRepeat.push([x,y,'white']);
		}

	}
});
