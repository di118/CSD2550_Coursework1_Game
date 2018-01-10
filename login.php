<?php
    
    include('common.php');                          //Include the PHP functions to be used on the page  
    outputHeader("Login/Logout");                   //Output header and navigation
   
?>

<!-- Contents of the page -->
<body onload="seeIfLogged()">                                       <!-- "seeIfLogged() - checks if the user is logged in already" -->
    <div class ="container" id="container11">
        <h1 class="text-center">Login/Logout</h1>                   <!-- header of the login/ logout page -->
          
            <form id="registerForm" onsubmit="return false">        <!-- login form -->
                        <input type="text" class="form-control text-center register" id="emailLogin" placeholder="Email Address">               <!-- Email login field -->
                        <input type="password" class="form-control text-center register" id="passwordLogin" placeholder="Password">             <!-- Password login field -->
                        <center>
                            <button class="btn btn-default " type="submit" onclick="login()">Login</button>                  <!-- Submit button which triggers login function -->

                        </center>
            </form>
    </div>

            <center>
                <p id="loginOutcome2"> </p>
                <button hidden class="btn btn-default " type="submit" id="logoutButton" style="display: none;" onclick="logout()"></button>       <!-- logout button -->  
                <p id="loginOutcome"> </p>    <!-- paragraph that shows the result of the login function -->
            </center>
</body>
<?php
    
    outputFooter();   //Output the footer
?>