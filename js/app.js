$(document).foundation();

var resize = function(){
    if ($(window).width() < 644) {
        $('.off-canvas-wrap').removeClass('move-right');
        $('.left-off-canvas-toggle').show();
        $('.schlicht-content').css('padding-left', '0');
    } else {
        $('.off-canvas-wrap').addClass('move-right');
        $('.left-off-canvas-toggle').hide();
        $('.schlicht-content').css('padding-left', '3.5rem');
    }  
}

$(window).resize(function() {
    resize();
});

resize();