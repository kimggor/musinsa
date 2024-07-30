document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const totalImages = 13;
  const colors = [
    "#5A5A5A",
    "#CEE9F0",
    "#52555B",
    "#E7E6EB",
    "#000000",
    "#8291A5",
    "#F0C493",
    "#A3CCE3",
    "#834132",
    "#C1A389",
    "#9274CC",
    "#B3D2BC",
    "#9CB596",
  ];

  const createSwiperSlide = (i) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.style.backgroundColor = colors[i - 1];

    const img = document.createElement("img");
    img.src = `/images/swipper_img/img-${i}.webp`;
    img.alt = `Image ${i}`;

    swiperSlide.appendChild(img);
    return swiperSlide;
  };

  for (let i = 1; i <= totalImages; i++) {
    const swiperSlide = createSwiperSlide(i);
    swiperWrapper.appendChild(swiperSlide);
  }

  const updateNavigationStyles = (activeIndex) => {
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    const darkIndex = [1, 3, 11];
    const isDark = darkIndex.includes(activeIndex);
    const arrowColor = isDark ? "black" : "white";

    prevButton.style.backgroundImage = `url('../images/assets/left-arrow-${arrowColor}.svg')`;
    nextButton.style.backgroundImage = `url('../images/assets/right-arrow-${arrowColor}.svg')`;

    bullets.forEach((bullet, index) => {
      bullet.style.opacity = index === activeIndex ? "1" : "0.2";
      bullet.style.backgroundColor = isDark ? "#000" : "#fff";
    });
  };

  const swiper = new Swiper(".mySwiper1", {
    autoplay: {
      delay: 3800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        updateNavigationStyles(swiper.activeIndex);
      },
    },
  });
});
