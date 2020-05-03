/* Menu toggle */
const menuElement = document.querySelector('.menu');
const menuToggleElement = document.querySelector('.menu-toggle');

menuToggleElement.addEventListener('click', function(e) {
    e.preventDefault();
    menuToggleElement.classList.toggle('opened');
    menuElement.classList.toggle('opened');
});

/* Mobile header */
document.addEventListener('scroll' , function(e) {
    const FIXED_NAVBAR_POSITION = 80;
    const position = window.scrollY;
    const fixedModifier = 'fixed-header'
    if (position > FIXED_NAVBAR_POSITION) {
        document.body.classList.add(fixedModifier);
    } else {
        document.body.classList.remove(fixedModifier);
    }
});

/* Slider */
var carousels = document.querySelectorAll('.carousel');
if (carousels.length) {
    for (let i = 0; i < carousels.length; i++) {
        const carousel = carousels[i];

        var glide = new Glide(carousel, {
            type: 'carousel',
            perView: 9,
            gap: 74,
            breakpoints: {
                1920: {
                    perView: 8
                },
                1366: {
                    gap: 54
                },
                1260: {
                    gap: 38
                },
                768: {
                    perView: 3,
                    gap: 30
                }
            }
        });
        glide.mount();
        
    }
}

/* Phone number pattern */
const phoneElements = document.querySelectorAll('input[type="tel"]');
for (let i = 0; i < phoneElements.length; i++) {
    var dateMask = IMask(phoneElements[i],
    {
        mask: '-0000-0000',
        lazy: false
    });
}
