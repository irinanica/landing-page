(function () {
  $(".home-btn").click(function () {
    $('html,body').animate({
      scrollTop: $(".section-1").offset().top
    }, 'slow');
  });

  $(".title-btn").click(function () {
    $('html,body').animate({
      scrollTop: $(".section-1").offset().top
    }, 'slow');
  });

  $(".button-section-1").click(function () {
    $('html,body').animate({
      scrollTop: $(".whole-section-2").offset().top
    }, 'slow');
  });

  $(".about-btn").click(function () {
    $('html,body').animate({
      scrollTop: $(".whole-section-2").offset().top
    }, 'slow');
  });

  $(".services-btn").click(function () {
    $('html,body').animate({
      scrollTop: $(".section-3").offset().top
    }, 'slow');
  });

  $(".testimonials-btn").click(function () {
    $('html,body').animate({
      scrollTop: $(".section-4").offset().top
    }, 'slow');
  });

  $(".contact-btn").click(function () {
    $('html,body').animate({
      scrollTop: $(".contact").offset().top
    }, 'slow');
  });


  // Service Cards
  var services = [
    { icon: "beach_access", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "free_breakfast", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "hot_tub", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "beach_access", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "free_breakfast", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "hot_tub", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "beach_access", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "free_breakfast", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "hot_tub", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "beach_access", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "free_breakfast", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: "hot_tub", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]

  var createCard = function (icon, description) {
    return '<div class="custom-card">' +
      '<i class="material-icons">' + icon + '</i>' +
      '<p class="paragraph">' + description + '</p>' +
      '</div>';
  }

  var i = 0;
  services.forEach(function (service) {
    var cardHtml = createCard(service.icon, service.description);

    $('#services').append(cardHtml);
    console.log('done with service' + service + i);
    i++;
  })

  console.log(createCard("a", "b"));
  console.log($('.section-3'))
})();


