document.addEventListener("DOMContentLoaded", () => {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (product) {
    const updateProductDetails = () => {
      document.querySelector(".item-img img").src = product.src;
      document.querySelector(".price").textContent = product.price;
      document.querySelector(".item-name").textContent = product.title;
      document.querySelector(".item-sub-name").textContent = product.title;
      document.querySelector(".buy-button .price").textContent = product.price;
      document.querySelector(".sell-button .price").textContent = product.price;

      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const bookmarkImg = document.querySelector(".save-wish-list img");

      if (wishlist.some((item) => item.title === product.title)) {
        bookmarkImg.src = "../images/assets/bookmark on.svg";
      } else {
        bookmarkImg.src = "../images/assets/bookmark.svg";
      }

      document
        .querySelector(".save-wish-list")
        .addEventListener("click", () => toggleWishlist(product, bookmarkImg));
    };

    const toggleWishlist = (product, img) => {
      if (img.src.includes("bookmark.svg")) {
        img.src = "../images/assets/bookmark on.svg";
        addToWishlist(product);
      } else {
        img.src = "../images/assets/bookmark.svg";
        removeFromWishlist(product);
      }
    };

    const addToWishlist = (product) => {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    const removeFromWishlist = (product) => {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist = wishlist.filter((item) => item.title !== product.title);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    updateProductDetails();
  }
});
