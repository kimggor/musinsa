document.addEventListener("DOMContentLoaded", function () {
  function showNotice(event) {
    event.preventDefault();
    event.stopPropagation();
    let notice = document.querySelector(".notice");
    let noticeWhole = document.querySelector(".notice-whole");
    notice.style.display = "block";
    noticeWhole.style.display = "block";
    noticeWhole.style.backgroundColor = "rgba(34, 34, 34, .5)";
    noticeWhole.style.position = "fixed";
    noticeWhole.style.top = "0";
    noticeWhole.style.right = "0";
    noticeWhole.style.left = "0";
    noticeWhole.style.bottom = "0";
    noticeWhole.style.height = "100%";
    noticeWhole.style.width = "100%";
    noticeWhole.style.border = "none";
    noticeWhole.style.zIndex = "10";
  }

  function closeNotice(event) {
    event.preventDefault();
    event.stopPropagation();
    let notice = document.querySelector(".notice");
    let noticeWhole = document.querySelector(".notice-whole");
    notice.style.display = "none";
    noticeWhole.style.display = "none";
    noticeWhole.style.zIndex = "-2";
  }

  document.getElementById("notification").addEventListener("click", showNotice);
  document
    .querySelector(".notice-close button")
    .addEventListener("click", closeNotice);
  document
    .querySelector(".notice-whole")
    .addEventListener("click", closeNotice);
  document.querySelector(".notice").addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
