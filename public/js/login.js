$("#login").click(goToLogIn);
$("#signup").click(goToSignUp);




function goToLogIn() {
	event.preventDefault();
	console.log("login clicked");
	$("div.login-box").replaceWith('<div class="login-box page-two">\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<img src="https://statewideguttercompany.com/wp-content/uploads/2012/07/logo-placeholder.jpg" width="100px" height="100px">\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<h1>hApp</h1>\
				</div>\
			</div>\
			<form>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="USERNAME"></input>\
				</div>\
			</div>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="PASSWORD"></input>\
				</div>\
			</div>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="checkbox">Remember Me</input>\
				</div>\
			</div>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a href="home"><button type="button" class="btn btn-lg active btn-primary">LOG IN</button></a>\
				</div>\
			</div>\
			</form>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a href="#">Forgot Password</a>\
				</div>\
			</div>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a href=""><--Back</a>\
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
					<img src="https://statewideguttercompany.com/wp-content/uploads/2012/07/logo-placeholder.jpg" width="100px" height="100px">\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<h1>hApp</h1>\
				</div>\
			</div>\
			<form>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="EMAIL"></input>\
				</div>\
			</div>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="USERNAME"></input>\
				</div>\
			</div>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<input type="text" placeholder="PASSWORD"></input>\
				</div>\
			</div>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a href="home"><button type="button" class="btn btn-lg active btn-primary">SIGN UP</button></a>\
				</div>\
			</div>\
			</form>\
			<div class="row login-row">\
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">\
					<a href=""><--Back</a>\
				</div>\
			</div>\
		</div>');
}
