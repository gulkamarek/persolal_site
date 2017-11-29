/* portfolio div as an aanchor and styling */

  function OpenInNewTabWinBrowser(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  function hooverDiv() {
    var elements = document.getElementsByClassName("portfolio-item");
    for(var i=0; i<elements.length; i++) {
      elements[i].style.transition = "all 0.5s";
      elements[i].style.WebkitTransition = "all 0.5s";
    }
  }

  function highlightIt(element){
    var item = element.querySelector(".flashIt");
    $(item).addClass('flash');
    setTimeout(function() {
      $(item).removeClass('flash');
    }, 1000);
  }


/* not my code */
/* scroling along the page */
  window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }


  /* Scroll to Top Button */
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-top-button').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-top-button').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-top-button').click(function() {      // When arrow is clicked
    $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 500);
  });


/* Active menu */

  $(document).ready(function(){
    // $sections incleudes all of the container divs that relate to menu items.
    var $sections = $('.section-container');

    // The user scrolls
    $(window).scroll(function(){

    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();

    // $currentSection is somewhere to place the section we must be looking at
    var $currentSection

    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function(){
      // divPosition is the position down the page in px of the current section we are testing
      var divPosition = $(this).offset().top;

      // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
      // the -1 is so that it includes the div 1px before the div leave the top of the window.
      if( divPosition - 1 < currentScroll ){
      // We have either read the section or are currently reading the section so we'll call it our current section
      $currentSection = $(this);

      // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
      }

      // This is the bit of code that uses the currentSection as its source of ID
      var id = $currentSection.attr('id');
     $('a').removeClass('active');
     $("[href=#"+id+"]").addClass('active');

    })

    });
  });
