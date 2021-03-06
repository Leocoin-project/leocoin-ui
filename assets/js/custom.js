/*------------------------------------------------------------------
 # [General]
 ------------------------------------------------------------------*/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

/*------------------------------------------------------------------
 # [Mobile Menu Toggle]
 ------------------------------------------------------------------*/

$('.toggle-switch').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
});


/*------------------------------------------------------------------
 # [Submenu]
 ------------------------------------------------------------------*/

$('.menu .top-menu-entry').click(function (e) {

    var allMenus = $('.menu .top-menu-entry').parent().find('.sub-menu');

    allMenus.slideUp();
    if ($(this).hasClass('has-children')) {
        var currentMenu = $(this).parent().find('.sub-menu');
        if (!currentMenu.is(':visible')) {
            currentMenu.slideToggle();
        }

    } else {
        closeMobileMenu();
    }
    $('.menu .menu-entry').parent().removeClass('selected');
    $('.menu .top-menu-entry').parent().removeClass('selected');
    $(this).parent().addClass('selected');

});

// $('.menu .top-menu-entry').click(function (e) {
//
//     var allMenus = $('.menu .top-menu-entry').parent().find('.sub-menu');
//     var first;
//     allMenus.slideUp();
//     if ($(this).hasClass('has-children')) {
//         var currentMenu = $(this).parent().find('.sub-menu');
//         if (!currentMenu.is(':visible')) {
//             currentMenu.slideToggle();
//
//             if ($(this).hasClass('chatroom') || $(this).hasClass('backup')) {
//                 //do nothing
//             }
//             else if ($(this).hasClass('wallet')) {
//                 first = currentMenu.find('.transactions')[0];
//             } else {
//                 first = currentMenu.find('li a')[0];
//             }
//
//         }
//
//     } else {
//         closeMobileMenu();
//     }
//     $('.menu .menu-entry').parent().removeClass('selected');
//     $('.menu .top-menu-entry').parent().removeClass('selected');
//     $(this).parent().addClass('selected');
//     // $(first).click();
//
//
// });

$('.menu .menu-entry').click(function (e) {

    // $('.menu .top-menu-entry').parent().removeClass('selected');
    $('.menu .menu-entry').parent().removeClass('selected');
    $(this).parent().addClass('selected');
    closeMobileMenu();
});

/*------------------------------------------------------------------
 # [Toggle Switch]
 ------------------------------------------------------------------*/

function openMobileMenu() {

    $('.mobile-menu-toggle').addClass('on');
    $('.aside').slideDown();
    $('.mobile-glass').show();
    $(".container").animate({scrollTop: 0}, "fast");
    // var scroll=function(){
    //     $('.container').scrollTop(0);
    // };
    // setTimeout(scroll, 0);
}
function closeMobileMenu() {

    if (isMobile()) {
        $('.mobile-menu-toggle').removeClass('on');
        $('.aside').slideUp();
        $('.mobile-glass').hide();
    }
}

$('.mobile-menu-toggle').click(function () {
    if (!$(this).hasClass('on')) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
});


function optionMenuMain(tab) {
    if(!$('.sub-menu.options').is(':visible')){
        optionMenu(tab);
    }
}
function optionMenu(tab) {
    $('#options .article-title').hide();
    $('.tab-content.options').hide();
    $("#" + tab).show();
    $('.' + tab).show();
}
function isMobile() {
    return $(window).width() < 1024;
}
/*------------------------------------------------------------------
 # [Sort]
 ------------------------------------------------------------------*/

$('.sort').click(function () {
    if (!$(this).hasClass('active')) {
        $('.sort').removeClass('active');
        $(this).addClass('active');
    } else {
        $(this).toggleClass('asc');
    }
});


/*------------------------------------------------------------------
 # [Tabs]
 ------------------------------------------------------------------*/

$('.tab').click(function () {
    if (!$(this).hasClass('selected')) {
        $('.tab').removeClass('selected');
        $('.tab-content').hide();
        $(this).addClass('selected');
        var tabIndex = ($(this).index());
        var closest = $(this).closest('.section');
        var selectedTab = closest.find('.tab-content').eq(tabIndex);
        selectedTab.show();
        $("html,body").animate({scrollTop: 0}, "slow");
    }
});


/*------------------------------------------------------------------
 # [Help - Modal]
 ------------------------------------------------------------------*/

$('a[data-toggle="modal"]').click(function () {
    var modal = $(this).attr('data-target');
    $(modal).show();
});

$('.modal-close').click(function () {
    $(this).parent().parent().hide();

});
/*------------------------------------------------------------------
 # [Window.resize]
 ------------------------------------------------------------------*/

$(window).scroll(function () {
    //windowWidth = window.innerWidth;
});


/*------------------------------------------------------------------
 # [Document.ready]
 ------------------------------------------------------------------*/

$(document).ready(function () {
    //var headerHeight = $('.header').height();
});
/*------------------------------------------------------------------
 # Hash Event
 ------------------------------------------------------------------*/
function toWalletManagement(menuItem) {
    // var m=$($(menuItem).parent);
    // if(!m.hasClass('selected')) {
    //     $('#walletmanagement-advanced').hide();
    //     $('#key-options').hide();
    //     $('#wizards').show();
    //     m.removeClass('selected');
    //     $('.menu-entry .wallet-management').parent.setClass('selected');
    //     gotoWizard('new-key-wizard', 0, true);
    // }
}

(function ($) {

    function changePage(link) {
        var toPageHash = link.attr('href');
        var toPage = $(toPageHash);
        if (toPage.length == 1 && toPage[0].tagName.toLowerCase() == "article") {

            $("article").hide();
            toPage.show();
            var find = toPage.find("a[data-toggle='tab']");
            if (find) {
                $(find[0]).click();
            }
            $(document).resize();
            if ($('a[href="' + toPageHash + '"]').hasClass('menu-entry')) {
                $('a[href="' + toPageHash + '"]').parent().addClass('selected');
            }
            // var scroll=function(){
            //     $('.container').scrollTop(0);
            // };
            // setTimeout(scroll, 0);

        }
    }

    // Menu icon onclick
    $(".menu a").on('click', function () {
        changePage($(this));
    });
    $(".article .title-widgets a").on('click', function () {
        changePage($(this));
    });
    $('#overview').show();

})(jQuery);
