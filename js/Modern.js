$(function () {
    'use strike';

    $('[data-toggle="tooltip"]').tooltip();

    //Calculate Body Padding Top Depent on Navbar Height
    $('body').css('paddingTop', $('.tabs').innerHeight() - 50);

    // smoothly scroll To Element
    // $('.tabs a').click(function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $('#' + $(this).data('scroll')).offset().top
    //     }, 1000);
    //     $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    // });

    $(window).resize(function () { });

    if ($(window).width() <= 320) {
        // is mobile device
    }
    else if ($(window).width() <= 412) {
        $(".tabs").on("click", "a", function (e) {
            e.preventDefault();
            $('.tabs a').removeClass("active");
            $(this).addClass('active');
            var activeWidth = $(this).innerWidth();
            var itemPos = $(this).position();
            $(".selector").css({
                "top": itemPos.top + "px"
            });
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('scroll')).offset().top
            }, 1000);
            isItScroll = 0;
        });
    }
    else {
        $(".tabs").on("click", "a", function (e) {
            e.preventDefault();
            $('.tabs a').removeClass("active");
            $(this).addClass('active');
            var activeWidth = $(this).innerWidth();
            var itemPos = $(this).position();
            $(".selector").css({
                "left": itemPos.left + "px",
                "width": activeWidth + "px"
            });
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('scroll')).offset().top
            }, 1000);
            isItScroll = 0;
        });
        menuCursor();
        if (isItScroll == 1) {
            $(window).scroll(function () {
                scrollToElement();
            });
        }
    }

    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() == 0)
          $("#MenuTitle").fadeOut(200);
          else
          $("#MenuTitle").fadeIn(200);
    });
});

var AutoTextinterval;

$(".profileImg").click(function () {
    $(".custome-bg-transparent").fadeIn();

    $(this).addClass("profileImg-center");

    // Start Auto Write
    var text = "Hi friends , I wanna say big THANKS to all who like my codes , answer my questions , help me program my codes , and again realy big thanks to: @burey ,@antony syv , @maz ,@risiraj deori ,  and @Siddhart Saraf!!";

    var word = text.split("");
    var i = 0;
    AutoTextinterval = setInterval(writeText, 112); // The speed of text writing (160)
    function writeText() {
        var p = document.getElementById("AutoText");
        if (i < word.length) {
            p.innerHTML += word[i];
            i++;
        } else {
            clearInterval(AutoTextinterval);
        }
    }
    // End Auto Write
});

$(".custome-bg-transparent").click(function () {
    $(".profileImg").removeClass("profileImg-center");
    clearInterval(AutoTextinterval);
    $("#AutoText").text("");
    $(this).fadeOut();
});


var isItScroll = 1;
$(".TalkToMe").click(function () {
    $(".whatsappPopup").slideToggle(2000);
});

// Menu Cursor Style
function menuCursor() {
    var tabs = $('.tabs');
    var items = $('.tabs').find('a').length;
    var selector = $(".tabs").find(".selector");
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();
    $(".selector").css({
        "left": activeItem.position.left + "px",
        "width": activeWidth + "px"
    });
}

//Sync Navbar Links With Sections
function scrollToElement() {
    $('.cd-section').each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 100) {//- 100
            var blockID = $(this).attr('id');
            $('.tabs a').removeClass('active');
            $('.tabs a[data-scroll="' + blockID + '"]').addClass('active');
            $(".selector").css({
                "width": $('.tabs a[data-scroll="' + blockID + '"]').css("width"),
                "left": $('.tabs a[data-scroll="' + blockID + '"]').data("left")
            });
        }
    });
}

$(".header-menu").click(function () {
    $(".menu-content").slideToggle();
    $(".svg-inline--fa.fa-chevron-down.fa-w-14.custome-chevron-down").toggleClass("flib-back");
});

isItScroll = 1;

