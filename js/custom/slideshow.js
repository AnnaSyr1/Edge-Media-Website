/*!
 * Custom Javascript for the Image Slideshow
 */

/* Open the overlay in full screen */
function openSlideshow(index) {
	var elem = document.querySelector('.carousel');
	var flkty = new Flickity(elem, {
		watchCSS: true
	});

	// Documentation: https://flickity.metafizzy.co/api.html#select
	flkty.select(index - 1, false, true);

	// Change visibility of the overlay.
	document.getElementById("overlay").style.visibility = "visible";

	// Lazy load the gallery images as they appear.
	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".carousel-cell-image"
	});
};

/* Close the overlay on small devices */
function closeSlideshow() {
	document.getElementById("overlay").style.visibility = "hidden";
}
