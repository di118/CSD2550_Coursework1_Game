<?php
function outputHeader($title){              //Ouputs the header for the page and opening body tag
    echo '<head>';
    echo '<link href="css/bootstrap.min.css" rel="stylesheet">';
    echo '<script src="js/jquery-3.2.1.min.js"></script>';
    echo '<script src="js/bootstrap.min.js"></script>';
    echo '<script src="js/danielScripts.js"></script>';
    echo '<title>'. $title . '</title>';
    echo '</head>';
}
function outputNavbar()
{
    echo   '<nav class="navbar navbar-inverse navbar-static-top">';
    echo    '   <div class="container">';
    echo           '<div class="navbar-header">';
    echo          '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">';
    echo          '<span class="sr-only">Toggle navigation</span>';
    echo      '<span class="icon-bar"></span>';
    echo  '<span class="icon-bar"></span>';
    echo   '<span class="icon-bar"></span>';
    echo '</button>';
    echo '<a class="navbar-brand " href="index.php" >THE ROAD LAYER</a>';
    echo  '</div>';
    echo  '<div id="navbar" class="navbar-collapse collapse">';
    echo  '<ul class="nav navbar-nav navbar-right">';
    echo   '<li ><a href="index.php">Home</a></li>';
    echo   '<li><a href="leaderboard.php">Leaderboard</a></li>';
    echo    '<li><a href="login.php">Login/Logout</a></li>';
    echo    '<li><a href="register.php">Register</a></li>';
    echo   '</ul>';

    echo   '</div><!--/.nav-collapse -->';
    echo  '</div>';
    echo   '</nav>';
}






//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo    '<footer class="footer">';
    echo        '<div class="navbar navbar-default navbar-fixed-bottom">';
    echo            '<div class="container">';
    echo            '<p class="text-muted text-right">This is a game created by Daniel Ionita </p>';
    echo            '</div>';
    echo        '</div>';
    echo    '</footer>';
}

