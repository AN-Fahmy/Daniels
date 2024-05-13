$(document).ready(function(){
    /* Scroll Navbar Add Backgorund */
    $(window).scroll(function(){
        scrollDown(),scrollUp()
    })

    const root_theme = document.querySelector(':root');
    function scrollDown(){
        if(document.documentElement.scrollTop > 520){
            $("nav").css({
                "position" :"fixed",
                "top": "0",
                "background-color" : "#fff"
            })
            $("nav .navbar-brand").css("color","#000");
            $("nav .navbar-nav .nav-item a").css("color","#000");
            root_theme.style.setProperty('--active-color', '#000'); 
            $("nav .navbar-toggler span i").css("color", "#000");
            $("#about .about-info .prog .web").css({
                "width" : "95%",
                "opacity" : "1"
            });
            $("#about .about-info .prog .brand").css({
                "width" : "80%",
                "opacity" : "1"
            });
            $("#about .about-info .prog .develop").css({
                "width" : "90%",
                "opacity" : "1"
            });
        } else{
            $("nav").css({
                "position" :"absolute",
                "top": "10px",
                "background-color" : "transparent"
            })
            $("nav .navbar-brand").css("color","#fff");
            $("nav .navbar-nav .nav-item a").css("color","#fff");
            root_theme.style.setProperty('--active-color', '#fff'); 
            $("nav .navbar-toggler span i").css("color", "#fff");

        }
    }
    
    /* Show And Hide Scroll Up */
    function scrollUp(){
        if(document.documentElement.scrollTop > 400){
            $(".scroll-up").css("display","block");
        } else{
            $(".scroll-up").css("display","none");
        }
    };

    /* Go Up With ScrollUp Icon */
    $(".scroll-up").click(function(){
        document.documentElement.scrollTop = 0;
    });
    /* Add And Remove Class ACtive */
    let links = document.querySelectorAll("nav .navbar-collapse .navbar-nav li");

    $(links).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    /* Type Js Home Section */
    var typed = new Typed('#element', {
        strings: ['Designer','Larry Daniels' , 'Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });

    /* Go About Section When Click Icon */
    $($(".home .home-info .down-home")).click(function(){
        window.scrollTo("0","520");
    })

    /* Show And Hide Portfolio Models */
    $("#portfolio figure figcaption .open").click(function(){
        $(".demo").css({
            "display": "flex",
        });
    });

    $(".demo .exit i").click(function(){
        $(".demo").fadeOut()
    });

    $("#owl-demo").owlCarousel({
        slideSpeed : 300,
        autoPlay:true,
        paginationSpeed : 400,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });

    /*############### Filter By Jquery ################*/
    /* Add And Remove Class Active From Portfolio Button */
    // $(".portfolio .shuffle li").click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    /* Fliter Portfolio Models */
    // $(".portfolio .shuffle .all").click(function(){
    //     $(".portfolio .brand-filter").show(500),
    //     $(".portfolio .graphic-filter").show(500),
    //     $(".portfolio .design-filter").show(500)
    // });

    // $(".portfolio .shuffle .brand-click-filter").click(function(){
    //     $(".portfolio .graphic-filter").hide(500),
    //     $(".portfolio .design-filter").hide(500),
    //     $(".portfolio .brand-filter").show(500)
    // });

    // $(".portfolio .shuffle .graphic-click-filter").click(function(){
    //     $(".portfolio .brand-filter").hide(500),
    //     $(".portfolio .design-filter").hide(500),
    //     $(".portfolio .graphic-filter").show(500)
    // });

    // $(".portfolio .shuffle .design-click-filter").click(function(){
    //     $(".portfolio .brand-filter").hide(500),
    //     $(".portfolio .graphic-filter").hide(500),
    //     $(".portfolio .design-filter").show(500)
    // });


    /* Swiper Testimonials */
    function myPlugin({ swiper, extendParams, on }) {
        extendParams({
            debugger: false,
        });

        on('init', () => {
            if (!swiper.params.debugger) return;
            console.log('init');
        });
        on('click', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('click');
        });
        on('tap', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('tap');
        });
        on('doubleTap', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('doubleTap');
        });
        on('sliderMove', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('sliderMove');
        });
        on('slideChange', () => {
            if (!swiper.params.debugger) return;
            console.log(
            'slideChange',
            swiper.previousIndex,
            '->',
            swiper.activeIndex
        );
        });
        on('slideChangeTransitionStart', () => {
            if (!swiper.params.debugger) return;
            console.log('slideChangeTransitionStart');
        });
        on('slideChangeTransitionEnd', () => {
            if (!swiper.params.debugger) return;
            console.log('slideChangeTransitionEnd');
        });
        on('transitionStart', () => {
            if (!swiper.params.debugger) return;
            console.log('transitionStart');
        });
        on('transitionEnd', () => {
            if (!swiper.params.debugger) return;
            console.log('transitionEnd');
        });
        on('fromEdge', () => {
    ;
            console.log('fromEdge');
        });
        on('reachBeginning', () => {
            if (!swiper.params.debugger) return;
            console.log('reachBeginning');
        });
        on('reachEnd', () => {
            if (!swiper.params.debugger) return;
            console.log('reachEnd');
        });
    }

    // Init Swiper
    var swiper = new Swiper('.swiper', {
        // Install Plugin To Swiper
        modules: [myPlugin],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Enable debugger
        debugger: true,
    });

    /* Counter Portofolio Data */
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 10000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };


    $('.counter .count-box .count-1').countTo({
        from: 0,
        to: 850,
        speed: 2000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });

    $('.counter .count-box .count-2').countTo({
        from: 0,
        to: 230,
        speed: 2000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });

    $('.counter .count-box .count-3').countTo({
        from: 0,
        to: 9450,
        speed: 2000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });

    $('.counter .count-box .count-4').countTo({
        from: 0,
        to: 780,
        speed: 2000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
    
})