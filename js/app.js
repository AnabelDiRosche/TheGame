$(document).ready(function(){

	var stage = new createjs.Stage("main"),
		player = new createjs.Shape();


	player.graphics.beginFill("red").dr(0, 0, 9, 9);
	player.x = 100;
	player.y = 100;

	stage.addChild(player);
	stage.update();

	$(document).keydown(function(event) {

 	var step = 2;

 	//up
 	if(event.keyCode == '87'){
 		console.log(player.y);
 		if(player.y - step > 0){
 			player.y -= step;
 			stage.update();
 		}
 	}
 	//right
  	if(event.keyCode == '68'){
  		if(player.x + step < stage.canvas.width - 8){
 		 	player.x += step;
 			stage.update();
 		}
 	}
 	//left
  	if(event.keyCode == '65'){
 		if(player.x - step > 0){
 			player.x -= step;
 			stage.update();
 		}
 	}
 	//down
  	if(event.keyCode == '83'){
  		if(player.y + step < (stage.canvas.height - 8)){
 		 	console.log();
 		 	player.y += step;
 			stage.update();
 		}
 	}
 	event.preventDefault();

	});
})
