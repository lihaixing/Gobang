$(function(){
	var cav=document.getElementById('cav');
	var context=cav.getContext('2d');
	context.strokeStyle="#000";
	for(var i=0;i<16;i++){
		for(var j=0;j<16;j++){
			context.strokeRect(i*40.625,j*40.625,40.625,40.625);
		}
	}
});
