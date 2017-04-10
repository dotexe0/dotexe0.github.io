
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


const languages = ['React', 'Redux', 'ES6/7', 'NodeJS', 'jQuery', 'MongoDB', 'HTML5', 'CSS3/LESS', 'Bootstrap', 'MaterialUI', 'PassportJS', 'Webpack', 'Babel', 'TravisCI', 'Heroku', 'Mocha', 'Chai', 'Jest','...', ''];
//run on start
  $(function() {
    $(".typed-text").typed({
          strings: [...languages],
          typeSpeed: 0
        });
      });

//run on click
  $(".fa-stack").click(function() {
    $(".typed-text").typed({
      strings: [...languages],
      typeSpeed: 0
    });
  });

  });
