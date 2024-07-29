document.addEventListener("DOMContentLoaded", () => {
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const cardWrap = document.querySelector(".recommend-card-wrap");
  const dots = document.querySelectorAll(".page .dot");
  const totalPages = 2;
  let currentPage = 0;

  const updateCardPosition = () => {
    const translateX = -currentPage * 15;
    cardWrap.style.transform = `translateX(${translateX}%)`;
  };

  const updatePaginationControls = () => {
    prevPageBtn.classList.toggle("disabled", currentPage === 0);
    nextPageBtn.classList.toggle("disabled", currentPage === totalPages - 1);
    dots.forEach((dot, index) =>
      dot.classList.toggle("active", index === currentPage),
    );
  };

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCardPosition();
      updatePaginationControls();
    }
  });

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateCardPosition();
      updatePaginationControls();
    }
  });

  const btnTop = document.querySelector(".btn_top");
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
  });

  updatePaginationControls();
});
