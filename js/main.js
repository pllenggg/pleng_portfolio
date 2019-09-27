$(document).ready(() => {

const pictureCounts = $('#container img').length;
const scrollResolution = 200;


const animatedPhotos = function () {
    let currentScrollPosition = window.pageYOffset;
    let imageIndex = Math.round(currentScrollPosition/scrollResolution);

        if (imageIndex >= pictureCounts) {
            imageIndex = pictureCounts - 1; // Select last image
        }

    $("#container img").hide();
    $("#container img").eq(imageIndex).show();
}

animatedPhotos();

$(window).bind('scroll', function() {
    animatedPhotos();
});
})
