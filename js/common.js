$('.input-phone').mask('+7 (999) 999-99-99');

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grabCursor: true,
  pagination: {
    el: ".bar",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-dots",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    780: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1140: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".slider-equipment", {
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".slider-equipment", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".bar",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".swiper-specialist", {
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-specialist", {
  slidesPerView: 2,
  grabCursor: true,
  pagination: {
    el: ".bar",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-specialist", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-dots",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    780: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1140: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});


var swiper = new Swiper(".apointment-cards-swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
	 },
 
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 });


document.addEventListener("DOMContentLoaded", function () {
  const settingsOpen = document.getElementById("settings-open");
  const settingsMenu = document.getElementById("settings-menu-popup-bg");
  const settingsClose = document.getElementById("settings-close");

  settingsOpen.addEventListener("click", function () {
    settingsMenu.classList.add("open");
  });
  settingsClose.addEventListener("click", function () {
    settingsMenu.classList.remove("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const settingsOpen = document.getElementById("open-personal-data-popup");
  const settingsMenu = document.getElementById("personal-data-popup-bg");
  const settingsClose = document.getElementById("btn-exit-personal-data");

  settingsOpen.addEventListener("click", function () {
    settingsMenu.classList.add("open");
  });
  settingsClose.addEventListener("click", function () {
    settingsMenu.classList.remove("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const settingsOpen = document.getElementById("open-adres-popup");
  const settingsMenu = document.getElementById("adres-popup-bg");
  const settingsClose = document.getElementById("btn-exit-adres-data");

  settingsOpen.addEventListener("click", function () {
    settingsMenu.classList.add("open");
  });
  settingsClose.addEventListener("click", function () {
    settingsMenu.classList.remove("open");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const settingsOpen = document.getElementById("open-document-popup");
  const settingsMenu = document.getElementById("document-data-popup-bg");
  const settingsClose = document.getElementById("btn-exit-document-data");

  settingsOpen.addEventListener("click", function () {
    settingsMenu.classList.add("open");
  });
  settingsClose.addEventListener("click", function () {
    settingsMenu.classList.remove("open");
  });
});

const showMore = document.querySelector(".show-more");
const productsLength = document.querySelectorAll(".products-grid__item").length;
let items = 9;

showMore.addEventListener("click", () => {
  items += 3;
  const array = Array.from(document.querySelector(".products-grid").children);
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === productsLength) {
    showMore.style.display = "none";
  }
});


