$(document).ready(function(){
	
	var inputTags = document.querySelectorAll("input");
	
	// Schedule event handlers: On Key Up and On Blur (focus lost) events
	for (var index = 0; index < inputTags.length; index++)
	{
		inputTags[index].onkeyup	= onKeyUpValidation;
		inputTags[index].onblur		= onBlurValidateRequired;
	}
	
	var selectTags = document.querySelectorAll("select");
	
	// Schedule event handlers: On Key Up and On Blur (focus lost) events
	for (var index = 0; index < selectTags.length; index++)
	{
		selectTags[index].onblur	= onBlurValidateRequired;
	}
	
	// Disables the Enter key
	$(document).on("keypress", 'form', function(e){
		var code = e.keyCode || e.which;
		
		if (code == 13)
		{
			e.preventDefault();
			return false;
		}
	});
	
	// Schedule final validation - all fields
	var button = document.getElementById("subscribe-button");
	button.onclick = onSubmitValidateRequired;
});

// Validates the character(s)
function onKeyUpValidation(event)
{
	var p		= this.parentNode.parentNode.querySelector("p");
	var name	= this.name;
	var valid	= true;
	
	// Ignore event as a field gets the focus when tab is pressed, if the field has any data in it
	var charCode = event.keyCode;
	
	if (charCode != 9 && this.value.length > 0)
	{
		if (name == "company-name")
		{
			if (!companyNameValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "first-name")
		{
			if (!firstNameValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "last-name")
		{
			if (!nameValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "dob")
		{
			if (!dateCharacterValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "city")
		{
			if (!nameValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "state")
		{
			if (!alphabeticalValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "zip-code")
		{
			if (!numericalValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		
		else if (name == "office-phone")
		{
			if (!phoneCharacterValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "cell-phone")
		{
			if (!phoneCharacterValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "email")
		{
			if (!emailCharacterValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "username")
		{
			if (!usernameValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "password")
		{
			if (!passwordCharacterValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "card-name")
		{
			if (!cardNameValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "card-number")
		{	
			if (!cardCharacterValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "expiration-date")
		{	
			if (!dateCharacterValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
		else if (name == "security-code")
		{
			if (!numericalValidation(this))
			{
				p.innerHTML = this.getAttribute("title");
				this.style.backgroundColor = "pink";
				this.focus();
				valid = false;
			}
			else
			{
				p.innerHTML = "";
				this.style.backgroundColor = "white";
			}
		}
	}
	else if (charCode == 8)
	{
		p.innerHTML = "";
		this.style.backgroundColor = "white";
	}
	return valid;
}

// Valdiates the length
// onBlur = keyboard focus (the blinking black bar when typing)
function onBlurValidateRequired(event)
{
	var p		= this.parentNode.parentNode.querySelector("p");
	var name	= this.name;
	var valid	= true;
	
	// Ignore event as a field gets the focus when tab is pressed, if the field has any data in it
	var charCode = event.keyCode;

	if (name == "company-name")
	{
		if (this.value.length == 0)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "first-name")
	{
		if (this.value.length == 0)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "last-name")
	{
		if (this.value.length == 0)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "dob")
	{
		if (!fullDateValidation(this))
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "street")
	{
		if (this.value.length == 0  || this.value.length > 75)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
		else
		{
			p.innerHTML = "";
			this.style.backgroundColor = "white";
		}
	}
	else if (name == "city")
	{
		if (this.value.length == 0)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "state")
	{
		var state = document.getElementById("state");
		if (state.selectedIndex == 0)
		{
			p.style.color = "red";
			p.innerHTML = this.getAttribute("title");
			this.focus();
			valid = false;
		}
		else
		{
			p.innerHTML = "";
		}
	}
	else if (name == "zip-code")
	{
		if (!numericalValidation(this) || this.value.length != 5)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "office-phone")
	{
		if ((!phoneCharacterValidation(this) || !phoneValidation(this)) && this.value.length > 0)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "cell-phone")
	{
		if ((!phoneCharacterValidation(this) || !phoneValidation(this)) && this.value.length > 0)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "email")
	{
		if (!emailValidation(this))
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "username")
	{
		if (this.value.length < 5)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "password")
	{
		if (!passwordValidation(this))
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "card-name")
	{
		if (this.value.length == 0)
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "card-number")
	{
		var cardTypes = document.getElementById("card-type");
		var cardName = cardTypes.options[cardTypes.selectedIndex].text;
		var minCardDigits = 0;
		var maxCardDigits = 0;
		var title = "";
		
		if (cardName == "Visa")
		{
			minCardDigits	= 13;
			maxCardDigits	= 16;
			title			= "Visa Card not valid";
		}
		else if (cardName == "MasterCard")
		{
			minCardDigits	= 16;
			maxCardDigits	= 16;
			title			= "MasterCard not valid";
		}
		else if (cardName == "American Express")
		{
			minCardDigits	= 15;
			maxCardDigits	= 15;
			title			= "American Express not valid";
		}
		
		// Remove spaces
		this.value = this.value.replace(/ /g, '');
	
		if (!cardValidation(this, cardName, minCardDigits, maxCardDigits))
		{
			p.innerHTML = title;
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
		else
		{
			p.innerHTML = "";
			this.style.backgroundColor = "white";
		}
	}
	else if (name == "expiration-date")
	{
		if (!shortDateValidation(this))
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
	else if (name == "security-code")
	{
		if (!numericalValidation(this) || (this.value.length != 3 && this.value.length != 4))
		{
			p.innerHTML = this.getAttribute("title");
			this.style.backgroundColor = "pink";
			this.focus();
			valid = false;
		}
	}
}   

// Validates the length again to check for blanks in required fields
function onSubmitValidateRequired(event)
{
	
}

// Other Helper Functions
function companyNameValidation(input)
{
	var valid		= true;
	var characters	= /^[a-zA-Z0-9 .,&_-]+$/;		// RegEx (Regular Expression)
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

function firstNameValidation(input)
{
	var valid		= true;
	var characters	= /^[a-zA-Z0-9 ]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

// For Last Name and City Name
function nameValidation(input)
{
	var valid		= true;
	var characters	= /^[a-zA-Z -]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

function phoneCharacterValidation(input)
{
	var valid		= true;
	var characters	= /^[0-9- ().]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

function phoneValidation(input)
{
	var valid		= true;
	var remove		= /[- ().]+/g;
	var phone 		= input.value.replace(remove, '');
	
	if (phone.length > 0 && phone.length != 10)
	{
		valid = false;
	}

	return valid;
}

// For State
function alphabeticalValidation(input)
{
	var valid		= true;
	var characters	= /^[a-zA-Z]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

// For Zip code and security code
function numericalValidation(input)
{
	var valid		= true;
	var characters	= /^[0-9]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

// Called onKeyUp
function emailCharacterValidation(email)
{
	var valid		= true;
	var mailformat	= /^[_a-zA-Z0-9-.@]+$/;
	
	if (!mailformat.test(email.value))
	{
		valid = false;
	}
	return valid;
}

// Called onBlur
function emailValidation(email)
{
	var valid		= true;
	var mailformat 	= /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;
	
	if (!mailformat.test(email.value))
	{
		valid = false;
	}
	return valid;
}

function usernameValidation(input)
{
	var valid		= true;
	var characters	= /^[a-zA-Z0-9]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

function passwordCharacterValidation(input)
{
	var valid		= true;
	var characters	= /^[a-zA-Z0-9!@#$%^&*-_+=`;:.~ ]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

function passwordValidation(input)
{
	var valid		= false;
	var lowerCase	= /[a-z]/;
	var upperCase	= /[A-Z]/;
	var digit		= /[0-9]/;
	var punctuation	= /[!@#$%^&*-_+=`;:.~ ]/;
	
	if (input.value.length >= 8 && input.value.length <= 16 && lowerCase.test(input.value) && upperCase.test(input.value) && digit.test(input.value) && punctuation.test(input.value))
	{
		valid = true;
	}
	return valid;
}

function cardNameValidation(input)
{
	var valid		= true;
	var characters	= /^[a-zA-Z ]+$/;
	
	if (!characters.test(input.value))
	{
		valid = false;
	}
	return valid;
}

function cardCharacterValidation(input)
{
	var valid 		= true; 
	var characters 	= /^[0-9 ]+$/;
	
	if(!characters.test(input.value))
	{
		valid = false;
	}
	
	return valid;
}
// onBlur
function cardValidation(number, name, min, max)
{
	var valid		= true;
	
	if (!numericalValidation(number))
	{
		valid = false;
	}
	else if (name == "Visa")
	{
		if (number.value.substring(0, 1) !=4 || number.value.length < min || number.value.length > max)
		{
			valid = false;
		}
	}
	else if (name == "MasterCard")
	{
		if (number.value.substring(0, 1) !=5 || number.value.substring(1, 2) < 1 || number.value.substring(1, 2) > 5 || number.value.length < min || number.value.length > max)
		{
			valid = false;
		}
	}
	else if (name == "American Express")
	{
		if (number.value.substring(0, 1) !=3 || (number.value.substring(1, 2) != 4 && number.value.substring(1, 2) != 7) || number.value.length < min || number.value.length > max)
		{
			valid = false;
		}
	}
	return valid;
}

function dateCharacterValidation(date)
{
	var valid		= true;
	var dateChar	= /^[0-9\/]+$/;
	
	if (!dateChar.test(date.value))
	{
		valid = false;
	}
	return valid;
}

function shortDateValidation(date)
{
	var valid		= true;
	// mm/yy
	var dateFormat	= /^\d{1,2}\/\d{2,4}$/;
	
	if (!dateFormat.test(date.value))
	{
		valid = false;
	}
	return valid;
}

function fullDateValidation(date)
{
	var valid		= true;
	// mm/dd/yy
	var dateFormat	= /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
	
	if (!dateFormat.test(date.value))
	{
		valid = false;
	}
	return valid;
}
