'use strict';

$(document).ready(() => {
	console.log("javascript loaded");

})

$("#login").click(goToLogIn);
$("#signup").click(goToSignUp);



function goToLogIn() {
	event.preventDefault();
	console.log("login clicked");
	$("div.login-box").replaceWith('<div class="login-box page-two">\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<img src="/static/img/icon.png" width="130px" height="100px">\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<h1>TimeStitch</h1>\
				</div>\
			</div>\
			<form style="margin-bottom:0.65em;" id="login_form" action="/about">\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="USERNAME" required></input>\
				</div>\
			</div>\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="password" placeholder="PASSWORD" id="myInput" required></input>\
					<input type="checkbox" onclick="myFunction()" style="position:absolute;left:220px;top:7px;">\
				</div>\
			</div>\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<div style="width:182.4px; text-align:left; margin:auto;" ><label><input type="checkbox"/><span style="color:#555;">Remember Me</span></label></div>\
				</div>\
			</div>\
			<div class="row login-row form" style="margin-bottom:0px;">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a><button type="submit" form="login_form" class="btn btn-lg active btn-primary" style="width:150px;">LOG IN</button></a>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a href="#">Forgot Password</a>\
				</div>\
			</div>\
			</form>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<div style="width:182.4px; text-align:left; margin:auto;" ><a href=""><i class="fa fa-chevron-left" style="color:#009688;"></i> Back</a></div>\
				</div>\
			</div>\
		</div>');
}

function goToSignUp() {
	event.preventDefault();
	console.log("signup clicked");
	$("div.login-box").replaceWith('<div class="login-box page-two">\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<img src="/static/img/icon.png" width="130px" height="100px">\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<h1>TimeStitch</h1>\
				</div>\
			</div>\
			<form id="signup_form" action="/about">\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="EMAIL" required></input>\
				</div>\
			</div>\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="USERNAME" required></input>\
				</div>\
			</div>\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="password" placeholder="PASSWORD" required></input>\
				</div>\
			</div>\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
				</div>\
			</div>\
			<div class="row login-row form">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a><button type="submit" form="signup_form" class="btn btn-lg active btn-primary" style="width:150px;">SIGN UP</button></a>\
				</div>\
			</div>\
			</form>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<div style="width:182.4px; text-align:left; margin:auto;" ><a href=""><i class="fa fa-chevron-left" style="color:#009688;"></i> Back</a></div>\
				</div>\
			</div>\
		</div>');
}

$(".btn.tags.minimal").click(toggleChecked);

function toggleChecked(event){
	event.stopPropagation();
	$(this).toggleClass("checked");
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
