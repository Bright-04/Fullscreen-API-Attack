// Copyright 2012 Feross Aboukhadijeh (http://feross.org) (feross@feross.org)
// Improved version with modern browser compatibility

// Fix resource paths to be relative
$.facebox.settings.closeImage = 'img/facebox/closelabel.png';
$.facebox.settings.loadingImage = 'img/facebox/loading.gif';

// Modern fullscreen API handling
function requestFullScreen() {
  if (elementPrototype.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (elementPrototype.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (elementPrototype.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (elementPrototype.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  } else {
    /* fail silently */
  }
}

// Exit fullscreen function
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function playFailSound() {
  $('body').append('<audio preload="auto" autoplay><source src="sound/mario-death.mp3" /><source src="sound/mario-death.ogg" /></audio>');
}

// Enhanced browser detection
function detectBrowser() {
  const ua = navigator.userAgent;
  if (ua.indexOf("Chrome") > -1 && ua.indexOf("Edge") === -1) return "Chrome";
  if (ua.indexOf("Firefox") > -1) return "Firefox";
  if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) return "Safari";
  if (ua.indexOf("Edge") > -1) return "Edge";
  return BrowserDetect.browser; // fallback to the old detection
}

$(function() {
  // Preload target site image with modern approach
  $('#spoofSite img').each(function(i, img) {
    if ('loading' in HTMLImageElement.prototype) {
      img.loading = 'eager'; // Use native lazy loading but make this one eager
    } else {
      var temp = new Image();
      temp.src = img.src;
    }
  });

  // Add event listener for exit fullscreen button
  $('#exitFullscreen').on('click', function() {
    exitFullScreen();
    $.facebox.close();
  });

  // Detect if the demo will run on user's browser
  var errors = [];
  var errorStr = "";
  if (window.fullscreenSupport) {
    // Modern browser detection
    const browserName = detectBrowser();
    $('html').addClass(browserName.toLowerCase());
    
    // OS detect (keep the existing code for compatibility)
    if (BrowserDetect.OS == "Mac") {
      $('html').addClass('osx');
    } else if (BrowserDetect.OS == "Windows") {
      $('html').addClass('windows');
    } else if (BrowserDetect.OS == "Linux") {
      $('html').addClass('linux');
    } else {
      // Try modern platform detection
      const platform = navigator.platform.toLowerCase();
      if (platform.includes('mac')) {
        $('html').addClass('osx');
      } else if (platform.includes('win')) {
        $('html').addClass('windows');
      } else if (platform.includes('linux')) {
        $('html').addClass('linux');
      } else {
        errors.push("You're not using Windows, Mac OS X, or Linux. The <b>demo will not work</b> on your OS.");
      }
    }
  } else {
    errors.push("Your browser does not support the Fullscreen API. Sorry - this demo will not work for you. Try a modern browser like Chrome, Firefox, Safari, or Edge.");
  }

  // Errors?
  if (errors.length) {
    $.each(errors, function(i, error) {
      errorStr += error;
      if (i != errors.length - 1) {
        errorStr += "<br><br>";
      }
    });
  }

  // Set class on html element that represents the fullscreen state
  // Support all vendor prefixed versions
  $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
    if (document.fullscreenElement || document.webkitFullscreenElement || 
        document.mozFullScreenElement || document.msFullscreenElement) {
      $('html').addClass('fullscreened').removeClass('not-fullscreened');
    } else {
      $('html').addClass('not-fullscreened').removeClass('fullscreened');
      $('html').off('click.spoof');
    }
  });
  
  // Initial trigger to set correct class
  $(document).trigger('fullscreenchange');

  // Handle click on target link
  $('html').on('click', '.spoofLink', function(e) {
    // Prevent navigation to legit link
    e.preventDefault();
    e.stopPropagation();

    // Show error if browser doesn't support fullscreen
    if (!window.fullscreenSupport) {
      $.facebox(errorStr);
      return;
    }

    // Trigger fullscreen
    requestFullScreen();

    // Set target site to proper height, based on window size
    $('#spoofSite').css({
      top: $('#spoofHeader').height(),
      height: $(window).height()
    });

    // Callout when the user clicks on something from fake UI
    $('html').on('click.spoof', function() {
      playFailSound();
      $('#spoofHeader').stop().effect('shake', function() {
        $.facebox({div: '#phished'});
      });
    });
  });
});

