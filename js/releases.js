document.addEventListener("DOMContentLoaded", () => {
  const productsOne = [
    {
      src: "/images/releases_img/솔로몬신발.webp",
      title: "Salomon x Sandy Liang Speedcross 3 Ribbon",
      brand: "Salomon",
      price: "558,000원",
      deals: "거래 6",
    },
    {
      src: "/images/releases_img/킴스후르츠.webp",
      title: "Kims Fruits Melon",
      brand: "Kims Fruits",
      price: "27,000원",
      deals: "거래 6",
      discount: "10%",
      tags: ["단독", "적립", "무료배송"],
    },
    {
      src: "/images/releases_img/아식스.webp",
      title: "Asics x The Museum Visior Gel-Kayano 14 Clay Grey Glacier Grey",
      brand: "Asics",
      price: "264,000원",
      deals: "거래 23",
    },
    {
      src: "/images/releases_img/섬네일키링.webp",
      title: "SJF x Soft Thumbnail Bell,Rabbit",
      brand: "Soft Thumbnail",
      price: "38,000원",
      deals: "거래 6",
      discount: "10%",
      tags: ["단독", "적립", "무료배송"],
    },
    {
      src: "/images/releases_img/아이앱.webp",
      title: "IAB Studio Established T-Shirt White Black",
      brand: "IAB Studio",
      price: "93,000원",
      deals: "거래 6",
    },
    {
      src: "/images/releases_img/img-1.webp",
      title: "[예약 배송] Suade Washed Backpack Black",
      brand: "Suade",
      price: "63,200원",
      deals: "거래 0",
      discount: "20%",
      tags: ["쿠폰", "적립", "무료배송"],
    },
    {
      src: "/images/releases_img/img-2.webp",
      title: "Adidas x Sporty & Rich Samba OG Cloud White Night Indigo",
      brand: "Adidas",
      price: "163,000원",
      deals: "거래 18",
      tags: ["즉시 구매가"],
    },
    {
      src: "/images/releases_img/img-3.webp",
      title: "Crayon Shin Chan Bochan Peach Mood Light",
      brand: "Crayon Shin Chan",
      price: "12,800원",
      deals: "거래 0",
      tags: ["적립", "무료배송"],
    },
    {
      src: "/images/releases_img/img-4.webp",
      title: "Asics x Above The Clouds GT-2160 Cream Chocolate Brown",
      brand: "Asics",
      price: "226,000원",
      deals: "거래 4",
      tags: ["즉시 구매가"],
    },
    {
      src: "/images/releases_img/img-5.webp",
      title: "Hommless Vintage Cap Navy",
      brand: "Hommless",
      price: "69,000원",
      deals: "거래 0",
      tags: ["적립"],
    },
  ];
  const productsTwo = [
    {
      src: "/images/releases_img/에어팟.webp",
      title:
        "Apple Airpods Pro 2nd Gen with MagSafe Charging Case USB C Type (Korea)",
      brand: "Apple",
      price: "268,000원",
      deals: "거래 3.5만",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/나이키갈색.webp",
      title: "Nike Air Force 1 '07 WB Flax",
      brand: "Nike",
      price: "141,000원",
      deals: "거래 19.5만",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/조던.webp",
      title: "(W) Jordan 1 x Travis Scott Retro Low OG SP Canary",
      brand: "Jordan",
      price: "299,000원",
      deals: "거래 8,747",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/나이키흰색.webp",
      title: "Nike Air Force 1 '07 Low White",
      brand: "Nike",
      price: "112,000원",
      deals: "거래 49.2만",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/아식스.webp",
      title: "Asics Gel-Kayano 14 Cream Black",
      brand: "Asics",
      price: "202,000원",
      deals: "거래 2.5만",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/img-6.webp",
      title: "Nike Air Zoom Alphafly Next% 3 Blueprint",
      brand: "Nike",
      price: "390,000원",
      deals: "거래 1,368",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/img-7.webp",
      title: "Nike ZoomX Vaporfly Next% 3 White Grey",
      brand: "Nike",
      price: "197,000원",
      deals: "거래 1.8만",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/img-8.webp",
      title: "Adidas Samba OG Cloud White",
      brand: "Adidas",
      price: "119,000원",
      deals: "거래 10.4만",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/img-9.webp",
      title: "Birkenstock Boston Soft Footbed Taupe - Regular",
      brand: "Birkenstock",
      price: "211,000원",
      deals: "거래 1.5만",
      fastDelivery: true,
    },
    {
      src: "/images/releases_img/img-10.webp",
      title: "New Balance 993 Made in USA Grey - D Standard",
      brand: "New Balance",
      price: "288,000원",
      deals: "거래 7.1만",
      fastDelivery: true,
    },
  ];
  const productsThree = [
    {
      src: "/images/releases_img/img-11.webp",
      title: "Vans x BAPE Old Skool TB LX Black",
      brand: "Vans",
      price: "300,000원",
      deals: "거래 6",
      fastDelivery: false,
    },
    {
      src: "/images/releases_img/img-12.webp",
      title: "Suade Fire Suade Tee Pigment Black",
      brand: "Suade",
      price: "33,600원",
      deals: "거래 -",
      fastDelivery: false,
      tags: ["쿠폰", "적립", "무료배송"],
    },
    {
      src: "/images/releases_img/img-13.webp",
      title: "Nike NSW Tech Fleece Full Zip Hoodie Black - Asia",
      brand: "Nike",
      price: "130,000원",
      deals: "거래 1,700",
      fastDelivery: false,
    },
    {
      src: "/images/releases_img/img-14.webp",
      title:
        "Adidas Manchester United 2024/25 Away Jersey Night Indigo - KR Sizing",
      brand: "Adidas",
      price: "-",
      deals: "거래 -",
      fastDelivery: false,
    },
    {
      src: "/images/releases_img/img-15.webp",
      title: "Artwork Museum Horn T-Shirt Charcoal",
      brand: "Artwork Museum",
      price: "71,100원",
      deals: "거래 -",
      fastDelivery: false,
      tags: ["적립"],
    },
    {
      src: "/images/releases_img/img-16.webp",
      title: "Stussy Beach Roots Pigment Dyed T-Shirt Brown",
      brand: "Stussy",
      price: "94,000원",
      deals: "거래 23",
      fastDelivery: false,
    },
    {
      src: "/images/releases_img/img-17.webp",
      title: "Human Made Graphic T-Shirt #16 Black",
      brand: "Human Made",
      price: "137,000원",
      deals: "거래 4",
      fastDelivery: false,
    },
    {
      src: "/images/releases_img/img-18.webp",
      title: "Nike Mercurial Vapor 16 Pro TF Glacier Blue Blue Orbit",
      brand: "Nike",
      price: "127,000원",
      deals: "거래 -",
      fastDelivery: false,
    },
    {
      src: "/images/releases_img/img-19.webp",
      title: "TNGT Over-fit Tarry Stripe Boucle MT M Navy",
      brand: "TNGT",
      price: "79,000원",
      deals: "거래 -",
      fastDelivery: false,
      tags: ["적립"],
    },
    {
      src: "/images/releases_img/img-20.webp",
      title: "Stussy Grid T-Shirt Black",
      brand: "Stussy",
      price: "81,000원",
      deals: "거래 7",
      fastDelivery: false,
    },
  ];
  const itemsPerPage = 5;

  const initializeSection = (
    sectionId,
    productListId,
    moreDetailId,
    products,
  ) => {
    let currentIndex = 0;
    const productList = document.getElementById(productListId);
    const moreDetailBtn = document.getElementById(moreDetailId);

    const loadProducts = () => {
      const nextIndex = currentIndex + itemsPerPage;
      const productsToLoad = products.slice(currentIndex, nextIndex);

      productsToLoad.forEach((product) => {
        const productItem = createProductItem(product);
        productList.appendChild(productItem);
      });

      currentIndex = nextIndex;
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

      itemInner.appendChild(thumbBox);
      itemInner.appendChild(infoBox);

      productItem.appendChild(itemInner);

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

      const statusValue = document.createElement("div");
      statusValue.classList.add("status-value");
      statusValue.textContent = product.deals;

      const wishBtn = createWishButton(product);

      thumbBox.appendChild(productDiv);
      thumbBox.appendChild(statusValue);
      thumbBox.appendChild(wishBtn);

      return thumbBox;
    };

    const createWishButton = (product) => {
      const wishBtn = document.createElement("div");
      wishBtn.classList.add("wish-btn");

      const wishImg = document.createElement("img");
      wishImg.src = "./images/assets/bookmark.svg";
      wishImg.alt = "Wish";
      wishImg.style.width = "24px";

      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (wishlist.some((item) => item.title === product.title)) {
        wishImg.src = "./images/assets/bookmark on.svg";
      }

      wishBtn.appendChild(wishImg);

      wishBtn.addEventListener("click", (e) =>
        handleWishButtonClick(e, wishImg, product),
      );

      return wishBtn;
    };

    const handleWishButtonClick = (e, wishImg, product) => {
      e.preventDefault();
      e.stopPropagation();

      if (wishImg.src.includes("bookmark.svg")) {
        wishImg.src = "./images/assets/bookmark on.svg";
        addToWishlist(product);
      } else {
        wishImg.src = "./images/assets/bookmark.svg";
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

      if (product.tags || product.fastDelivery) {
        const tagsDiv = createTagsDiv(product.tags, product.fastDelivery);
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

    const createTagsDiv = (tags, fastDelivery) => {
      const tagsDiv = document.createElement("div");
      tagsDiv.classList.add("tags");

      const tagsItemDiv = document.createElement("div");
      tagsItemDiv.classList.add("tags-item");

      if (tags) {
        tags.forEach((tag) => {
          const tagSpan = document.createElement("span");
          tagSpan.textContent = tag;
          tagsItemDiv.appendChild(tagSpan);
        });
      }

      if (fastDelivery) {
        const fastDeliverySpan = createFastDeliveryDiv();
        tagsItemDiv.appendChild(fastDeliverySpan);
      }

      tagsDiv.appendChild(tagsItemDiv);

      return tagsDiv;
    };

    const createFastDeliveryDiv = () => {
      const fastDeliveryDiv = document.createElement("div");
      fastDeliveryDiv.classList.add("fast-delivery");

      const fastDeliveryImg = document.createElement("img");
      fastDeliveryImg.src = "/images/assets/pressicon.png"; // 빠른배송 이미지 경로
      fastDeliveryImg.alt = "빠른배송";
      fastDeliveryImg.style.width = "12px"; // 필요한 경우 크기 조정

      fastDeliveryDiv.appendChild(fastDeliveryImg);
      fastDeliveryDiv.appendChild(document.createTextNode("빠른배송"));

      return fastDeliveryDiv;
    };

    moreDetailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      loadProducts();
    });

    loadProducts();
  };

  // 첫 번째 섹션 초기화
  initializeSection(
    "newReleasesSection1",
    "productList1",
    "moreDetail1",
    productsOne,
  );

  // 두 번째 섹션 초기화
  initializeSection(
    "newReleasesSection2",
    "productList2",
    "moreDetail2",
    productsTwo,
  );
  initializeSection(
    "newReleasesSection3",
    "productList3",
    "moreDetail3",
    productsThree,
  );
});
