<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
    
    //Output header and navigation 
    outputHeader("Login/Logout");
   
?>

<!-- Contents of the page -->
<body onload="seeIfLogged()">
    <div class ="container" id="container11">
        <h1 class="text-center">Login/Logout</h1>
          
            <form id="registerForm" onsubmit="return false">
                        <input type="text" class="form-control text-center register" id="emailLogin" placeholder="Email Address">
                        <input type="password" class="form-control text-center register" id="passwordLogin" placeholder="Password">
                        <center>
                            <button class="btn btn-default " type="submit" onclick="login()">Login</button>

                        </center>
            </form>
    </div>

            <center>
                <p id="loginOutcome2"> </p>
                <button hidden class="btn btn-default " type="submit" id="logoutButton" style="display: none;" onclick="logout()"></button>
                <p id="loginOutcome"> </p>
            </center>
</body>
<?php
    //Output the footer
    outputFooter();
?>