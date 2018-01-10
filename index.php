<?php
    
    include('common.php');          //Include the PHP functions to be used on the page    
    outputHeader("Home");            //Output header and navigation 
    
?>

<!-- Contents of the page -->
<body style="overflow: hidden;"  onload="pageActivationFunction();"  >
    <div class ="container " >
    

      <div class = "gameDiv" >
            
                <div id = "movingRails" >
                    
                   <img  id = "movingBitCrane" src = "/assets/movingBitCrane.png" style="left:400px;top:180px;position:absolute;opacity:1.0;z-index: -1;">
                   <img  class= "centered" src = "/assets/topCrane.png" style="left:400px;top:100px;position:absolute;opacity:1.0;z-index: -1;">
                   <!--<img  id="topRoadTile" class= "centered" src = "/assets/roadTile.png" style="left:400px;top:280px;position:absolute;opacity:1.0;z-index: -1;"> -->
                  <img  id = "perfect"class= "centered" src = "/assets/perfect.gif" style="left:1249px;top:260px;position:absolute;opacity:1.0;z-index: 100; display: none;">
                </div>
                
      </div>
    </div>
    
    <button class="btn btn-default " type="submit" id="startAnimation" style="display: block;padding: 15px 66px;" onclick="startMoving()">Start</button>    <!-- Start button -->
    <ul>
    <li><p id = "whoLogged"> </p></li>      <!-- Display user that is logged in -->
    <li><p id = "Score"> Score : <span style="font-weight: bold;" id="scoreValue">0</span></p></li>  <!-- Display score -->
    </ul>
    <div class="popup" onclick="popUps()">How to play?   <!-- Instructions div -->
      <span class="popuptext" id="myPopup">The aim of the game is to stack as many road tiles on top of each other <br>Press START button to start the rails moving <br>  Press SPACE key to release the road tile</span>
    </div>
    
</body>
<?php
    
    outputFooter();         //Output the footer with copyrights and date
?>