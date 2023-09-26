$(document).ready(function(){
    var galleryImage = $('.main-banner-image').find('img').first();
    var images = [
        'images/wtasapp.png',
        'images/2.png',
        'images/3.png'
    ];

    var i = 0;
    setInterval(function() {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(750, function(){
            $(this).attr('src', images[i]);
            $(this).fadeIn(750);
        });
    }, 5000);
});

