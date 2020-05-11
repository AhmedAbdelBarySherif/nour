$(document).ready( function() {
    
    //home slider
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var CitiesSlider = function (_React$Component) {
      _inherits(CitiesSlider, _React$Component);

      function CitiesSlider(props) {
        _classCallCheck(this, CitiesSlider);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.IMAGE_PARTS = 4;

        _this.changeTO = null;
        _this.AUTOCHANGE_TIME = 5000;

        _this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
        return _this;
      }

      CitiesSlider.prototype.componentWillUnmount = function componentWillUnmount() {
        window.clearTimeout(this.changeTO);
      };

      CitiesSlider.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.runAutochangeTO();
        setTimeout(function () {
          _this2.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
      };

      CitiesSlider.prototype.runAutochangeTO = function runAutochangeTO() {
        var _this3 = this;

        this.changeTO = setTimeout(function () {
          _this3.changeSlides(1);
          _this3.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
      };

      CitiesSlider.prototype.changeSlides = function changeSlides(change) {
        window.clearTimeout(this.changeTO);
        var length = this.props.slides.length;

        var prevSlide = this.state.activeSlide;
        var activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide: activeSlide, prevSlide: prevSlide });
      };

      CitiesSlider.prototype.render = function render() {
        var _this4 = this;

        var _state = this.state;
        var activeSlide = _state.activeSlide;
        var prevSlide = _state.prevSlide;
        var sliderReady = _state.sliderReady;

        return React.createElement(
          'div',
          { className: classNames('slider', { 's--ready': sliderReady }) },
          React.createElement(
            'p',
            { className: 'slider__top-heading' },
            'Travelers'
          ),
          React.createElement(
            'div',
            { className: 'slider__slides' },
            this.props.slides.map(function (slide, index) {
              return React.createElement(
                'div',
                {
                  className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
                  key: slide.city
                },
                React.createElement(
                  'div',
                  { className: 'slider__slide-content' },
                  React.createElement(
                    'h3',
                    { className: 'slider__slide-subheading' },
                    slide.country || slide.city
                  ),
                  React.createElement(
                    'h2',
                    { className: 'slider__slide-heading' },
                    slide.city.split('').map(function (l) {
                      return React.createElement(
                        'span',
                        null,
                        l
                      );
                    })
                  ),
                  React.createElement(
                    'p',
                    { className: 'slider__slide-readmore' },
                    'read more'
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'slider__slide-parts' },
                  [].concat(Array(_this4.IMAGE_PARTS).fill()).map(function (x, i) {
                    return React.createElement(
                      'div',
                      { className: 'slider__slide-part', key: i },
                      React.createElement('div', { className: 'slider__slide-part-inner', style: { backgroundImage: 'url(' + slide.img + ')' } })
                    );
                  })
                )
              );
            })
          ),
          React.createElement('div', { className: 'slider__control', onClick: function onClick() {
              return _this4.changeSlides(-1);
            } }),
          React.createElement('div', { className: 'slider__control slider__control--right', onClick: function onClick() {
              return _this4.changeSlides(1);
            } })
        );
      };

      return CitiesSlider;
    }(React.Component);

    var slides = [{
      city: 'Paris',
      country: 'France',
      img: 'imgs/slider/slide_1.png'
    }, {
      city: 'Singapore',
      img: 'imgs/slider/slide_2.png'
    }];

    ReactDOM.render(React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));

    //-----------------------------------------------------------------------------------------------------------    
 
    //Navabar
    (function($) {
    "use strict";

    var $navbar = $(".navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            }, 100);
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "0"
            }, 100);
        }
    });

})(jQuery, undefined);
    
    //-----------------------------------------------------------------------------------------------------------
    
    //Home ==> video
    $('.wrapper_home .video .ved_front .layer i').click(function() {
        $('.ved_front').fadeOut(600);
        $('#myvideo').play();
    });
    
    //-----------------------------------------------------------------------------------------------------------
    
    //-----------------------------------------------------------------------------------------------------------
    //lang
    $('.lang i').click(function() {
        $('.lang i').toggleClass('lang_fake');
        if ( $('.lang i').hasClass('lang_fake') ){
            $('.lang ul').css('left', '-160px');
        } else {
            $('.lang ul').css('left', '0');
        }
    });
  
    //----------------------------------------------------------------------------------------------------------
  
    //particular 
    /* -----------------------------------------------
    /* How to use? : Check the GitHub README
    /* ---- particles.js config ---- */

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 150,
          "density": {
            "enable": true,
            "value_area": 5200
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 20,
            "height": 20
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    
    
    
    
    
//    (function($) {
//        "use strict";
//        var $navbar = $(".navbar"),
//            y_pos = $navbar.offset().top,
//            height = $navbar.height();
//
//        $(document).scroll(function() {
//            var scrollTop = $(this).scrollTop();
//
//            if (scrollTop > y_pos + height) {
//                $navbar.addClass("navbar-fixed").animate({
//                    top: 0
//                });
//            } else if (scrollTop <= y_pos) {
//                $navbar.removeClass("navbar-fixed").clearQueue().animate({
//                    top: "-48px"
//                }, 0);
//            }
//        });
//
//    })(jQuery, undefined);
//    $(function() {
//      $('.skitter-large').skitter({
//          fullscreen: true,
//          navigation: true,
//          dots: true,
//      });
//    });
    
    

    //up
//    $(window).scroll(function() {
//        if ($(this).scrollTop() >= 800){
//            $('.up').fadeIn(500)
//        } else {
//            $('.up').fadeOut(500)
//        }
//    });
    
//    $('.up').click(function() {
//        $('html, body').animate({scrollTop: 0}, 800);
//    });
//    
    //Dynamic links
//    $('.navbar ul li a').click(function(){
//        $('html, body').animate({
//            scrollTop: $('#' + $(this).data('value')).offset().top
//        },1000);
//    });
    
    //slider bx
//    $('.bxslider').bxSlider({
//        mode: 'fade',
//        speed: 800,
//        auto: true,
//        captions: true,
//        autoControls: true,
//        stopAutoOnClick: true,
//        pager: true,
//      });
    
    
    //owl carousel (clients logo)
//    $('.owl-carousel').owlCarousel({
//        autoplay:true,
//        loop:true,
//        dots: true,
//        nav: true,
//        margin: 0,
//        responsive:{
//            0:{items:1},
//            600:{items:2},
//            1000:{items:4}
//            },
//        center:true,
//        slideBy:2,
//        autoplayTimeout:5000,
//      });
//    
//    $('.owl-prev, .owl-next').html('');
//    
    //trigger wow
    new WOW().init();
    
//    $('.homeSlider .frame').click(function() {
//        $('html, body').animate({scrollTop: $('.latest').offset().top})
//    });
    
    //equality whole height of main_slider by window 
//    $('.main_slider, .main_slider .carousel-inner, .main_slider .carousel-inner .one, .main_slider .carousel-inner .two, .main_slider .carousel-inner .three, .main_slider .carousel-inner .four').height($(window).height()-80);
//    $(window).resize(function(){
//        $('.main_slider, .main_slider .carousel-inner, .main_slider .carousel-inner .one, .main_slider .carousel-inner .two, .main_slider .carousel-inner .three, .main_slider .carousel-inner .four').height($(window).height()-80);
//    });
});