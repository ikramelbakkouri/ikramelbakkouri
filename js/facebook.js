function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    console.log('logged');
  } else {
    console.log('unable to log');
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}


window.fbAsyncInit = function () {
  FB.init({
    appId: '645069032992683',
    cookie: true,
    xfbml: true,
    version: 'v6.0'
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ar_AR/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));