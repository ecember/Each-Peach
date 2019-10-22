$(function() {
  function init() {
    // Toggle tree branch top and bottom
    $('.pp-branch-trigger').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('pp-branch-trigger--active');
    })

    // Toggle mother hubbards dress
    $('.pp-dress-trigger').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('pp-dress-trigger--active');
    })

    // Toggle cinderellas duster
    $('.pp-duster-trigger').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('pp-duster-trigger--active');
    })

  }

  init();
});
