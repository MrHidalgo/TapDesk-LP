"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  btn.addEventListener("click", function (ev) {
    var elem = ev.currentTarget;

    elem.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach(function (val, idx) {
      val.classList.toggle("is-hideScroll");
    });
  });
};

/**
 * @name initHeaderFixed
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

  var countScroll = $(window).scrollTop(),
      headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("header--fixed");
  } else {
    headerElement.removeClass("header--fixed");
  }
};

/**
 * @name initPreventBehavior
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {
  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSvg4everybody()
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

  svg4everybody();
};

/**
 * @name initSwiper
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
  var mySwiperFinding = new Swiper('.swiper-container--finding', {

    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,

    grabCursor: false,
    freeMode: false,

    effect: 'fade', // "slide", "fade", "cube", "coverflow" or "flip"
    fadeEffect: {
      crossFade: true
    },

    // off touch for destop
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",

    slidesPerView: 1,
    spaceBetween: 0,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev'
    },
    on: {
      init: function init() {
        var slider = this.$el,
            textContainer = slider.find('.slider__text-wrapper'),
            paginationContainer = slider.find('.slider__pagination');

        var maxHeight = 0;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = $(textContainer)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;

            if ($(el).outerHeight(true) > maxHeight) {
              maxHeight = $(el).outerHeight(true);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        $(paginationContainer).css({
          'top': maxHeight
        });
      }
    }
  });

  var mySwiperSave = new Swiper('.swiper-container--save', {

    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,

    grabCursor: false,
    freeMode: false,

    effect: 'fade', // "slide", "fade", "cube", "coverflow" or "flip"
    fadeEffect: {
      crossFade: true
    },

    // off touch for destop
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",

    slidesPerView: 1,
    spaceBetween: 0,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev'
    },
    on: {
      init: function init() {
        var slider = this.$el,
            textContainer = slider.find('.slider__text-wrapper'),
            paginationContainer = slider.find('.slider__pagination');

        var maxHeight = 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = $(textContainer)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var el = _step2.value;

            if ($(el).outerHeight(true) > maxHeight) {
              maxHeight = $(el).outerHeight(true);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        $(paginationContainer).css({
          'top': maxHeight
        });
      }
    }
  });

  var mySwiperManage = new Swiper('.swiper-container--manage', {

    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,

    grabCursor: false,
    freeMode: false,

    effect: 'fade', // "slide", "fade", "cube", "coverflow" or "flip"
    fadeEffect: {
      crossFade: true
    },

    // off touch for destop
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",

    slidesPerView: 1,
    spaceBetween: 0,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev'
    },
    on: {
      init: function init() {
        var slider = this.$el,
            textContainer = slider.find('.slider__text-wrapper'),
            paginationContainer = slider.find('.slider__pagination');

        var maxHeight = 0;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = $(textContainer)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var el = _step3.value;

            if ($(el).outerHeight(true) > maxHeight) {
              maxHeight = $(el).outerHeight(true);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        $(paginationContainer).css({
          'top': maxHeight
        });
      }
    }
  });

  var mySwiperControl = new Swiper('.swiper-container--control', {

    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,

    grabCursor: false,
    freeMode: false,

    effect: 'fade', // "slide", "fade", "cube", "coverflow" or "flip"
    fadeEffect: {
      crossFade: true
    },

    // off touch for destop
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",

    slidesPerView: 1,
    spaceBetween: 0,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev'
    },
    on: {
      init: function init() {
        var slider = this.$el,
            textContainer = slider.find('.slider__text-wrapper'),
            paginationContainer = slider.find('.slider__pagination');

        var maxHeight = 0;

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = $(textContainer)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var el = _step4.value;

            if ($(el).outerHeight(true) > maxHeight) {
              maxHeight = $(el).outerHeight(true);
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        $(paginationContainer).css({
          'top': maxHeight
        });
      }
    }
  });
};

/**
 * @name initWebFontLoader
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  WebFont.load({
    google: {
      families: ['Muli:200,300,400,600,700,800,900']
    }
  });

  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  initHeaderFixed();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
  initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   *
   * @param selector
   */
  var selectReset = function selectReset(selector) {
    if (selector === undefined) {
      var selector = 'select';
    }

    $(selector).each(function () {
      var valOption = $(this).children('option:selected');

      if (valOption.val() !== '0') {
        $(this).prev('span').addClass("is-choose");
      }

      $(this).prev('span').html(valOption.text());
    });
  };
  /**
   *
   * @param selector
   */
  var initSelect = function initSelect(selector) {
    if (selector === undefined) {
      var selector = 'select';
    }

    selectReset(selector);

    $(selector).on('change', function () {
      selectReset(this);
    });
  };

  /**
   *
   */
  var initPipelinesTabs = function initPipelinesTabs() {
    $('.pipelines__tabs').on('click', function (ev) {
      var elem = $(ev.currentTarget),
          elemID = elem.data('tabs-id');

      var tabsBody = $('.pipelines__tabs-body');

      $('.pipelines__tabs').removeClass('is-active');
      elem.addClass('is-active');

      $('.pipelines__slider-item').removeClass('is-show');
      $('.pipelines__slider-item-' + elemID).addClass('is-show');

      $('.pipelines__tabs-body > div').removeClass('is-active');
      $('.pipelines__tabs-body > div[data-tabs-body="' + elemID + '"]').addClass('is-active');
    });
  };

  /**
   *
   */
  var initVideo = function initVideo() {
    var vid = document.getElementById("video");

    if (vid) {
      /**
       *
       */
      vid.ontimeupdate = function () {
        var percentage = vid.currentTime / vid.duration * 100;
        $("[progress-video-js] span").css("width", percentage + "%");

        if (percentage === 100) {
          $("[progress-video-js] span").css("width", "0");
          $('[play-video-js]').fadeIn(300);
        }
      };

      /**
       *
       */
      $("[progress-video-js]").on("click", function (ev) {
        var offset = $(ev.currentTarget).offset(),
            left = ev.pageX - offset.left,
            totalWidth = $("[progress-video-js]").width(),
            percentage = left / totalWidth,
            vidTime = vid.duration * percentage;

        vid.currentTime = vidTime;
      });

      /**
       *
       */
      $('[play-video-js]').on('click', function (ev) {
        var elem = $(ev.currentTarget);

        if (!vid.paused) {
          vid.pause();
        } else {
          vid.play();
          elem.fadeOut(300);
        }
      });

      /**
       *
       */
      $(vid).on('click', function () {
        if (!vid.paused) {
          vid.pause();
          $('[play-video-js]').fadeIn(300);
        }
      });
    }
  };

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // lib
    // callback
    initSelect();
    initPipelinesTabs();
    initVideo();
    initHamburger();
    initSwiper();
  };
  initJquery();
});