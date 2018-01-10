Coursework-1 CSD2550
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Requirements: 
 Website that enables the user to play a game.
The user plays the game alone or against the computer.
If the user plays against the computer, there are no extra marks for sophisticated artificial intelligence:
simple random choices are fine.
The game must be implemented in HTML, CSS, JavaScript and PHP.
Users can register with the website and login.
The website has a page that displays the top scores of all registered users.
User data and scores are stored in JSON format using HTML local storage.
Cross-browser compatibility is not required – you only need to demonstrate your game on a single
browser.
PHP functions are used to output navigation menus, footers, etc.
 You are welcome to use third party libraries, such as jQuery, Bootstrap or a JavaScript game engine. You
should check with the module leader if a third party library is used for a substantial amount of the
functionality of your website.
Marks are available for code quality, game quality and the attractiveness and usability of the website


 The game proposed for this coursework is called "The Road Layer".
It is a one player game and involves stacking layers of a road in order to create the longest road.
There will be a crane arm swing ing left-right with a block of road attached to it, the player has to press a specific key to release the block at a specific time in order to align it perfectly with the road on the ground.
If the blocks are not aligned perfectly the threshold will dissappear. The game is a different version of “Tower Block Game” but instead of tower blocks the user has road layouts and the user needs  to fit in the new blocks with the old one to create the longest road instead of the tallest building.
	The game will have different levels. Each level up will increase the speed of the hanging  blocks. Another feature that can be implemented is to make also the blocks on the ground to move at a higher level.
	The website has 4 pages (please see attached). All pages are based on Bootstrap framework. The homepage with a canvas where the game will be implemented in Javascript. 
	In order to play users need to create an account through “Register” page. Then if the users want to play again they can simply login in the “Login/Logout” page. Users details will be stored in HTML 5 Local Storage in JSON format along with the score which will be displayed on	 the leaderboard page(makes the user want to play again to beat other users highscore or own score).
All pages include a footer and a navigation bar added to the website using PHP.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Report : 

I have created a game called “ The Road Layer “ using JavaScript, HTML, CSS, PHP.
The aim of the game is to stack as many road tiles on top of each other in order to create the longest road. Each landed tile gives a score of 200 if the tiles match perfectly and a score of 100 if the tile lands on top of another tile without matching perfectly.
In order to play the user has to press the START button, located on the top left corner of the page. After pressing the START button, the rails start moving to the right. The user has to press the SPACE key to release the road tile from the rail in order to create the road. If the user doesn’t release the tile before the rail reaches the end, it’s game over.
The gameOver function displays the message “ Game over” along with the user’s current score. The score is saved using local storage and then displayed on the leaderboard. The leaderboard is sorted, highest score first.
There is also a popup text in the right bottom corner
which shows the user( if clicked) the aim of the game and instructions how to play.
Under the START button, there is a table which shows who is logged in and the current score of the logged in user.
User details including score are stored using JSON in HTML local storage. The repetitive blocks such as header and footer are displayed using PHP.
The most difficult thing I found was designing the game. Luckily I found some very useful
designs on the internet from “ParkMyCar” game from which I cropped the road layers needed.
Libraries used:
• Bootstrap
• JQueryIonita Daniel – Report




