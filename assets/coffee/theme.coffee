$('.js-toggle-search').click (e) ->
  e.preventDefault()
  $(@).toggleClass('active').next('.search-wrap').toggleClass('active')
