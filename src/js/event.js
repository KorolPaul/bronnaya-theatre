/* Slider */
var slider = document.querySelector('#slider');
if (slider) {
    const currentSlideEl = slider.querySelector('.slider_counter');

    const setcounter = function (info) {
        if (currentSlideEl) {
            currentSlideEl.innerText = `${info.displayIndex}/${info.pages}`;
        }
    }

    const sliderTNS = tns({
        autoplay: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        animateDelay: 3000,
        container: slider.querySelector('.slider_track'),
        items: 1,
        nav: true,
        controls: false,
        mouseDrag: true,
        loop: true,
        autoWidth: true,
        preventScrollOnTouch: true,
        responsive: {
            768: {
                items: 6.3,
                gutter: 16,
                nav: false,
            },
            1260: {
                gutter: 32,
            },
            1920: {
                gutter: 46,
            }
        },
        onInit: setcounter
    });

    if (currentSlideEl) {
        sliderTNS.events.on('transitionEnd', setcounter);
        sliderTNS.events.on('transitionEnd', setcounter);
    }
}

var sliderGallery = document.querySelector('#slider-gallery');
if (sliderGallery) {
    const currentSlideEl = sliderGallery.querySelector('.slider_counter');

    const setcounter = function (info) {
        currentSlideEl.innerText = `${info.displayIndex}/${info.slideCount}`;
    }

    const sliderTNS = tns({
        autoplay: false,
        animateDelay: 3000,
        container: sliderGallery.querySelector('.slider_track'),
        items: 1,
        gutter: 0,
        nav: false,
        controls: true,
        mouseDrag: true,
        loop: false,
        controlsText: ['', ''],
        preventScrollOnTouch: true,
        responsive: {
            768: {
                //items: 2,
                gutter: 56,
                autoWidth: true,
                center: true,
            },
            1260: {
                gutter: 120,
            }
        },
        onInit: setcounter
    });

    if (currentSlideEl) {
        sliderTNS.events.on('transitionEnd', setcounter);
        sliderTNS.events.on('transitionEnd', setcounter);
    }
}


/* Event page */
const eventMoreInfo = document.querySelector('.event_info-more');
if (eventMoreInfo) {
    const hidedElements = document.querySelectorAll('.event_hided-info');

    eventMoreInfo.addEventListener('click', function(e) {
        e.preventDefault();

        for (let i = 0; i < hidedElements.length; i++) {
            hidedElements[i].classList.toggle('event_hided-info');
        }
        e.target.classList.toggle('opened');
    })
}

const ticketsMoreEl = document.querySelector('.tickets_more');
if (ticketsMoreEl) {
    ticketsMoreEl.addEventListener('click', function (e) {
        e.preventDefault();

        const hidedElements = document.querySelectorAll('.tickets-row__hidden');
        for (let i = 0; i < hidedElements.length; i++) {
            
            hidedElements[i].classList.remove('tickets-row__hidden');
        }
        e.target.style.display = 'none';
    })
}

/* buy fixed button */
const fixedButton = document.querySelector('.event_fixed-button-wrapper');
if (fixedButton) {
    function showButton() {
        fixedButton.classList.add('visible');
    }
    function hideButton() {
        fixedButton.classList.remove('visible');
    }
    
    let timer = setTimeout(() => {
        showButton();
    }, 3000);

    document.addEventListener("scroll", function (e) {
        clearTimeout(timer);
        if (isScrollUp()) {
            showButton();
        } else {
            hideButton();
            timer = setTimeout(() => {
                showButton();
            }, 3000);
        }
    });
}
