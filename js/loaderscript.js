$(document).ready(function() {
    $('body').addClass('spin').addClass('opacity');
    setTimeout(function(){
        $('body').removeClass('spin').removeClass('opacity');
    },3000);
});