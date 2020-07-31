const galleryPopup = document.querySelector('.gallery-popup');
if (galleryPopup) {
    function toggleGallery(e) {
        document.body.classList.toggle('gallery-popup-opened');
        const imageNum = e.target.dataset.imageCount;
        if (imageNum && sliderTNSGallery) {
            sliderTNSGallery.goTo(imageNum);
        }
    }

    
    const popupClose = document.querySelector('.gallery-popup_close');
    if (popupClose) {
        popupClose.addEventListener('click', toggleGallery);
    }

    var sliderImages = document.querySelectorAll('.event .slider_image, .slider__accordion .slider_image, .slider_image-wrapper');
    if (sliderImages) {
        for (let i = 0; i < sliderImages.length; i++) {
            const image = sliderImages[i];
            image.addEventListener('click', toggleGallery);
        }
    }
}