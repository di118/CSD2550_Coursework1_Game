
function saveRegisterDetails(){								//Saves user valid inputs in a JSON file
	var userDetails = {};
	userDetails.firstName = document.getElementById("firstNameRegister").value;								// Adds first name to userDetails Object
	userDetails.lastNameRegister = document.getElementById("lastNameRegister").value;						// Adds last name to userDetails Object
	userDetails.postcodeRegister = document.getElementById("postcodeRegister").value;						// Adds postcode to userDetails Object
	userDetails.telephoneRegister = document.getElementById("telephoneRegister").value;						// Adds phone number to userDetails Object
	userDetails.emailRegister = document.getElementById("emailRegister").value;								// Adds email to userDetails Object
	userDetails.passwordRegister = document.getElementById("passwordRegister").value;						// Adds password to userDetails Object
	userDetails.confirmPasswordRegister = document.getElementById("confirmPasswordRegister").value;			// Adds repeated passwords to userDetails Object
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

function seeIfLogged(){																					//	checks if a user is allready logged in
	if(localStorage.loggedInUserEmail !== undefined)											// If a user is logged in then
	{
		var userDetails = JSON.parse(localStorage[localStorage.loggedInUserEmail])				//	get the user details from the JSON string
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

