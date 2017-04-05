
$(document).ready((e) => {
// e.preventDefault();
console.log('hello world.')


// sticky nav-bar
  var mn = $(".navigation-bar");
  mns = "navigation-scrolled";
  hdr = $('header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

// slow page scroll to href anchor tag
  $('a[href*="#"]:not([href="#"])').click(function() {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      console.log(target[0].id);
      if (target[0].id === 'top') {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      }
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 200
        }, 1000);
        return false;
      }
  });


});
