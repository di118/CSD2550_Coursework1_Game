
function saveRegisterDetails(){								//Saves user valid inputs in a JSON file
	var userDetails = {};
	userDetails.firstName = document.getElementById("firstNameRegister").value;								// Adds first name to userDetails Object
	userDetails.lastNameRegister = document.getElementById("lastNameRegister").value;						// Adds last name to userDetails Object
	userDetails.postcodeRegister = document.getElementById("postcodeRegister").value;						// Adds postcode to userDetails Object
	userDetails.telephoneRegister = document.getElementById("telephoneRegister").value;						// Adds phone number to userDetails Object
	userDetails.emailRegister = document.getElementById("emailRegister").value;								// Adds email to userDetails Object
	userDetails.passwordRegister = document.getElementById("passwordRegister").value;						// Adds password to userDetails Object
	userDetails.confirmPasswordRegister = document.getElementById("confirmPasswordRegister").value;			// Adds repeated passwords to userDetails Object
	userDetails.score = 0;
	if(emailRegister.checkValidity())						// Checks if the email is valid
	{	
		if(userDetails.confirmPasswordRegister == userDetails.passwordRegister)					//Checks if the passwords match
		{
			localStorage[userDetails.emailRegister] = JSON.stringify(userDetails);				// converts a JavaScript userDetails object to a JSON string
			document.getElementById("registrationOutcome").innerHTML = " You have registered successfully. <br> Redirecting to login page .....";    //Displays registration complete message
			setTimeout(function () {																		// Function to redirect the page to Homepage after 3 seconds
		       			window.location.href = "login.php"; 				//will redirect to  login page 
		    			}, 3000); 											//will call the function after 3 seconds
		}
		else
		{

			document.getElementById("registrationOutcome").innerHTML = " Password doesn't match";					//	Displays that the passwords doesn't match the second password
			userDetails.passwordRegister = document.getElementById("passwordRegister").value;						//	Gets the new value of the password input field
			userDetails.confirmPasswordRegister = document.getElementById("confirmPasswordRegister").value;			//	Gets the new value of the password input field
		}
	}
	else
		document.getElementById("registrationOutcome").innerHTML = " Invalid inputs";								// Displays that the inputs are not valid

}	
function pageActivationFunction()
{
	if(window.location.href == "http://localhost/register.php" || window.location.href == "http://localhost/login.php")
	{
		seeIfLogged();
	}
	else if(window.location.href == "http://localhost/index.php")
	{
		var userDetails = JSON.parse(localStorage[localStorage.loggedInUserEmail]);
		document.getElementById("whoLogged").innerHTML="User: " +  userDetails.lastNameRegister.bold() ;			//Displays which user is logged in
		init();
	}
	
}

function seeIfLogged(){																					//	checks if a user is allready logged in
	if(localStorage.loggedInUserEmail !== undefined)											// If a user is logged in then
	{
		var userDetails = JSON.parse(localStorage[localStorage.loggedInUserEmail])	;			//	get the user details from the JSON string
		document.getElementById("container11").remove();										//	deletes Registration / Login input fields 
		document.getElementById("loginOutcome2").innerHTML=userDetails.lastNameRegister + " is currently logged in.";			//Displays which user is logged in
		document.getElementById("logoutButton").innerText= "Logout";							//	Shows logout button
		document.getElementById("logoutButton").style.display = "block";						// Makes logout button visible

	}

}

function login(){					
	var email = document.getElementById("emailLogin").value;					// gets email adress 
	if(localStorage[email] === undefined)										// Checks if the email is stored then
	{
		document.getElementById("loginOutcome").innerHTML = "Email or password not recognized.";		// 	Displays email  
		return;
	}
	else
	{
		var userDetails = JSON.parse(localStorage[email])							// looks for the email in local storage
		var password = document.getElementById("passwordLogin").value;				// Gets the password entered by the user
		if(password === userDetails.passwordRegister)								// if the password matches the one in the local storage then
		{
			document.getElementById("loginOutcome2").innerHTML=userDetails.lastNameRegister + " logged in. <br> Redirecting to the game page .....";		//Displays login complete message
			document.getElementById("loginOutcome").innerHTML=" ";
			localStorage.loggedInUserEmail = userDetails.emailRegister;																	// Stores the email adress as currently logged in

			setTimeout(function () {								// Function to redirect the page to Homepage after 3 seconds
		       			window.location.href = "index.php"; 		// will redirect to  home page 
		    			}, 3000); 									// will call the function after 3 seconds.

		}
		else
			document.getElementById("loginOutcome").innerHTML="Email or password not recognized."						// Displays that either the password or the email wasn't found

	}




}
function logout()
{
	localStorage.loggedInUserEmail = undefined;		     // Deletes the currently logged in user 
	location.reload();									//Reloads the page
}

/// ---------------------------- GAME ----------------
var imgObj = null;                                              // images object
var tileXpos = null;									// x position
var tileYpos = null;									// y position
var lives = 1; 											// number of lives
var limitRightRail = 1325;								// right limit of the rails in pixels
var tileImages = [];									// array with images
var tileObj;											
var countLanded = 0;									// counter to see how many tiles landed
var speedTime = 100;									// speed for setInterval
var myScore = 0 ;										// user score
var spacePressed = false;								// variable to stop pressing the space befor start
var scoreArray =[];										// array for score



function init(){												// Initialise function
	tileImages = [];												
	imgObj = document.getElementById('movingBitCrane');
	tileObj = newTile();
	countLanded = 0;
	speedTime = 100;

}


function newTile() {											// Function to generate a new tile
	var d = new Date();											
	var id = String(d.getTime());								// Assigns an ID with the currentTime to each tile created
	tileImages.push({"id": id})
	var img = new Image();
	var div = document.getElementById('movingRails');
	if(window.location.href == "http://localhost/index.php")				//Add a new tile only if it is on index.php
	{
		img.onload = function() {
			div.appendChild(img);
		};
	}
	img.src = '/assets/roadTile.png';
	img.id = id;
	img.style.position= 'absolute'; 
	img.style.left = '303px'; 
	img.style.top = '284px'; 

	return img;
}

function resetImages() {																			//resets the image
	imgObj.style = "left:400px;top:180px;position:absolute;opacity:1.0;z-index: -1;";
	startMoving();
	


}

function moveRightRail(){													// moves the rails to the right by 10 pixel
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
function gameOver()																				//game over
{
	alert("GAME OVER! \nScore: " + myScore);
	clearInterval(IntervalTimer);
	clearTiles();
	init();
		//resetImages();
		imgObj.style = "left:400px;top:180px;position:absolute;opacity:1.0;z-index: -1;";
		lives = 1; 
		
		var score = document.getElementById("scoreValue");
		score.innerHTML =(String(myScore));
		saveScores();
		myScore = 0;
		setTimeout(window.location.reload.bind(window.location), 500);
		
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
	lives = 1;	
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
		
		if (currentLeft <=  (targetLeft + 2) && currentLeft  >= (targetLeft - 2) && landTileVar  )
		{
			myScore += 100;
			displayPerfect();
		}
	});

	if (!landTileVar && countLanded > 0 && parseInt(tileObj.style.top) > 790) {
		gameOver();
	}
	if(landTileVar) {
		landTile();
	} else {
		tileObj.style.top = parseInt(tileObj.style.top) + 10 + 'px';
	}



}
function displayPerfect()
{
	var x = document.getElementById("perfect");
	x.style.display = "block";
	setTimeout(function(){x.style.display = "none";} ,500);




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
	if(countLanded > 2)
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

	IntervalTimerDown = setInterval(moveDownTile, 25);

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
function saveScores()
{
	if(localStorage.loggedInUserEmail !== undefined)
	{
		var user = JSON.parse(localStorage[localStorage.loggedInUserEmail]);
		if(myScore > user.score)
		{
			user.score = myScore;
			localStorage[localStorage.loggedInUserEmail] = JSON.stringify(user);
		}

	}

}


//Constructs the rankings table and adds it to the page
function buildRankings(){
    //Example data structure holding the rankings data

    var rankingObj = [];
    for (var i = 0; i < localStorage.length; i++){
    	var key = localStorage.key(i);
    	if (key != "loggedInUserEmail") {
    		var user = JSON.parse(localStorage[key]);           
    		var nm = user.firstName;
    		var scr = user.score;

    		rankingObj.push({name: nm, score: scr});

    	}
    }

    console.log(rankingObj);

    var scoresToShow = 10;
    if (rankingObj.length < 10) {
    	scoresToShow = rankingObj.length;
    }

    rankingObj.sort(function(no1, no2){ 
    	return no2.score - no1.score
    });

    for(var i=1; i<=scoresToShow; i++){
    	document.getElementById(i + "name").innerHTML = rankingObj[i - 1].name;
    	document.getElementById(i + "score").innerHTML = rankingObj[i - 1].score;
    }}
// ----------------------------- Pop up -------------------------------
function popUps() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}
//--------------------Space key pressed function-----------------------

$( document ).keydown(function(event) {
	if(event.which == 32 && buttonPress && !spacePressed){

		startMovingDown();
		spacePressed = true;
	}

});