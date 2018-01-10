/*var imgObj = null;
var tileXpos = null;
var tileYpos = null;
var lives = 3;
var limitRightRail = 1325;
var tileImages = [];
var tileObj;
var countLanded = 0;
var speedTime = 100;
var myScore = 0 ;
var spacePressed = false;



function init(){
	tileImages = [];
   imgObj = document.getElementById('movingBitCrane');
   tileObj = newTile();
   countLanded = 0;
   speedTime = 100;
   
   //document.getElementById("Score").innerHTML ="Score :  " +  	 myScore ;
}


function newTile() {
	var d = new Date();
	var id = String(d.getTime());
	tileImages.push({"id": id})
	var img = new Image();
	var div = document.getElementById('movingRails');

	img.onload = function() {
  		div.appendChild(img);
	};

	img.src = '/assets/roadTile.png';
	img.id = id;
	img.style.position= 'absolute'; 
  	img.style.left = '303px'; 
   	img.style.top = '284px'; 

	return img;
}

function resetImages() {
	imgObj.style = "left:400px;top:180px;position:absolute;opacity:1.0;z-index: -1;";
	startMoving();
	


}

function moveRightRail(){
	//console.log("moveRight");
	var currentXVal = parseInt(imgObj.style.left);
	if (lives != 0){
		if (currentXVal < limitRightRail) {
   			imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
		} else {
			imgObj.style.left = "135px";
			tileObj.style.left = "400px";
			lives--;
		}
	}
	else {
		gameOver();
	}

}
function gameOver()
{
		alert("GAME OVER! \nScore: " + myScore);
		clearInterval(IntervalTimer);
		clearTiles();
		init();
		//resetImages();
		imgObj.style = "left:400px;top:180px;position:absolute;opacity:1.0;z-index: -1;";
		lives = 3; 
		myScore = 0;
		var score = document.getElementById("scoreValue");
		score.innerHTML =(String(myScore));
}

function updateScore() {
	myScore += 100;
	var score = document.getElementById("scoreValue");
	score.innerHTML =(String(myScore));
}

function clearTiles() {
	tileImages.forEach(deleteImage);
}

function deleteImage(item, index) {
	var image = document.getElementById(item.id);
	image.parentNode.removeChild(image);
}
function moveRightTile(){
	//console.log("moveRight");
	var currentXValTile = parseInt(tileObj.style.left);
	if (lives != 0){
		if (currentXValTile < 1229) {
   			tileObj.style.left = parseInt(tileObj.style.left) + 10 + 'px';
		} else {
			tileObj.style.left = "400px";
			imgObj.style.left = "135px";
			lives--;

		}
	}
	else {
		gameOver();
			}

} 
function moveDownTile()
{
	lives = 3;	
	clearInterval(IntervalTimer);
	var newTileXVal = parseInt(tileObj.style.top);
	checkCollision();
	

	}
	
	var landTileVar;
function checkCollision() {
	var currentTile = tileImages.length - 1;
	var currentID = tileImages[currentTile].id;
	var currentLeft = parseInt(tileObj.style.left);
	var currentRight = parseInt(tileObj.style.left) + 257;
	var currentTop = parseInt(tileObj.style.top);
	var currentBottom = parseInt(tileObj.style.top) + 146;
	 landTileVar = false;


	tileImages.forEach(function(item, index){
		if (item.hasOwnProperty("left")) {
			var targetLeft = item.left;
			var targetRight = item.left + 257;
			var targetTop = item.top;
			var targetBottom = item.top + 146;

			if ((currentLeft >= targetLeft && currentLeft <= targetRight && currentBottom >= targetTop) || (currentRight >= targetLeft && currentRight <= targetRight && currentBottom >= targetTop)) {
				landTileVar = true;
			}
			
		} else if (currentTop > 795) {
			landTileVar = true;
		}

	});

	if (!landTileVar && countLanded > 0 && parseInt(tileObj.style.top) > 780) {
		gameOver();
	}
	if(landTileVar) {
		landTile();
	} else {
		tileObj.style.top = parseInt(tileObj.style.top) + 10 + 'px';
	}



}

function landTile()
{
	var arrayPos = tileImages.length - 1;
	tileImages[arrayPos]["left"] = parseInt(tileObj.style.left);
	tileImages[arrayPos]["top"] = parseInt(tileObj.style.top);
	speedTime -= 3 ;
	clearInterval(IntervalTimerDown);
	tileObj = newTile();
	moveBothRight();
	resetImages();
	countLanded++;
	shiftBlock();
	updateScore();
	spacePressed = false;


}
function shiftBlock ()
{
	if(countLanded > 3)
	{
		tileImages.forEach(function(item, index){
			if (item.hasOwnProperty("top")) {
				var newTop = parseInt(item.top + 146);
				item.top = newTop;
				tileID = item.id;
				var img = document.getElementById(String(tileID));
				img.style.top = item.top + 'px';

			}
		});
		
	}
}




window.onload =init;
var IntervalTimer;
var IntervalTimerDown;
function startMovingDown()
{	

	IntervalTimerDown = setInterval(moveDownTile, 100);

}
function moveBothRight()
{
	moveRightTile();
	moveRightRail();
}
var buttonPress = false;
function startMoving()
{

	IntervalTimer = setInterval(moveBothRight, speedTime); 
	document.getElementById("startAnimation").blur();
	buttonPress = true;

}
$( document ).keydown(function(event) {
    if(event.which == 32 && buttonPress && !spacePressed){

    	startMovingDown();
    	spacePressed = true;
    }


    });*/