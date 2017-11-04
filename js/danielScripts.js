
function saveRegisterDetails(){
	var userDetails = {};
	userDetails.firstName = document.getElementById("firstNameRegister").value;
	userDetails.lastNameRegister = document.getElementById("lastNameRegister").value;
	userDetails.emailRegister = document.getElementById("emailRegister").value;
	userDetails.passwordRegister = document.getElementById("passwordRegister").value;
	userDetails.confirmPasswordRegister = document.getElementById("confirmPasswordRegister").value;
	if(emailRegister.checkValidity())
	{	
		if(userDetails.confirmPasswordRegister == userDetails.passwordRegister)		
		{
			localStorage[userDetails.emailRegister] = JSON.stringify(userDetails);
			document.getElementById("registrationOutcome").innerHTML = " You have registered successfully. <br> Redirecting to login page .....";
			setTimeout(function () {
		       			window.location.href = "login.html"; //will redirect to  login page 
		    			}, 3000); //will call the function after 3 seconds
		}
		else
		{

			document.getElementById("registrationOutcome").innerHTML = " Password doesn't match";
			userDetails.passwordRegister = document.getElementById("passwordRegister").value;
			userDetails.confirmPasswordRegister = document.getElementById("confirmPasswordRegister").value;
		}
	}
	else
		document.getElementById("registrationOutcome").innerHTML = " Invalid inputs";



}	

function seeIfLogged(){
	if(localStorage.loggedInUserEmail !== undefined)
	{
		var userDetails = JSON.parse(localStorage[localStorage.loggedInUserEmail])	
		document.getElementById("container11").remove();
		document.getElementById("loginOutcome2").innerHTML=userDetails.lastNameRegister + " is currently logged in.";
		document.getElementById("logoutButton").innerText= "Logout";
		document.getElementById("logoutButton").style.display = "block";




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
		    			}, 3000); //will call the function after 3 seconds.

		}
		else
			document.getElementById("loginOutcome").innerHTML="Email or password not recognized."

	}




}
function logout()
{
	localStorage.loggedInUserEmail = undefined;
	location.reload();
}

