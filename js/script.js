// Copyright 2012 Feross Aboukhadijeh (http://feross.org) (feross@feross.org)
// Modernized version

// Update facebox settings with relative paths
$.facebox.settings.closeImage = 'img/facebox/closelabel.png';
$.facebox.settings.loadingImage = 'img/facebox/loading.gif';

// Modern fullscreen request function
const requestFullScreen = () => {
  const elem = document.documentElement;
  
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
};

// Sound effect function
const playFailSound = () => {
  const audio = new Audio();
  audio.src = 'sound/mario-death.mp3';
  audio.play().catch(e => console.warn('Audio play failed:', e));
};

// Adjust site content to fit screen
const adjustSpoofSite = () => {
  const headerHeight = $('#spoofHeader').height();
  $('#spoofSite').css({
    top: headerHeight,
    height: `calc(100vh - ${headerHeight}px)`
  });
};

// Document ready using modern jQuery
$(() => {
  // Preload target site image
  $('#spoofSite img').each((i, img) => {
    const temp = new Image();
    temp.src = img.src;
  });

  // Detect if the demo will run on user's browser
  const errors = [];
  let errorStr = "";
  
  if (window.fullscreenSupport) {
    // Browser detection and set appropriate class
    const html = $('html');
    
    // Browser detect
    if (BrowserDetect.browser === "Chrome") {
      html.addClass('chrome');
    } else if (BrowserDetect.browser === "Firefox") {
      html.addClass('firefox');
    } else if (BrowserDetect.browser === "Safari") {
      html.addClass('safari');
    } else {
      html.addClass('chrome'); // fallback to Chrome UI
      errors.push("Your browser supports the Fullscreen API! However, it didn't support it when this demo was created. The <b>demo will still work</b> but you will see Chrome's UI instead of your own browser's UI.");
    }

    // OS detect
    if (BrowserDetect.OS === "Mac") {
      html.addClass('osx');
    } else if (BrowserDetect.OS === "Windows") {
      html.addClass('windows');
    } else if (BrowserDetect.OS === "Linux") {
      html.addClass('linux');
    } else {
      errors.push("You're not using Windows, Mac OS X, or Linux. The <b>demo will not work</b> on your OS.");
    }
  } else {
    errors.push("Your browser does not support the Fullscreen API. Sorry - this demo will not work for you. Try Chrome, Firefox, or Safari.");
  }

  // Display errors if any
  if (errors.length) {
    errorStr = errors.join("<br><br>");
  }

  // Modern fullscreen change event handler
  const fullscreenChangeHandler = () => {
    const isFullscreen = document.fullscreenElement || 
                          document.webkitFullscreenElement || 
                          document.mozFullScreenElement ||
                          document.msFullscreenElement;
    
    if (isFullscreen) {
      $('html').addClass('fullscreened').removeClass('not-fullscreened');
      adjustSpoofSite();
    } else {
      $('html').addClass('not-fullscreened').removeClass('fullscreened');
      $('html').off('click.spoof');
    }
  };

  // Listen for fullscreen change events across browsers
  document.addEventListener('fullscreenchange', fullscreenChangeHandler);
  document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
  document.addEventListener('mozfullscreenchange', fullscreenChangeHandler);
  document.addEventListener('MSFullscreenChange', fullscreenChangeHandler);
  
  // Set initial state
  fullscreenChangeHandler();

  // Handle window resize
  $(window).on('resize', adjustSpoofSite);

  // Handle click on target button
  $('.spoofLink').on('click', function(e) {
    // Prevent navigation
    e.preventDefault();
    e.stopPropagation();

    // Show error if browser doesn't support fullscreen
    if (!window.fullscreenSupport) {
      $.facebox(errorStr);
      return;
    }

    // Trigger fullscreen
    requestFullScreen();

    // Setup the spoof site dimensions
    adjustSpoofSite();

    // Attach click handler for fake site with delayed reaction for more realism
    $('html').on('click.spoof', function() {
      // Add a slight delay before showing the warning for a more realistic feel
      setTimeout(() => {
        playFailSound();
        
        $('#spoofHeader').stop().effect('shake', {
          times: 3,
          distance: 10,
          duration: 800
        }, function() {
          // Show the phishing warning without exiting fullscreen
          $.facebox({div: '#phished'});
          
          // Ensure proper centering of the facebox
          setTimeout(() => {
            $('#facebox').addClass('active');
            $('#facebox').css({
              'top': '50%',
              'left': '50%',
              'transform': 'translate(-50%, -50%)'
            });
          }, 10);
        });
      }, 300);
    });
  });
  
  // Fix centering for any facebox that appears
  $(document).bind('reveal.facebox', function() {
    $('#facebox').addClass('active');
    $('#facebox').css({
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)'
    });
  });
});

