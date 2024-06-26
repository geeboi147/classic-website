

const form = document.querySelector('#signup');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password')
form.addEventListener('submit', function (e){
e.preventDefault();

})




const checkUsername = () => {

let valid = false;
const min = 3,
max = 25;
const username = usernameEl.value.trim();

if (!isRequired(username)) {
showError(usernameEl, 'Username cannot be blank.');
} else if (!isBetween(username.length, min, max)) {
showError(usernameEl, 'Username must be between ${min} and ${max} characters.')
} else {
showSuccess(usernameEl);
valid = true;
}
return valid;
}


const checkEmail = () => {
let valid = false;
const email = emailEl.value.trim();
if (!isRequired(email)) {
showError(emailEl, 'email cannot be blank.');
}else if (!isEmailValid(email)) {
showError(emailEl, 'Email is not valid.')
} else {
showSuccess(emailEl);
valid = true;
}
return valid;
};


const checkPassword = () => {
let valid = false;
const password = passwordEl.value.trim();
if (!isRequired(password)) {
showError(passwordEl, 'password cannot be blank.');
} else if (!isPasswordSecure(password)) {
showError(passwordEl, 'password must have at least  8 characters that includes at least 1 lowercase character, 1 uppercase character , 1 number, and 1 special character in (!@#$%^&*)');
} else {
showSuccess(passwordEl);
valid = true;
}
return valid;
}; 


const checkConfirmPassword = () => {
let valid = false;
const confirmPassword = confirmPasswordEl.value.trim();
const password = passwordEl.value.trim();

if (!isRequired(confirmPassword)) {
showError(confirmPasswordEl, 'please enter the password again.');
} else if (password !== confirmPassword) {
showError(confirmPasswordEl, 'the password does not match');
} else {
showSuccess(confirmPasswordEl);
valid = true;
}
return valid;
};

const isEmailValid = (email) => {
const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
};

const isPasswordSecure = (password) => {
const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;



const showError = (input, message) => {

const formField = input.parentElement;

formField.classList.remove('success');
formField.classList.add('error');

const error = formField.querySelector('small');
error.textContent = message;
};

const showSuccess = (input) => {
const formField = input.parentElement;
formField.classList.remove('error');
formField.classList.add('success');

const error = formField.querySelector('small');
error.textContent = '';
};
form.addEventListener('submit', function (e) {
e.preventDefault();

let isUsernameValid = checkUsername(),
isEmailValid = checkEmail(),
isPasswordValid = checkPassword(),
isConfirmPasswordValid = checkConfirmPassword();

let isFormValid = isUsernameValid &&
isEmailValid &&
isPasswordValid &&
isConfirmPasswordValid;

if (isFormValid) {
}
});

const debounce = (fn, delay = 50) => {
let timeoutId;
return (...args) => {
if (timeoutId) {
clearTimeout(timeoutId);
}

timeoutId = setTimeout(() => {
fn.apply(null, args)
}, delay);
};
};

form.addEventListener('input', debounce(function (e) {

switch (e.target.id) {
case 'username':
checkUsername();
break;
case 'email':
checkEmail();
break;
case 'password':
checkPassword();
break;
case 'confirm-password':
checkConfirmPassword();
break;
}
}));




function show(){
var x = document.getElementById("password");
if(x.type === "password"){
x.type = "text";
} else{
	x.type = "password";
	}
};





$(document).ready(function(){
$('.desc').hide();


var numberOfDesc = $('.task-desc-title').length;


var i = 0;

while(i <= numberOfDesc){
	function tasks(i) {
		$('.task-desc-title').eq(i).click(function () {
			$('.desc').slideUp();
			
			if($('.desc').eq(i).is(':hidden')){
				$('.desc').eq(i).slideDown("slow");
			} else {
				$('.desc').eq(i).slideUp();
				
			}
		});
	}
	tasks(i);
	i++;
}
});






function myFunction(){
var navbar=document.getElementById('nav');
navbar.classList.toggle('show');	
}

