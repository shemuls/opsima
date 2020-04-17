jQuery(document).ready(function( $ ) {


    


      

    // For header scrool top
    $(window).scroll(function(){


        if ( $(this).scrollTop() > 150 ) {
            $('.header').addClass('bgt-header');
        } else {
            $('.header').removeClass('bgt-header');
        }


    }).trigger('scroll');




    // For smoth scroll
	var scrollLink = $('.scroll');
    	scrollLink.click(function(e) {
    		e.preventDefault();
    		$('body,html').animate({
    			scrollTop: $(this.hash).offset().top
    		}, 1000);
    	});



    //banner parallax
    // $('.banner').parallax('50%', .4);

        //For counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        var myVar;

        function myFunction() {
            myVar = setTimeout(showPage, 3000);
        }

        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("myDiv").style.display = "block";
        };


        // For baner rimple
        $('.banner').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.06,
        });

        //for preloader
        $("#loaderr").fadeOut(2000);
        $("#load").delay(3000).fadeOut("slow");



        //for owl-carousel
        $('.op-team .team-member').owlCarousel({

            items           : 4,
            autoplay        : true,
            loop            : true,
            nav             : true,
            responsive      : true,
            navText         : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplayTimeout     : 3500,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true,
                },
                600:{
                    items:3,
                    nav:true,
                    loop:true,
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:true
                }
            }

        });

        $('.op-about .our-studio .studio-slider').owlCarousel({
            items           : 1,
            autoplay        : true,
            loop            : true,
            nav             : false,
            autoplayTimeout : 2000,
        });

        $('.op-presentation .presentation-text').owlCarousel({
            items           : 1,
            autoplay        : true,
            loop            : true,
            nav             : false,
            autoplayTimeout : 2000,
        });

        $('.op-work .work-protfolio').owlCarousel({
            items           : 5,
            autoplay        : true,
            loop            : true,
            nav             : false,
            autoplayTimeout : 4000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:false,
                    loop:true
                }
            }
            
        });

        $('.op-twittr-comment .tw-com-con').owlCarousel({
            items           : 1,
            autoplay        : true,
            loop            : true,
            nav             : true,
            navText         : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            dots            : false,
            autoplayTimeout : 3000,
            responsiveClass : true,
        });






    });