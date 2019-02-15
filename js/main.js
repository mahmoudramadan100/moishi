$(document).ready(function(){

  $('.popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
  


  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
      $(".navbar").css({"background":"rgba(0, 2, 2, 0.9)",
    });
	  }

	  else{
      $(".navbar").css({
        "background": "rgba(0, 2, 2, 0.3)",
    });  	
	  }
  })

  $('.paroller-example').paroller({
    factorXs: 0.1,
    factorSm: 0.1,
    factorMd: -0.5,
    factorLg: -0.2,
    factorXl: -0.2,
    factor: -0.4,
    type: 'foreground',
    direction: 'vertical'
    });
    $('.paroller').paroller({
      factorXs: 0.1,
      factorSm: 0.1,
      factorMd: -0.1,
      factorLg: -0.1,
      factorXl: -0.1,
      factor: -0.4,
      type: 'foreground',
      direction: 'vertical'
      });

      $('.paroller-1').paroller({
        factorXs: 0.1,
        factorSm: 0.1,
        factorMd: -0.1,
        factorLg: -0.1,
        factorXl: -0.1,
        factor: -0.4,
        type: 'foreground',
        direction: 'vertical'
        });

        $('.popup-modal').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#username',
          modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });


       $('.simple-ajax-popup-align-top').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
      });


      $('.modal-1').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
      });
      $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });

      $('body').scrollspy({target: ".navbar", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#navbarSupportedContent a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });

     
  });