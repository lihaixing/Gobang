$(function(){
	var cav=document.getElementById('cav');
	var context=cav.getContext('2d');
	context.strokeStyle="#000";

	qipan();
	var black=new Image(),white=new Image();
	black.src='./img/black.png';
	white.src='./img/white.png';
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

	function qipan(){
		for(var i=0;i<16;i++){
			for(var j=0;j<16;j++){
				context.strokeRect(i*40.625,j*40.625,40.625,40.625);
			}
		}
	}

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

		if(isWin(x,y,color)){
			if(color=='black'){
				alert('黑棋赢，点击确定重新开始')
			}else{
				alert('白旗赢，点击确定重新开始')
			}

			context.clearRect(0,0,650,650);
			qipan();
			n=0,first=1,isRepeat=[];
		};
	}

	function isWin(x,y,color){
		var total=1;
		for(var i=x;i<650;i+=40.625){
			var a=total;
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][1]==y&&isRepeat[j][0]==(i+40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		for(var i=x;i>0;i-=40.625){
			a=total
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][1]==y&&isRepeat[j][0]==(i-40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		if(total>=5){
			return 1;
		}

		total=1;

		for(var i=y;i<650;i+=40.625){
			a=total;
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][0]==x&&isRepeat[j][1]==(i+40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		for(var i=y;i>0;i-=40.625){
			a=total
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][0]==x&&isRepeat[j][1]==(i-40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		if(total>=5){
			return 1;
		}

		total=1;

		for(var i=x,k=y;i<650,k<650;i+=40.625,k+=40.625){
			a=total;
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][0]==(i+40.625)&&isRepeat[j][1]==(k+40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		for(var i=x,k=y;i>0,k>0;i-=40.625,k-=40.625){
			a=total;
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][0]==(i-40.625)&&isRepeat[j][1]==(k-40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		if(total>=5){
			return 1;
		}

		total=1;
		for(var i=x,k=y;i<650,k>0;i+=40.625,k-=40.625){
			a=total;
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][0]==(i+40.625)&&isRepeat[j][1]==(k-40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		for(var i=x,k=y;i>0,k<650;i-=40.625,k+=40.625){
			a=total;
			for(var j=0;j<isRepeat.length;j++){
				if(isRepeat[j][0]==(i-40.625)&&isRepeat[j][1]==(k+40.625)&&isRepeat[j][2]==color){
					total+=1;
					break;
				}
			}
			if(total==a){
				break;
			}
		}
		if(total>=5){
			return 1;
		}

		return 0;
	}
});
