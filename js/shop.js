document.addEventListener("DOMContentLoaded", function () {
  const tabs = [
    "전체",
    "럭셔리",
    "상의",
    "신발",
    "아우터",
    "하의",
    "가방",
    "지갑",
    "시계",
    "패션잡화",
    "컬렉터블",
    "뷰티",
    "테크",
    "캠핑",
    "가구/리빙",
  ];
  const trendingKeywords = [
    { title: "슈프림", src: "/images/trend/trendimage0.webp" },
    { title: "스투시", src: "/images/trend/trendimage1.webp" },
    { title: "반팔 티셔츠", src: "/images/trend/trendimage2.webp" },
    { title: "블록코어룩", src: "/images/trend/trendimage3.webp" },
    { title: "HOT 그래픽", src: "/images/trend/trendimage4.webp" },
    { title: "아식스", src: "/images/trend/trendimage5.webp" },
    { title: "아디다스", src: "/images/trend/trendimage6.webp" },
    { title: "나이키", src: "/images/trend/trendimage7.webp" },
    { title: "반팔티 랭킹", src: "/images/trend/trendimage8.gif" },
    { title: "더 폰", src: "/images/trend/trendimage9.webp" },
    { title: "위시 랭킹", src: "/images/trend/trendimage10.webp" },
    { title: "반바지", src: "/images/trend/trendimage11.webp" },
    { title: "뉴발란스", src: "/images/trend/trendimage12.webp" },
    { title: "살로몬", src: "/images/trend/trendimage13.webp" },
    { title: "샌들/슬리퍼", src: "/images/trend/trendimage14.webp" },
    { title: "실시간 차트", src: "/images/trend/trendimage15.gif" },
    { title: "폴로랄프로렌", src: "/images/trend/trendimage16.webp" },
    { title: "18% 쿠폰", src: "/images/trend/trendimage17.webp" },
    { title: "KREAM카드", src: "/images/trend/trendimage18.webp" },
  ];
  const filters = [
    {
      title: "카테고리",
      options: [
        "상의",
        "신발",
        "아우터",
        "하의",
        "가방",
        "지갑",
        "시계",
        "패션잡화",
        "컬렉터블",
        "뷰티",
        "테크",
        "캠핑",
        "가구/리빙",
      ],
    },
    { title: "성별", options: ["남성", "여성", "공용"] },
    {
      title: "색상",
      options: [
        "빨강",
        "파랑",
        "검정",
        "하양",
        "노랑",
        "초록",
        "보라",
        "회색",
        "갈색",
      ],
    },
    {
      title: "브랜드",
      options: [
        "나이키",
        "아디다스",
        "뉴발란스",
        "푸마",
        "리복",
        "컨버스",
        "반스",
        "언더아머",
      ],
    },
    {
      title: "컬렉션",
      options: ["2024 S/S", "2024 F/W", "2023 S/S", "2023 F/W"],
    },
    { title: "사이즈", options: ["S", "M", "L", "XL", "XXL"] },
    {
      title: "혜택/가격",
      options: ["10% 할인", "20% 할인", "30% 할인", "40% 할인", "50% 할인"],
    },
  ];
  const products = [
    {
      brand: "IAB Studio",
      name: "IAB Studio Established T-Shirt White Black",
      translatedName: "아이앱 스튜디오 이스테블리시드 티셔츠 화이트 블랙",
      price: "90,000원",
      deals: "거래 521",
      src: "/images/trend/product_img0.webp",
      class: "class1",
      wishCount: "2,846",
      reviewCount: "32",
    },
    {
      brand: "Nike",
      name: "Nike Air Force 1 '07 Low White",
      translatedName: "나이키 에어포스 1 '07 로우 화이트",
      price: "111,000원",
      deals: "거래 49.2만",
      src: "/images/trend/product_img1.webp",
      class: "class2",
      wishCount: "21.7만",
      reviewCount: "9,226",
    },
    {
      brand: "Stussy",
      name: "Stussy Basic Stussy T-Shirt Black 2024",
      translatedName: "스투시 베이직 스투시 티셔츠 블랙 2024",
      price: "71,000원",
      deals: "거래 2.1만",
      src: "/images/trend/product_img2.webp",
      class: "class1",
      wishCount: "2.1만",
      reviewCount: "109",
    },
    {
      brand: "Adidas",
      name: "Adidas Samba OG Cloud White",
      translatedName: "아디다스 삼바 OG 클라우드 화이트",
      price: "119,000원",
      deals: "거래 10.3만",
      src: "/images/trend/product_img3.webp",
      class: "class2",
      wishCount: "12.7만",
      reviewCount: "1,565",
    },
    {
      brand: "Nike",
      name: "Nike Air Force 1 '07 WB Flax",
      translatedName: "나이키 에어포스 1 '07 WB 플랙스",
      price: "140,000원",
      deals: "거래 19.4만",
      src: "/images/trend/product_img4.webp",
      class: "class2",
      wishCount: "16.9만",
      reviewCount: "5,613",
    },
    {
      brand: "Stussy",
      name: "Stussy Basic Stussy T-Shirt White 2024",
      translatedName: "스투시 베이직 스투시 티셔츠 화이트 2024",
      price: "69,000원",
      deals: "거래 1.9만",
      src: "/images/trend/product_img5.webp",
      class: "class1",
      wishCount: "2.8만",
      reviewCount: "128",
    },
    {
      brand: "Asics",
      name: "Asics Gel-Kayano 14 Cream Black",
      translatedName: "아식스 젤 카야노 14 크림 블랙",
      price: "195,000원",
      deals: "거래 2.5만",
      src: "/images/trend/product_img6.webp",
      class: "class2",
      wishCount: "5.2만",
      reviewCount: "911",
    },
    {
      brand: "Stussy",
      name: "Stussy Cherries T-Shirt White",
      translatedName: "스투시 체리 티셔츠 화이트",
      price: "72,000원",
      deals: "거래 4,240",
      src: "/images/trend/product_img7.webp",
      class: "class1",
      wishCount: "1.6만",
      reviewCount: "33",
    },
  ];

  function createTabs() {
    const ul = document.createElement("ul");
    ul.classList.add("ul_tab");
    tabs.forEach((tab, index) => {
      const li = document.createElement("li");
      li.classList.add("li_tab");
      const a = document.createElement("a");
      a.classList.add("tab");
      if (index === 0) {
        a.classList.add("tab1");
      }
      a.href = "#";
      a.textContent = tab;
      li.appendChild(a);
      ul.appendChild(li);
    });
    document.querySelector(".tabs").appendChild(ul);
  }

  function createTrendingKeywords() {
    const camera = document.createElement("div");
    camera.classList.add("flicking-camera");
    trendingKeywords.forEach((keyword) => {
      const div = document.createElement("div");
      div.classList.add("trending_keyword_slide");
      div.innerHTML = `
        <a href="#" class="title" title="${keyword.title}">
          <div class="trend_keyword">
            <img src="${keyword.src}" />
            <span class="name">${keyword.title}</span>
          </div>
        </a>
      `;
      camera.appendChild(div);
    });
    document.querySelector(".trend_keyword_grid").appendChild(camera);
  }

  function createFilters() {
    const filterList = document.createElement("div");
    filters.forEach((filter) => {
      const div = document.createElement("div");
      div.classList.add("filter_list");
      div.innerHTML = `
        <div class="filter_title">
          <div class="title_box">
            <span class="main_title">${filter.title}</span>
            <span class="placeholder">모든 ${filter.title}</span>
          </div>
          <div class="ico_box"><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="filter_menu">
          <ul class="menu_list">
            ${filter.options
              .map(
                (option) => `
              <li class="menu">
                <a href="#" class="menu_link">
                  <input type="checkbox" class="toggleCheckbox" data-class="class${filters.indexOf(filter) + 1}" />
                  <span class="link_txt">${option}</span>
                </a>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      `;
      filterList.appendChild(div);
    });
    document.querySelector("aside").appendChild(filterList);
  }

  function createProducts() {
    const productList = document.createElement("div");
    productList.classList.add("search_result_list");
    products.forEach((product, index) => {
      const div = document.createElement("div");
      div.classList.add("search_result_item", product.class);
      div.dataset.resultIndex = index;
      div.innerHTML = `
        <div class="product_card" result-index="${index}">
          <a href="#" class="item_inner">
            <div class="product" style="background-color: rgb(244, 244, 244)">
              <picture class="product_img">
                <img class="image_full_width" src="${product.src}" />
              </picture>
              <div class="status_value">${product.deals}</div>
            </div>
            <div class="product_info_area">
              <div class="title">
                <p class="product_info_brand">${product.brand}</p>
                <div class="product_info_product_name">
                  <p class="name">${product.name}</p>
                  <p class="translated_name">${product.translatedName}</p>
                </div>
              </div>
              <div class="tags"></div>
            </div>
            <div class="price_area">
              <p class="amount">${product.price}</p>
              <p class="desc">즉시 구매가</p>
            </div>
          </a>
          <div class="action_wish_review">
            <span class="wish_figure">
              <i class="fa-regular fa-bookmark fa-sm" style="color: rgba(34, 34, 34, 0.5)"></i>
              <span class="text">${product.wishCount}</span>
            </span>
            <span class="review_figure">
              <i class="fa-regular fa-newspaper fa-sm" style="color: rgba(34, 34, 34, 0.5)"></i>
              <span class="text">${product.reviewCount}</span>
            </span>
          </div>
        </div>
      `;
      productList.appendChild(div);
    });
    document.querySelector(".search_contents").appendChild(productList);
  }

  createTabs();
  createTrendingKeywords();
  createFilters();
  createProducts();
});
