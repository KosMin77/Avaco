/**
 * @file Implementation of the navigation block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

 // ** creation active menu through html & boy animation ** //


// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the navigation block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here
      $(".navigation__links").click(function() {
         $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 90
         }, {
            duration: 700,
            easing: "swing"
         });
         if (window.innerWidth < 768) {
            $('.navigation__menu ul').slideToggle(500);
         }
         return false;
      });

      $(document).ready(function() {
         $('.menu-trigger').click(function() {
           $('.navigation__menu ul').slideToggle(500);
         });//end slide toggle
         
         $(window).resize(function() {		
             if (  $(window).width() > 768 ) {			
                $('nav ul').removeAttr('style');
              }
          });//end resize
       });//end ready

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
