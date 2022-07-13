$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('navback');
    } else {
        $('nav').removeClass('navback');
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#button').fadeIn();
    } else {
        $('#button').fadeOut();
    }
});
$(document).ready(function() {
    $("#button").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

