$(document).ready(function(){
    'use strict';

    //Toggle Theme Btn
    $("#toggleThemeBtn").click(function(){    
        bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        if(bgColor === "rgb(255, 255, 255)" || bgColor === "rgba(0, 0, 0, 0)"){
            $('body').addClass("dark-mode");
            
            $('.btn').css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"   
            });

            $('.contact-detail a span').css({
                "color": "rgb(255,255,255)"
            });

            $(".navbar-container span.material-icons").html("&#xe518;").css({ "color": "#ffffff"});
            
            $(this).css({
                "backgroundColor": "rgb(12, 11, 11)",
                "color": "rgb(255, 255, 255)"
            });

            $('.menu-btn, .sidenav').css({
                "backgroundColor": "rgb(7, 7, 7)"
            });

            $('.bar').css({
                "backgroundColor": "rgb(255, 255, 255)"
            });

            $('.contact-detail svg').css({
                "fill": "rgb(255, 255, 255)"
            });
             
            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("lightBg").addClass("darkBg");
            }; 

        }else{
            $('body').removeClass("dark-mode")

            $('.contact-detail svg').css({
                "fill": "rgb(0, 0, 0)"
            });

            $('.btn').css({
                "backgroundColor": "rgb(0, 0, 0)",
                "color": "rgb(255, 255, 255)"   
            });

            $(".navbar-container span.material-icons").html(`&#xe51c;`).css({ "color": "rgb(0, 0, 0)"});
            
            $(this).css({
                "backgroundColor": "rgb(255, 255, 255)",
                "color": "rgb(0, 0, 0)"
            });

            $('.menu-btn, .sidenav').css({
                "backgroundColor": "rgb(255, 255, 255)"
            });

            $(".contact-detail a span").css({
                'color': "rgb(0, 0, 0)"
            });

            $('.bar').css({
                "backgroundColor": "rgb(0, 0, 0)"
            });

            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("darkBg").addClass("lightBg");    
            }
        }
    });

    //Toggle Menu Btn
    $(".menu-btn").click(function(){
        $(".bar1").toggleClass("bar1_transform");
        $(".bar3").toggleClass("bar3_transform");
        $(".bar2").toggleClass("bar2_transform");
        $(".sidenav").slideToggle(400);
    });

    $(".testimonial-carousel").on("init", function(e, slick){
        console.log("Slick initialised")
    });
    
    //Carousel with slick
    $('.testimonial-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        prevArrow: '<button class="slide-arrow prev-arrow"><span class="material-icons">west</span></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><span class="material-icons">east</span></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 868,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $(window).on("scroll", function(){
        const scrollHeight = Math.floor($(window).scrollTop());

        if(scrollHeight === 0 || scrollHeight < 60){
            $(".navbar-container").removeClass("lightBg");
        }else{
            $(".navbar-container").addClass("lightBg");
        };

        $("section").each(function(){
            if($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
                const currentSectionId = "#" + $(this).attr("id");

                $(".nav-link").each(function(i, elm){
                    $(elm).removeClass('active');

                    if($(elm).attr("href") === currentSectionId){
                        $(elm).addClass("active");
                    }
                });
            }
        });
    });

    //submit handler
    $('#contact_form').submit(function(e){
        e.preventDefault();
        alert("Submitted successfully!")
    });

    //initialize aos
    AOS.init();
});