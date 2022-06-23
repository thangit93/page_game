$(document).ready(function () {
    $('.nav-link').click(function () {
        let target = $(this).attr('href')
        $('.choose-character .tab-pane').removeClass('active show')
        $('.choose-character ' + target).addClass('active show');
    })
})