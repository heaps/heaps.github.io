// GLightbox version packaged with eduport not working
// replaced with version from github
// https://github.com/biati-digital/glightbox

// version from github in assets/vendor/glightbox-new/
// css loaded in init_start.js
// js  loaded in init_end.js

// instantiate glightbox
// simple use - uses class glightbox on element
var lightbox = GLightbox();

// notification of glightbox opening
lightbox.on('open', (target) => {
    console.log('lightbox opened');
});

// images with descriptions
var lightboxDescription = GLightbox({
    selector: '.glightbox2'
});

// video gallery
var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});

// iframes and inline elements
var lightboxInlineIframe = GLightbox({
    selector: '.glightbox4'
});
