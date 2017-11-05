<?php
function outputHeader($title){              //Ouputs the header for the page and opening body tag
    echo '<head>';                          
    echo '<link href="css/bootstrap.min.css" rel="stylesheet">';        //  link to Bootstrap CSS file (the code in this file is not my code!)
    echo '<script src="js/jquery-3.2.1.min.js"></script>';              //  link to Bootstrap CSS minified file (the code in this file is not my code..)        
    echo '<script src="js/bootstrap.min.js"></script>';                 // Import the JQuery Library (the code in this file is not my code...)
    echo '<script src="js/danielScripts.js"></script>';                 // Create link to my JavaScript file    
    echo '<title>'. $title . '</title>';                                // Page title
    echo '</head>';
    outputNavbar($title);
}
function outputNavbar($title)
{           // Start navigation bar    
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
    $pages = ["Home" => "index.php", "Leaderboard" => "leaderboard.php", "Login/Logout" => "login.php", "Register" => "register.php"];   // Array with pages
    // Foreach element in the pages array make page to be equal with pagename and url with the page path
    foreach ($pages as $page => $url){                                   
        if ($title == $page)                                                               // If title matches the pagename
            echo "<li class='active'><a href=$url>$page</a></li>";                         //   make the page active in the navbar
        else                                                                               //   ... otherwise ...    
            echo "<li><a href='$url'>$page</a></li>";                                      //   make the page inactive
    }
    echo   '</ul>';
    echo   '</div><!--/.nav-collapse -->';
    echo  '</div>';
    echo   '</nav>';

    // end of navigation bar
}






//Outputs closing body tag and closing HTML tag
function outputFooter(){
    // Start footer

    echo    '<footer class="footer">';
    echo        '<div class="navbar navbar-default navbar-fixed-bottom">';
    echo            '<div class="container">';
    echo            '<center>';
    echo            '<p class="text-muted text">This is a game created by Daniel Ionita &copy; </p>', date("Y");    // Displays copyrights and current year 
    echo            '</center>';
    echo            '</div>';
    echo        '</div>';
    echo    '</footer>';

    //End footer
}

