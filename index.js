// import './css/style.css';
// import './css/font-awesome-animation.min.css';
// import './css/nav-bar.css';
// import './css/animate.css';

$(document).ready((e) => {
console.log('hello world.')

// sticky nav-bar
  const mn = $(".navigation-bar");
  const mns = "navigation-scrolled";
  const hdr = $('header').height();

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
      if (target[0].id === 'top') {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      }
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 90
        }, 1000);
        return false;
      }
  });

  // typed text
    // let i = 0;
		$(".fa-stack").click(function() {
      const quotes = ['<i class="fa fa-quote-left fa-1x" aria-hidden="true"></i>' +
                  ' If builders built buildings the way programmers wrote programs,<br>' +
                  'then the first woodpecker that came along wound destroy civilization.' +
                  '<i class="fa fa-quote-right fa-1x" aria-hidden="true"></i> - Gerald Weinberg ' ,
                  "Second sentence."];

      const languages = ['React', 'Redux', 'ES6/7', 'jQuery', 'MongoDB', 'HTML5', 'CSS3/LESS', 'Bootstrap', 'MaterialUI', 'PassportJS', 'Webpack', 'Babel', 'TravisCI', 'Heroku', 'Mocha', 'Chai', 'Jest'];

      // if (i >= languages.length) {
        // i = 0;
      // }

      $(".typed-text").typed({
        strings: [...languages],
        typeSpeed: 0
      });
      // i += 1;
    });

});
