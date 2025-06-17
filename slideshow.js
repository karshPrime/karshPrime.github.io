// slideshow.js

document.addEventListener( "DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll( ".pasage-slideshow" );

    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll( ".slide" );
        let current = 0;

        setInterval( () => {
            slides[current].classList.remove( "active" );
            current = ( current + 1 ) % slides.length;
            slides[current].classList.add( "active" );
        }, 2500);
    });
});

