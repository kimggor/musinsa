document.addEventListener("DOMContentLoaded", () => {
  const btnTop = document.querySelector(".btn_top");
  const searchBtn = document.getElementById("searchBtn");
  const searchOverlay = document.getElementById("search-overlay");
  const searchInput = document.getElementById("search");
  const searchDelete = document.querySelector(".search_delete");
  const closeOverlayBtn = document.querySelector(".close-overlay");

  const closeSearch = () => {
    document.body.classList.remove("overlay-visible");
    if (searchOverlay) searchOverlay.classList.add("hidden");
  };

  const clearSearch = () => {
    if (searchInput) searchInput.value = "";
    document.querySelector("main").style.display = "block";
    if (searchDelete) searchDelete.style.display = "block";
    document.querySelector(".recommend").style.display = "block";
    document.querySelector(".ranking").style.display = "block";
    document.querySelector(".collabo").style.display = "block";
  };

  if (btnTop) {
    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      document.body.classList.add("overlay-visible");
      if (searchOverlay) searchOverlay.classList.remove("hidden");
    });
  }

  if (searchDelete) {
    searchDelete.addEventListener("click", clearSearch);
  }

  if (closeOverlayBtn) {
    closeOverlayBtn.addEventListener("click", closeSearch);
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      if (this.value.length > 0) {
        document.querySelector("main").style.display = "none";
        if (searchDelete) searchDelete.style.display = "flex";
      } else {
        document.querySelector("main").style.display = "block";
        if (searchDelete) searchDelete.style.display = "none";
      }
    });
  }
});
