$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('.court').height() * Math.random(),
      $('.court').width() * Math.random(),
      Math.random() * 1000
    );
    $('.court').append(dancer.$node);
  });

  var makeNewPosition = function () {
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('.court').height() - 50;
    var w = $('.court').width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh, nw];    
    
  };

  var animateDiv = function(node) {
    var newq = makeNewPosition();
    $(node).animate({ top: newq[0], left: newq[1] }, function() {
      animateDiv();        
    });
    
  }; 

  var obj = document.createElement('audio');
  obj.src = 'https://kahimyang.com/resources/sound/click.mp3';
  obj.volume = 0.10;
  obj.autoPlay = false;
  obj.preLoad = true;       
 
  $('.raceButton').click(function() {
    obj.play();
  });

  $('.raceButton').on('click', function() {
    //var r = 1700;
    var r = $(window).width() - 100;
    $('.cash').css('display', 'block');
    setTimeout(function() {
      $('.cash').css('display', 'none');
      $('.dancer').each(function() {
        var speed = Math.random() * 10000;
        $(this).animate({left: r}, speed);
      });
      
    }, 3000);
  });

  $('.lineButton').on('click', function () {
    var l = 100;
    $('.dancer').each(function() {
      $(this).animate({left: l});
    });
  });

  $('body').on('mouseover', '.allen, .cryingMJ, .marcus', function() {
    animateDiv($(this));
  }); 

  $('body').on('click', '.allen', function() {
    $(this).fadeOut();
    var newCount = $('.allen').data('clickCount') + 1;
    $('.allen').data('clickCount', newCount);
    $('.allenCaught').html(newCount);
  }); 

  $('body').on('click', '.cryingMJ', function() {
    $(this).fadeOut();
    var newCount = $('.cryingMJ').data('clickCount') + 1;
    $('.cryingMJ').data('clickCount', newCount);
    $('.mjCaught').html(newCount);
  });

  $('body').on('click', '.marcus', function() {
    $(this).fadeOut();
    var newCount = $('.marcus').data('clickCount') + 1;
    $('.marcus').data('clickCount', newCount);
    $('.marcusCaught').html(newCount);
  });
});

