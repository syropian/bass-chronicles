(function() {
  $('.js-toggle-search').click(function(e) {
    e.preventDefault();
    return $(this).toggleClass('active').next('.search-wrap').toggleClass('active');
  });

}).call(this);
