/**
 * @file Implementation of the offer block
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


// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the offer block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here
    
    $(document).ready(function () {

      if(window.matchMedia('(max-width: 768px)').matches){
        $('.offer_slider').slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear'
        });
      } else {
        $('.offer_slider').slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          loop: true,
          infinite: true,
          centerMode: true,
          focusOnSelect: true,
          arrows: false,
        });
      }
     });
     
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
