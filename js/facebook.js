function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log(response);
      } else if (response.status === 'not_authorized') {
        console.log('not connected to app');
      } else {
        console.log('not logged in to fb');
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

  

  function Login() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));