/**
 * @file Implementation of the product block
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
 * Initialize the product block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
  // TODO: add code here
  
  $('.product_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product_nav'
  });
$('.product_nav').slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    asNavFor: '.product_slider',
    focusOnSelect: true
  });

  $(".tab_item").not(":first").hide();
  $(".wrapper .product__tab").click(function() {
	  $(".wrapper .product__tab").removeClass("active").eq($(this).index()).addClass("active");
	  $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
