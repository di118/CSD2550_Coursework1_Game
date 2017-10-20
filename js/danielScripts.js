
	function saveRegisterDetails(){
		var userDetails = {};
		userDetails.firstName = document.getElementById("firstNameRegister").value;
		userDetails.lastNameRegister = document.getElementById("lastNameRegister").value;
		userDetails.emailRegister = document.getElementById("emailRegister").value;
		userDetails.passwordRegister = document.getElementById("passwordRegister").value;
		userDetails.confirmPasswordRegister = document.getElementById("confirmPasswordRegister").value;
		localStorage[userDetails.emailRegister] = JSON.stringify(userDetails);
		document.getElementById("registrationOutcome").innerHTML = " You have registered successfully. <br> Redirecting to login page .....";

		setTimeout(function () {
       			window.location.href = "login.html"; //will redirect to  login page 
    			}, 3000); //will call the function after 3 secs.

	}	

	function seeIfLogged(){
		if(localStorage.loggedInUserEmail !== undefined)
		{
			var userDetails = JSON.parse(localStorage[localStorage.loggedInUserEmail])	
			document.getElementById("registerForm").remove();
			document.getElementById("loginOutcome2").innerHTML=userDetails.lastNameRegister + "logged in.";
		}

	}

	function login(){
		var email = document.getElementById("emailLogin").value;
		if(localStorage[email] === undefined)
		{
			document.getElementById("loginOutcome").innerHTML = "Email not found. Please create an account.";
			return;
		}
		else
		{
			var userDetails = JSON.parse(localStorage[email])
			var password = document.getElementById("passwordLogin").value;
			if(password === userDetails.passwordRegister)
				{
					document.getElementById("loginOutcome2").innerHTML=userDetails.lastNameRegister + " logged in. <br> Redirecting to the game page .....";
					document.getElementById("loginOutcome").innerHTML=" ";
					localStorage.loggedInUserEmail = userDetails.emailRegister;

					setTimeout(function () {
		       			window.location.href = "index.html"; //will redirect to  login page 
		    			}, 3000); //will call the function after 3 secs.

				}
			else
					document.getElementById("loginOutcome").innerHTML="Email or password not recognized."
	}


}

