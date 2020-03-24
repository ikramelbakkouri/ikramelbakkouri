function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log(response);
      } else {
        console.log('not logged');

        FB.login(function(response) {
          if (response.status === 'connected') {
            // Logged into your webpage and Facebook.
            console.log('logged');
          } else {
            // The person is not logged into your webpage or we are unable to tell. 
            console.log('unable to log');
          }
        }, {scope: 'public_profile,email'});
      }
}



window.fbAsyncInit = function() {
    FB.init({
      appId      : '645069032992683',
      cookie     : true,
      xfbml      : true,
      version    : 'v6.0'
    });
      
    FB.AppEvents.logPageView();
    
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));