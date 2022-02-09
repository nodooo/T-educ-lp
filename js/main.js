"use strict";
jQuery(document).ready(function($) {
    /*------------------------------
        counter section activation
    -------------------------------*/
    var counternumber = $('.count-num');
    counternumber.counterUp({
        delay: 20,
        time: 3000
    });
    /*--------------------
        wow js init
    --------------------*/
    new WOW().init();
    /*----------------------------
        portfolio menu active
    ----------------------------*/
    var portfolioMenu = '.portfolio-menu li';
    $(document).on('click', portfolioMenu, function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    /*----------------------------------
        magnific popup activation
    ----------------------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });
    $('.video-play-btn,.play-video-btn').magnificPopup({
        type: 'video'
    });
    /*-------------------------------
        back to top
    ------------------------------*/
    $(document).on('click', '.back-to-top', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });


    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function() {
        /*---------------------------
            back to top show / hide
        ---------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        /*--------------------------
         sticky menu activation
        ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;

    });

    $(window).on('load', function() {
        /*-----------------------------
            preloader
        -----------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };

    // Get the navbar
    var sticky = document.getElementById("myHeader");

    // Get the offset position of the navbar
    var sticky = myHeader.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            myHeader.classList.add("sticky")
        } else {
            myHeader.classList.remove("sticky");
        }
    }


}(jQuery));


// from here nodaris code
function myFunction(x) {
    if (x.matches) { // If media query matches
        $(".row.col-lg-12.margin-top-60 .col-md-6 img.headphones-first").css("display", "none");
        $(".Ptime").css("display", "none");
        $(".download-area-wrapper.white .Gtime").css("display", "none");
        $(".Ptime1").css("display", "inherit");
        // $(".row.col-lg-12.margin-top-60 .col-md-6:first-child").append(
        //     '<p class="Ptime">00:<span id="countdown5" class="timer"></span> time left to join!</p> <h5 class="Gtime"></h5>'
        // );
        // $(".download-area-wrapper.white .insert-img").append(
        //     '<img src="images/blue-images/headphones_video.gif" width="52%">');

        $(".for-mobile").css("display", "none");
        $(".btn-desktop").css("display", "none");
        $(".btn-mobile").css("display", "inherit");
        $(".container.img-article ").append(
            '<img src="images/mobile.svg" class="margin-top-40 margin-bottom-30 main-mobile">');

        $("img.desktop-gif1").css("display", "none");
        $("img.mobile-gif1").css("display", "inherit");

        $(".line").css("top", "1%");
        $(".img-article .btn").css("top", "1%");
        $(".line").css("width", "95%");

        $('.owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

    } else {
        $(".for-mobile").css("display", "inherit");
        $(".row.col-lg-12.margin-top-60 .col-md-6 img.headphones-first").css("display", "inherit");
        $(".Ptime").css("display", "inherit");
        $(".download-area-wrapper.white .Gtime").css("display", "inherit");
        $(".Ptime1").css("display", "none");
        $(".row.col-lg-12.margin-top-60 .col-md-6:first-child .Ptime").remove()
        $(".row.col-lg-12.margin-top-60 .col-md-6:first-child h5").remove()
        $(".download-area-wrapper.white .insert-img img").remove()
        $(".main-mobile").remove();
        $(".container.img-article img").css("display", "inherit");

        $(".btn-desktop").css("display", "inherit");
        $(".btn-mobile").css("display", "none");

        $("img.desktop-gif1").css("display", "inherit");
        $("img.mobile-gif1").css("display", "none");

        $(".line").css("top", "-5%");
        $(".line").css("width", "97%");
        $(".img-article .btn").css("top", "-5%");


        $('.owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        })
    }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


$(document).ready(function () {

    // timer function
    var timerData = [];

    function secondPassed(row) {
        var seconds = timerData[row].remaining;
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }

        $("#countdown" + row).html(minutes + ":" + remainingSeconds);
        if (seconds === 0) {
            clearInterval(timerData[row].timerId);
            $("#countdown" + row).html("00:00");
            $("#add_" + row).show();
            $("#1add_" + row).show();
            $("#added_" + row).hide();
            $("#block_" + row).hide();
            $("#sale_" + row).show();
            $("#1sale_" + row).show();
            $.ajax({
                type: "GET",
                url: 'unblock.php',
                data: {
                    id: row
                },
                success: function (data) {
                    $("#cart-item").html(data);
                    $("#amount-top").html($("#total").val());
                    $("#item-total").html($("#carttotal").val());
                }
            });
        } else {
            seconds--;
        }
        timerData[row].remaining = seconds;
    }

    function timer(row, sec) {
        timerData[row] = {
            remaining: sec,
            timerId: setInterval(function () {
                secondPassed(row);
            }, 1000)
        };
        var sec = timerData[row].timerId;
    }
    /*
    <? php
    foreach($_SESSION["cart_item"] as $item) {
        $old = strtotime(date("m/d/Y h:i:s ", time()));
        $new = strtotime($item['time']);
        $time = $new - $old;
        echo "timer({$item['id']}, $time);\r\n";
    }
    ?>
    */
    timer(1, 732);
    timer(2, 732);
    timer(3, 732);
    timer(4, 732);
    timer(5, 732);
    timer(6, 732);
    timer(7, 732);
    // timer function end

    // before video loads get image
    $("video.videobg").css("display", "inherit");
    $("img.video-img").css("display", "none");
    // before video loads get image end
    setTimeout(function () {
        $("#myModal").modal('show');
    }, 5000);

    $(".join-now").click(function (e) {
        $("#myModal").modal('show');
    });


    $('#more-text').hide();
    $('#read-less').hide();

    $('#read-more').click(function () {
        $('#read-more').hide()
        $('#read-less').show();
        $('#more-text').show();
    })

    $('#read-less').click(function () {
        $('#read-less').hide()
        $('#read-more').show();
        $('#more-text').hide();
    })
});
var video = document.getElementById('myVideo');
video.addEventListener('loadeddata', function () {
    // Video is loaded and can be played
    // before video loads get image
    $("video.videobg").css("display", "inherit");
    $("img.video-img").css("display", "none");
    // before video loads get image end
}, false);


// arrow images for slider
$(".owl-nav .owl-prev").html("");
$(".owl-nav .owl-next").html("");
$(".owl-nav .owl-prev").append('<img src="images/arrow.svg" class="arrow-prev owl-prev">');
$(".owl-nav .owl-next").append('<img src="images/arrow.svg" class="arrow-next owl-next">');
// arrow images for slider end




$(".boxed-btn ripple.gd-bg-2").click(function (e) {

    // Remove any old one
    $(".ripple").remove();

    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();

    // Add the element
    $(this).prepend("<span class='ripple'></span>");


    // Make it round!
    if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;


    // Add the ripples CSS and start the animation
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");
});








// error for input fields 
$(function () {
    // error for name input on regular form
    $(document).click(function (e) {
        if (!$(e.target).hasClass("input.first-fullName")) {
            var content = $(".first-fullName").val();
            var words = content.trim().split(/\s+/);
            var num_words = words.length;
            if ($("input.first-fullName").val().length !== 0 && $("input.first-fullName").val().length < 2) {
                $(".first-name-error").css("display", "inherit");
                $(".first-name-error").css("margin", "0");
                $(".first-fullName").css("margin-bottom", "0");
                $(".first-name-error2").css("display", "none");
            } else {
                $(".first-name-error").css("display", "none");
                $(".first-fullName").css("margin-bottom", "30px");
            }
        }
        if ($(e.target).hasClass("first-submit-btn")) {
            if ($("input.first-fullName").val().length === 0) {
                $(".first-name-error2").css("display", "inherit");
                $(".first-name-error2").css("margin", "0");
            } else {
                $(".first-name-error2").css("display", "none");
            }
        }
    });
    // error for email input on regular form
    $(document).click(function (e) {
        if (!$(e.target).hasClass("input.first-email")) {
            var mailformat3 = /[.]/;
            var mailformat2 = /[@]/;

            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if ($("input.first-email").val().length !== 0 && !$("input.first-email").val().match(mailformat2) && !$("input.first-email").val().match(mailformat3)) {
                $(".first-email-error2").css("display", "none");
                $(".first-email-error").css("display", "inherit");
                $(".first-email-error").css("margin", "0");
                $(".first-email").css("margin-bottom", "0");
            } else {
                $(".first-email-error").css("display", "none");
                $(".first-email").css("margin-bottom", "30px");
            }
        }
        if ($(e.target).hasClass("first-submit-btn")) {
            if ($("input.first-email").val().length === 0) {
                $(".first-email-error2").css("display", "inherit");
                $(".first-email-error2").css("margin", "0");
            } else {
                $(".first-email-error2").css("display", "none");
            }
        }
    });
    // error on name input on pop up form
    $(document).click(function (e) {
        if (!$(e.target).hasClass("input.second-fullName")) {
            var content = $(".second-fullName").val();
            var words = content.trim().split(/\s+/);
            var num_words = words.length;
            if ($("input.second-fullName").val().length !== 0 && $("input.second-fullName").val().length < 2) {
                $(".second-name-error2").css("display", "none");
                $(".second-name-error").css("display", "inherit");
                $(".second-name-error").css("margin", "0");
                $(".second-fullName").css("margin-bottom", "0");
            } else {
                $(".second-name-error").css("display", "none");
                $(".second-fullName").css("margin-bottom", "30px");
            }
        }
        if ($(e.target).hasClass("second-submit-btn")) {
            if ($("input.second-fullName").val().length === 0) {
                $(".second-name-error2").css("display", "inherit");
                $(".second-name-error2").css("margin", "0");
            } else {
                $(".second-name-error2").css("display", "none");
            }
        }
    });
    // error on email input on pop up form
    $(document).click(function (e) {
        if (!$(e.target).hasClass("input.second-email")) {
            var mailformat3 = /[.]/;
            var mailformat2 = /[@]/;

            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if ($("input.second-email").val().length !== 0 && !$("input.second-email").val().match(mailformat2) && !$("input.second-email").val().match(mailformat3)) {
                $(".second-email-error2").css("display", "none");
                $(".second-email-error").css("display", "inherit");
                $(".second-email-error").css("margin", "0");
                $(".second-email").css("margin-bottom", "0");
            } else {
                $(".second-email-error").css("display", "none");
                $(".second-email").css("margin-bottom", "30px");
            }
        }
        if ($(e.target).hasClass("second-submit-btn")) {
            if ($("input.second-email").val().length === 0) {
                $(".second-email-error2").css("display", "inherit");
                $(".second-email-error2").css("margin", "0");
            } else {
                $(".second-email-error2").css("display", "none");
            }
        }

    });

    $('#phone').keyup(function () {
        var phone = this.value;


        if (phone.length >= 7) {
            $(".first-phone-error").css("display", "none");
        }

        if (phone.length === 0) {
            $(".first-phone-error").css("display", "none");
            $(".first-phone-error2").css("display", "none");
        }

    });
    $('#phone2').keyup(function () {
        var phone = this.value;


        if (phone.length >= 7) {
            $(".second-phone-error").css("display", "none");
        }

        if (phone.length === 0) {
            $(".second-phone-error").css("display", "none");
            $(".second-phone-error2").css("display", "none");
        }

    });

    $(".first-submit-btn").click(function (e) {
        if ($("#phone").val().length === 0) {
            $(".first-phone-error2").css("display", "inherit");
            $(".first-phone-error2").css("margin", "0");
            e.preventDefault();
        }

        if ($("#name").val().length === 0) {
            e.preventDefault();
        }

        if ($("#email").val().length === 0) {
            e.preventDefault();
        }
    });

    $(".second-submit-btn").click(function (e) {
        if ($("#phone2").val().length === 0) {
            $(".second-phone-error2").css("display", "inherit");
            $(".second-phone-error2").css("margin", "0");
            e.preventDefault();
        }

        if ($("#name2").val().length === 0) {
            e.preventDefault();
        }

        if ($("#email2").val().length === 0) {
            e.preventDefault();
        }
    });

    $("#phone").keypress(function (e) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }

    })
    $("#phone2").keypress(function (e) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }

    })

    $(document).click(function () {

        if ($("#phone").val().length === 0) {
            $(".first-phone-error").css("display", "none");
        } else if ($("#phone").val().length < 7) {
            $(".first-phone-error").css("display", "inherit");
            $(".first-phone-error").css("margin", "0");
            $(".first-phone-error2").css("display", "none");
        }

        if ($("#phone").val().length) {
            $(".first-phone-error2").css("display", "none");
        }


    });
    $(document).click(function () {

        if ($("#phone2").val().length === 0) {
            $(".second-phone-error").css("display", "none");
        } else if ($("#phone2").val().length < 7) {
            $(".second-phone-error").css("display", "inherit");
            $(".second-phone-error").css("margin", "0");
            $(".second-phone-error2").css("display", "none");
        }

        if ($("#phone2").val().length) {
            $(".second-phone-error2").css("display", "none");
        }


    });




});



var input = document.querySelector("#phone")
window.intlTelInput(input, {
    dropdownContainer: document.body,
    initialCountry: "auto",
    separateDialCode: true,
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io/?token=f2b9c646d70f28", function () { }, "jsonp").always(
            function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
    },
    utilsScript: "js/utils.js"
});

var input2 = document.querySelector("#phone2")
window.intlTelInput(input2, {
    dropdownContainer: document.body,
    initialCountry: "auto",
    separateDialCode: true,
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io/?token=f2b9c646d70f28", function () { }, "jsonp").always(
            function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
    },
    utilsScript: "js/utils.js"
});



function myFunction2(y) {
    if (y.matches) { // If media query matches
        $(".second-slider img.arrow-prev.owl-prev").click(function () {
            $(".second-slider .carousel-inner").css("overflow", "hidden");
            // if ($(".carousel-item").hasClass("active")) {
            $(".second-slider img.fb-icon").css("visibility", "hidden");
            $(".second-slider img.rounded-circle.img-fluid").css("visibility", "hidden");
            $(".second-slider h4.card-title").css("visibility", "hidden");
            $(".second-slider p.card-text").css("visibility", "hidden");
            setTimeout(function () {
                $(".second-slider .carousel-inner").css("overflow", "visible");
                // $(".second-slider img.fb-icon").css("transition", "all 1s ease-in-out");
                // $(".second-slider img.rounded-circle.img-fluid").css("transition", "all 1s ease-in-out");
                // $(".second-slider h4.card-title").css("transition", "all 1s ease-in-out");
                // $(".second-slider p.card-text").css("transition", "all 1s ease-in-out");

                $(".second-slider img.fb-icon").css("visibility", "visible");
                $(".second-slider img.rounded-circle.img-fluid").css("visibility", "visible");
                $(".second-slider h4.card-title").css("visibility", "visible");
                $(".second-slider p.card-text").css("visibility", "visible");
            }, 650);
            // }
        });
        $(".second-slider img.arrow-next.owl-next").click(function () {
            $(".second-slider .carousel-inner").css("overflow", "hidden");
            $(".second-slider img.fb-icon").css("visibility", "hidden");
            $(".second-slider img.rounded-circle.img-fluid").css("visibility", "hidden");
            $(".second-slider h4.card-title").css("visibility", "hidden");
            $(".second-slider p.card-text").css("visibility", "hidden");
            setTimeout(function () {
                $(".second-slider .carousel-inner").css("overflow", "visible");
                $(".second-slider img.fb-icon").css("visibility", "visible");
                $(".second-slider img.rounded-circle.img-fluid").css("visibility", "visible");
                $(".second-slider h4.card-title").css("visibility", "visible");
                $(".second-slider p.card-text").css("visibility", "visible");
            }, 650);
        });
    } else {

        $(".second-slider .carousel-inner").css("overflow", "hidden");


        $(".second-slider img.fb-icon").css("visibility", "visible");
        $(".second-slider img.rounded-circle.img-fluid").css("visibility", "visible");
        $(".second-slider h4.card-title").css("visibility", "visible");
        $(".second-slider p.card-text").css("visibility", "visible");
    }
}

var y = window.matchMedia("(max-width: 991px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2)


function myAlertBottom() {
    $(".myAlert-bottom").show();
    setTimeout(function () {
        $(".myAlert-bottom").hide();
    }, 6000);
}