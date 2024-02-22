function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		
		if(uname =='')
		{
			alert("Enter your email");
			return false;
		}
		else if(pwd=='')
		{
        	alert("Enter the password");
			return false;
		}
		
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6.");
			return false;
		}
		else
		{
	     alert('Thank You for Login & You are Redirecting to 5G ARENA Website');
		}
	}