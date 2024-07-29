document.addEventListener("DOMContentLoaded", () => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistContainer = document.getElementById("wishlist");
  const itemCountSpan = document.getElementById("itemCount");
  const sortButton = document.getElementById("sortButton");
  let sortOrder = "asc";

  const renderWishlist = () => {
    wishlistContainer.innerHTML = "";
    wishlist.forEach((product) => {
      const productItem = createProductItem(product);
      wishlistContainer.appendChild(productItem);
    });
    updateItemCount();
  };

  const createProductItem = (product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const itemInner = document.createElement("a");
    itemInner.classList.add("item-inner");
    itemInner.href = "/pages/item_detail.html";
    itemInner.addEventListener("click", (e) => handleItemClick(e, product));

    const thumbBox = createThumbBox(product);
    const infoBox = createInfoBox(product);
    const actionsDiv = createActionsDiv(product);

    itemInner.appendChild(thumbBox);
    itemInner.appendChild(infoBox);
    productItem.appendChild(itemInner);
    productItem.appendChild(actionsDiv);

    return productItem;
  };

  const handleItemClick = (e, product) => {
    e.preventDefault();
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "/pages/item_detail.html";
  };

  const createThumbBox = (product) => {
    const thumbBox = document.createElement("div");
    thumbBox.classList.add("thumb-box");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.style.backgroundImage = `url(${product.src})`;

    thumbBox.appendChild(productDiv);

    return thumbBox;
  };

  const createInfoBox = (product) => {
    const infoBox = document.createElement("div");
    infoBox.classList.add("info-box");

    const brandDiv = document.createElement("div");
    brandDiv.classList.add("brand");

    const brandText = document.createElement("p");
    brandText.classList.add("brand-text");
    brandText.textContent = product.brand;
    brandDiv.appendChild(brandText);

    const nameP = document.createElement("p");
    nameP.classList.add("name");
    nameP.textContent = product.title;

    const priceDiv = createPriceDiv(product);

    infoBox.appendChild(brandDiv);
    infoBox.appendChild(nameP);

    if (product.tags) {
      const tagsDiv = createTagsDiv(product.tags);
      infoBox.appendChild(tagsDiv);
    }

    infoBox.appendChild(priceDiv);

    return infoBox;
  };

  const createPriceDiv = (product) => {
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");

    const amountDiv = document.createElement("div");
    amountDiv.classList.add("amount");

    if (product.discount) {
      const discountSpan = document.createElement("span");
      discountSpan.classList.add("discount");
      discountSpan.textContent = product.discount;
      amountDiv.appendChild(discountSpan);
    }

    const priceP = document.createElement("p");
    priceP.textContent = product.price;
    amountDiv.appendChild(priceP);

    const descDiv = document.createElement("div");
    descDiv.classList.add("desc");

    const descP = document.createElement("p");
    descP.textContent = "즉시 구매가";
    descDiv.appendChild(descP);

    priceDiv.appendChild(amountDiv);
    priceDiv.appendChild(descDiv);

    return priceDiv;
  };

  const createTagsDiv = (tags) => {
    const tagsDiv = document.createElement("div");
    tagsDiv.classList.add("tags");

    const tagsItemDiv = document.createElement("div");
    tagsItemDiv.classList.add("tags-item");

    tags.forEach((tag) => {
      const tagSpan = document.createElement("span");
      tagSpan.textContent = tag;
      tagsItemDiv.appendChild(tagSpan);
    });

    tagsDiv.appendChild(tagsItemDiv);

    return tagsDiv;
  };

  const createActionsDiv = (product) => {
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("item-actions");

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.textContent = "구매";

    const priceWrap = document.createElement("div");
    priceWrap.classList.add("priceWrap");

    const pricePElement = document.createElement("p");
    pricePElement.classList.add("item-price");
    pricePElement.textContent = product.price;

    const immediately = document.createElement("p");
    immediately.classList.add("immediately");
    immediately.textContent = "즉시구매가";

    const removeLink = document.createElement("a");
    removeLink.classList.add("remove-item");
    removeLink.href = "#";
    removeLink.textContent = "삭제";
    removeLink.addEventListener("click", (e) => handleRemoveClick(e, product));

    actionsDiv.appendChild(buyButton);
    buyButton.appendChild(priceWrap);
    priceWrap.appendChild(pricePElement);
    priceWrap.appendChild(immediately);
    actionsDiv.appendChild(removeLink);

    return actionsDiv;
  };

  const handleRemoveClick = (e, product) => {
    e.preventDefault();
    removeFromWishlist(product.title);
    renderWishlist();
  };

  const removeFromWishlist = (title) => {
    wishlist = wishlist.filter((item) => item.title !== title);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const updateItemCount = () => {
    itemCountSpan.textContent = `(${wishlist.length})`;
  };

  sortButton.addEventListener("click", () => {
    sortOrder = sortOrder === "asc" ? "desc" : "asc";
    wishlist.sort((a, b) =>
      sortOrder === "asc"
        ? parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
        : parseFloat(b.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(a.price.replace(/[^0-9.-]+/g, "")),
    );
    renderWishlist();
  });

  renderWishlist();
});
