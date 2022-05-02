$(document).ready(function(){
    $(".about-us__slider .owl-carousel").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        navText: ['',''],
        dots: false,
        autoplay: false,
        
        autoplayHoverPause:false,

        responsive:{
            
            0:{
                items: 1,
            }
        }
    });
    $(".products__slider .owl-carousel").owlCarousel({
        loop: false,
        margin: 26,
        nav: true,
        navText: ['',''],
        dots: false,
        autoplay: false,
        
        autoplayHoverPause:false,

        responsive:{
            
            0:{
                items: 1,
            },
            430:{
                items: 2,
            },
            619:{
                items: 3,
            },
            827:{
                items: 4,
            },
            
        }
    });


    //MODAL APPEAR
    var carouselOwl = $(".products__slider .owl-carousel")

    $('.product__btn__detailed').click((e)=> {
        //console.log(e)
        
        $('.modal').toggleClass("_modal-active")
        $('body').addClass("_lock")
        
    })
    $('.modal__btn__close').click((e)=> {
        //console.log(e)
        
        $('.modal').removeClass("_modal-active")
        $('body').removeClass("_lock")

        
    })
    

    //burger-body-lock
    $('.menu__btn').click((e)=> {
        //console.log(e)
        $('body').toggleClass("_lock")
    })

    //scroll-to-request
    $('._to-request').click(function(e) {
        $('.modal').removeClass("_modal-active")
        $('body').removeClass("_lock")
        $('#menu__toggle').prop('checked', false)
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.request').offset().top
            
        }, 500)
        
        e.preventDefault()
    })
    /* $('._to-request').click(function(e) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.request').offset().top
            
        }, 500)
        
        e.preventDefault()
    }) */



    //scrollTo from menu/footer

    $('li > .menu__link').click(function(event){
        onMenuLinkClick(event)
        
    })
    

    function onMenuLinkClick(event){
        const menuLink = event.target

        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = $(menuLink.dataset.goto).get(0)
            //console.log($(menuLink.dataset.goto).get(0))
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY /* - Math.round($('.header').outerHeight()) */
            //const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY /* - document.querySelector('header').offsetHeight */
            
            //console.log($('#menu__toggle').prop('check', false))

            $('body').removeClass('_lock')
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
        }

        
        $('#menu__toggle').prop('checked', false)
        event.preventDefault()
    }


  });