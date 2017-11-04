<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
    
    //Output header and navigation 
    outputHeader("Register");
    
?>

<!-- Contents of the page -->
<body onload="seeIfLogged()">
    <div class ="container" id="container11">
		<h1 class="text-center">Register</h1>
		<form id="registerForm" onsubmit="return false">
                        <input type="text" class="form-control text-center register" id="firstNameRegister" required placeholder="First Name">
                        <input type="text" class="form-control text-center register" id="lastNameRegister" required placeholder="Last Name">
                        <input type="text" class="form-control text-center register" id="postcodeRegister" required placeholder="Postcode ">
                        <input type="tel" class="form-control text-center register" id="telephoneRegister" required placeholder="Telephone number">
                        <input type="email" class="form-control text-center register" id="emailRegister" required placeholder="Email Address">
                        <input type="password" class="form-control text-center register" id="passwordRegister" required placeholder="Password">
                        <input type="password" class="form-control text-center register" id="confirmPasswordRegister" required placeholder="Confirm Password">
                    	<center>
							<button class="btn btn-default " type="submit" onclick="saveRegisterDetails()">Submit</button>
						</center>
        </form>
     </div>
     <div id ="userBox">
     	<center>
        		<p id="loginOutcome2"> </p>
        		<button class="btn btn-default " type="submit" id="logoutButton" style="display: none;" onclick="logout()"></button>
        		 <p id="registrationOutcome"></p>
        </center>
     </div>
</body>
<?php
    //Output the footer
    outputFooter();
?>