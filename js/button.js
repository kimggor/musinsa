document.addEventListener("DOMContentLoaded", function () {
  const slideArr = Array.from(
    document.querySelectorAll(".trending_keyword_slide"),
  );
  const prevButton = document.querySelector(".prev_button");
  const nextButton = document.querySelector(".next_button");
  const camera = document.querySelector(".flicking-camera");
  const container = document.querySelector(".search_trend_container");
  const pagination = document.querySelectorAll(".pagination");

  // 이동할 슬라이드 인덱스 설정
  const slideIndices = [0, 9, 10];
  let currentIndex = 0; // 현재 인덱스 추적
  updateSlideWidth();
  function updateSlideWidth() {
    const containerWidth = container.getBoundingClientRect().width;
    const slideWidth = containerWidth / 9; // 화면에 9개의 슬라이드가 보이도록 설정
    slideArr.forEach((slide) => {
      slide.style.width = `${slideWidth}px`;
    });

    updateCameraPosition(); // 슬라이드 크기 변경 후 카메라 위치 업데이트
  }

  function updateCameraPosition() {
    let aaa = 20;
    const slideWidth = slideArr[0].getBoundingClientRect().width;
    camera.style.transform = `translateX(-${slideWidth * slideIndices[currentIndex] + aaa}px)`;

    pagination.forEach((pag) => pag.classList.remove("active"));

    // Add 'active' class to the current pagination element
    if (currentIndex >= 0 && currentIndex < pagination.length) {
      pagination[currentIndex].classList.add("active");
    } else {
      console.error("currentIndex is out of bounds:", currentIndex);
    }
  }

  nextButton.addEventListener("click", function () {
    if (currentIndex < slideIndices.length - 1) {
      currentIndex++;
      updateCameraPosition();
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCameraPosition();
    }
  });

  document.querySelectorAll(".pagination").forEach((pag, index) => {
    pag.addEventListener("click", () => {
      currentIndex = index;
      updateCameraPosition();
    });
  });

  window.addEventListener("resize", function () {
    updateSlideWidth(); // 창 크기 조정 시 카메라 위치 업데이트
  });

  // 초기 카메라 위치 설정
  updateCameraPosition();

  // 필터

  function toggleDivs() {
    // Get all checkboxes with the class 'toggleCheckbox'
    const checkboxes = document.querySelectorAll(".toggleCheckbox");

    // For each checkbox
    checkboxes.forEach((checkbox) => {
      // Get the class to toggle from the data attribute
      const targetClass = checkbox.getAttribute("data-class");
      const targetDivs = document.querySelectorAll(`.${targetClass}`);

      if (checkbox.checked) {
        // If checkbox is checked, show the associated divs
        targetDivs.forEach((div) => div.classList.remove("hidden"));
      } else {
        // If checkbox is unchecked, hide the associated divs
        targetDivs.forEach((div) => div.classList.add("hidden"));
      }
    });

    // Check if any checkbox is checked
    const anyChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked,
    );

    if (!anyChecked) {
      // If no checkboxes are checked, show all divs
      document
        .querySelectorAll(".search_result_item")
        .forEach((div) => div.classList.remove("hidden"));
    }
  }

  // Add event listeners to all checkboxes
  document.querySelectorAll(".toggleCheckbox").forEach((checkbox) => {
    checkbox.addEventListener("change", toggleDivs);
  });

  // Initialize divs state on page load
  toggleDivs();
});
