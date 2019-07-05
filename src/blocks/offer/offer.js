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
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.offer_slider'
    //   });
      $('.offer_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
      });
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
