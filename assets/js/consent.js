function onUserConsent() {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
  }
  window.addEventListener('load', function() {
    document.getElementById('consent-banner').style.display = 'block';
  });
  
  function acceptConsent() {
    document.getElementById('consent-banner').style.display = 'none';
    onUserConsent();
  }