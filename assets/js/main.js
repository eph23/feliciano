$('.hero-carousel').owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 0,
  nav: false,
  touchDrag: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
$('.carousel-testimonial').owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})
