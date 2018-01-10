<?php

    include('common.php'); 						 //Include the PHP functions to be used on the page 
    outputHeader("Register");					//Output header and navigation 
    
?>

<!-- Contents of the page -->
<body onload="seeIfLogged()">
    <div class ="container" id="container11">
		<h1 class="text-center">Register</h1>
		<form id="registerForm" onsubmit="return false">
                        <input type="text" class="form-control text-center register" id="firstNameRegister" required placeholder="First Name">	<!-- Text field to input firstname -->
                        <input type="text" class="form-control text-center register" id="lastNameRegister" required placeholder="Last Name">  <!-- Text field to input lastname -->
                        <input type="text" class="form-control text-center register" id="postcodeRegister" required placeholder="Postcode ">  <!-- Text field to input postcode -->
                        <input type="tel" class="form-control text-center register" id="telephoneRegister" required placeholder="Telephone number">  <!-- Telephone field to input phone number -->
                        <input type="email" class="form-control text-center register" id="emailRegister" required placeholder="Email Address">   <!-- Email field to input email adress -->
                        <input type="password" class="form-control text-center register" id="passwordRegister" required placeholder="Password">  <!-- Text field to input passowrd -->
                        <input type="password" class="form-control text-center register" id="confirmPasswordRegister" required placeholder="Confirm Password">  <!-- Text field to confirm the password -->
                    	<center>
							<button class="btn btn-default " type="submit" onclick="saveRegisterDetails()">Submit</button>		<!-- Submit button which saves the user VALID inputs in a JSON file -->
						</center>
        </form>
     </div>
     	<center>
        		<p id="loginOutcome2"> </p>
        		<button class="btn btn-default " type="submit" id="logoutButton" style="display: none;" onclick="logout()"></button>				<!-- Logout button -->
        		 <p id="registrationOutcome"></p>				<!-- paragraph that shows status of the registration -->
        </center>
     </div>
</body>
<?php
    
    outputFooter();		//Output the footer

?>