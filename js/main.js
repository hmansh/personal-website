$(document).ready(function () {
  'use strict';

  $(document).on("scroll", onScroll);

  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["hey! have you seen my blog?"],
      // typeSpeed: 120,
      loop: true,
    });
  });
});