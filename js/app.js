$(document).ready(function () {
    $('.nav-link').click(function () {
        let target = $(this).attr('href')
        $('.choose-character .tab-pane').removeClass('active show')
        $('.choose-character ' + target).addClass('active show');
    })

    $('.btn_hide_menu').click(function () {
        $('.menu_right').removeClass('animate__slideInRight')
        $('.menu_right').addClass('animate__slideOutRight')
        $('.btn_show_menu').show()
    })
    $('.btn_show_menu').click(function () {
        $('.menu_right').removeClass('animate__slideOutRight')
        $('.menu_right').addClass('animate__slideInRight')
        $('.btn_show_menu').hide()
    })

    $("#btn_go_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    })
})