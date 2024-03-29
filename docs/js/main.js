/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/common/page/page.js":
/*!****************************************!*\
  !*** ./src/blocks/common/page/page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utils_lazy_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/utils/lazy-loader */ "./src/js/utils/lazy-loader.js");
/* harmony import */ var _offer_offer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../offer/offer */ "./src/blocks/offer/offer.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation/navigation */ "./src/blocks/navigation/navigation.js");
/* harmony import */ var _product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product/product */ "./src/blocks/product/product.js");
/**
 * @file Implementation of the page block
 */



 // TODO: import other blocks
// -------------------------- BEGIN MODULE VARIABLES --------------------------

var RESIZE_INTERVAL = 200; // Resize event debouncing interval

var SCROLL_INTERVAL = 200; // Scroll event throttling interval

var resizeTimer = null;
var scrollTimer = null;
var wasScrolled = false; // --------------------------- END MODULE VARIABLES ---------------------------
// --------------------------- BEGIN EVENT HANDLERS ---------------------------

/**
 * Handle the window scroll event
 */

function handleWindowScroll() {
  _js_utils_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["default"].scanImages(); // TODO: add code
}
/**
 * Handle the window resize event
 */


function handleWindowResize() {} // TODO: add code

/**
 * Debounce the window resize event
 */


function debounceWindowResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleWindowResize, RESIZE_INTERVAL);
}
/**
 * Throttle the window scroll event
 */


function throttleWindowScroll() {
  if (scrollTimer) {
    // Ensure that we catch and execute that last invocation.
    wasScrolled = true;
    return;
  }

  handleWindowScroll();
  scrollTimer = this.setTimeout(function () {
    scrollTimer = null;

    if (wasScrolled) {
      handleWindowScroll();
      wasScrolled = false;
    }
  }, SCROLL_INTERVAL);
} // ---------------------------- END EVENT HANDLERS ----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the page block.
 * @return true
 */


function initBlock() {
  $(window).on({
    resize: debounceWindowResize,
    scroll: throttleWindowScroll
  });
  _js_utils_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init(); // TODO: initialize other blocks

  _offer_offer__WEBPACK_IMPORTED_MODULE_1__["default"].initBlock();
  _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["default"].initBlock();
  _product_product__WEBPACK_IMPORTED_MODULE_3__["default"].initBlock(); // Process the initial window size and scroll position

  handleWindowResize();
  handleWindowScroll();
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/blocks/navigation/navigation.js":
/*!*********************************************!*\
  !*** ./src/blocks/navigation/navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  $(".navigation__links").click(function () {
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
  $(document).ready(function () {
    $('.menu-trigger').click(function () {
      $('.navigation__menu ul').slideToggle(500);
    }); //end slide toggle

    $(window).resize(function () {
      if ($(window).width() > 768) {
        $('nav ul').removeAttr('style');
      }
    }); //end resize
  }); //end ready

  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/blocks/offer/offer.js":
/*!***********************************!*\
  !*** ./src/blocks/offer/offer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    if (window.matchMedia('(max-width: 768px)').matches) {
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
        arrows: false
      });
    }
  });
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/blocks/product/product.js":
/*!***************************************!*\
  !*** ./src/blocks/product/product.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  $(".wrapper .product__tab").click(function () {
    $(".wrapper .product__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_common_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/common/page/page */ "./src/blocks/common/page/page.js");
 // The page block is responsible for initialization of all other blocks

_blocks_common_page_page__WEBPACK_IMPORTED_MODULE_0__["default"].initBlock();

/***/ }),

/***/ "./src/js/utils/lazy-loader.js":
/*!*************************************!*\
  !*** ./src/js/utils/lazy-loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Lazy loader for images
 */
// -------------------------- BEGIN MODULE VARIABLES --------------------------
var BUFFER_HEIGHT = 50;
var LAZY_SELECTOR = '.lazy';
var $images; // --------------------------- END MODULE VARIABLES ---------------------------
// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

/**
 * Check if <tt>elem</tt> is in the browser's viewport.
 * 
 * @param {JQuery} $elem The element to check
 * @return {boolean} <tt>true</tt> if the element is in the viewport,
 *      <tt>false</tt> otherwise
 */

function isInViewport($elem) {
  var windowBottom = $(window).scrollTop() + $(window).height();
  return $elem.offset().top < windowBottom + BUFFER_HEIGHT;
} // --------------------------- END UTILITY FUNCTIONS --------------------------
// ----------------------------- BEGIN DOM METHODS ----------------------------

/**
 * Lazy-load the given <tt>img</tt> element.
 * 
 * @param {JQuery} $img The image element
 */


function loadImage($img) {
  if ($img.parent().is('picture')) {
    $img.siblings('source').forEach(function () {
      var $source = $(this);
      $source.attr('srcset', $source.attr('data-srcset')).removeAttr('data-srcset');
    });
  }

  $img.attr('src', $img.attr('data-src')).attr('srcset', $img.attr('data-srcset')).removeAttr('data-src data-srcset').removeClass('lazy');
} // ------------------------------ END DOM METHODS -----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the lazy image loader
 */


function init() {
  $images = $(LAZY_SELECTOR);
}
/**
 * Load all images that have been scrolled into the viewport for the first time
 */


function scanImages() {
  if ($images.length === 0) {
    return;
  }

  $images = $images.filter(function () {
    var $img = $(this);

    if (!isInViewport($img)) {
      return true;
    }

    loadImage($img);
    return false;
  });
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  scanImages: scanImages
});

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\GIT\Examination\FinalProject\src\js\main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map