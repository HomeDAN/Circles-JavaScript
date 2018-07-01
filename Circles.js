var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	centerX = width / 2,
	centerY = height / 2,
	x, y,
	angle = 0;

var drawCircles = function(x,y,r){
	context.beginPath();
	context.arc(x,y,r, 0, Math.PI * 2);
	context.fillStyle = 'green';
	context.fill();
}

var circlesPosition = function(dots, dotsSize, circlesDiametr, circlesAmount){
	
	// amount of dots in dotsArray
	var dotsArray = dots,
		slice = Math.PI * 2 / dotsArray;

	// draw a dots with coords
	var circlesAmout = function(amount){
		for(var i = 0; i < dotsArray; i++){
			angle += slice;
			x = centerX + Math.cos(angle) * amount;
			y = centerY + Math.sin(angle) * amount;
				
				drawCircles(x, y, dotsSize);
			}	
		}

	for(var i = 0; i < circlesAmount; i++){
		circlesAmout(circlesDiametr * i)
	}
}

circlesPosition(100, 2, 10, 50); 

// 1. Amount of dots, 
// 2. Size of dot, 
// 3. Distance from the center, 
// 4. Amount of circles
	 

