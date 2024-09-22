let dummyData = [
  {
    id: 1,
    name: "فستان طويل",
    price: "1200",
    color: "white",
    availableColors: ["white", "brown"],

    availableColorsHex: ["#ffffff", "#8b6a4f"],
    sizes: ["2", "4", "6", "9"],
    category: "Dresses",
    categoryAr: "فساتين",
    image: "../image/019.webp",
    images: ["../image/019.webp", "../image/000.webp"],
  },
  {
    id: 2,
    name: "قميص مشجر",
    price: "699",
    color: "white",
    availableColors: ["white"],

    availableColorsHex: ["#ffffff"],
    sizes: ["2", "4", "6", "9"],
    category: "shirts",
    categoryAr: "قمصان",

    image: ["../image/02.webp"],
  },
  {
    id: 3,
    name: "جاكيت",
    price: "970",
    color: "black",
    availableColors: ["black"],

    availableColorsHex: ["#000000"],
    sizes: ["2", "4", "6", "9"],
    category: "jacket",
    categoryAr: "جواكت",
    image: "../image/06.webp",
  },
  {
    id: 4,
    name: "قميص طويل",
    price: "220",
    color: "black",
    availableColors: [
      "black",
      "lightgreen",
      "pink",
      "lightblue",
      "lighterblue",
    ],

    availableColorsHex: ["#000000", "#a1aea5", "#f847b1", "#c8a6fc", "#ceccf3"],
    sizes: ["2", "4", "6", "9"],
    category: "shirts",
    categoryAr: "قمصان",

    image: "../image/010.webp",
    images: [
      "../image/010.webp",
      "../image/011.webp",
      "../image/017.webp",
      "../image/08.webp",
      "../image/09.webp",
    ],
  },
  {
    id: 5,
    name: "إسدال",
    price: "350",
    color: "white",
    availableColors: ["white", "brown"],

    availableColorsHex: ["#ffffff", "#d08b65"],
    sizes: ["2", "4", "6", "9"],
    category: "إسدال",
    image: "../image/014.webp",
    images: ["../image/014.webp", "../image/015.webp"],
  },
  {
    id: 6,
    name: "بنطلون",
    price: "850",
    color: "white",
    availableColors: ["white", "brown", "Lightgrayish"],

    availableColorsHex: ["#ffffff", "#8b6a4f", "#e0c1bb"],
    sizes: ["2", "4", "6", "9"],
    category: "pants",
    categoryAr: "بناطيل",

    image: "../image/IMG_3085.JPG",
    images: ["../image/IMG_3085.JPG", "../image/022.webp", "../image/023.webp"],
  },
];

$(document).ready(function () {
  // ==> Nav links

  $(".nav-links .link").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // ==> Sub links

  $(".home").click(function () {
    $(".dynamic").css("display", "none");
    $(".home-dynamic-content").css("display", "flex");
  });
  $(".about").click(function () {
    $(".dynamic").css("display", "none");
    $(".about-dynamic-content").css("display", "flex");
  });

  $(".open").click(() => {
    $(".open").css("display", "none");
    $(".close").css("display", "block");
    $(".main-nav .nav-links").css("opacity", "1");
    $(".main-nav .nav-links").css("width", "85%");
  });

  $(".close").click(() => {
    $(".open").css("display", "block");
    $(".close").css("display", "none");
    $(".main-nav .nav-links").css("opacity", "0");
    $(".main-nav .nav-links").css("width", "0%");
  });

  // ==> Banner Slide Show

  let images1 = [
    "../image/07.webp",
    "../image/08.webp",
    "../image/09.webp",
    "../image/010.webp",
    "../image/011.webp",
  ];
  let i = 0;
  setInterval(function () {
    $(".image1").attr("src", images1[i]);
    i++;
    if (i == images1.length - 1) {
      i = 0;
    }
  }, 2500);

  let images2 = [
    "../image/IMG_3091.JPG",
    "../image/IMG_3085.JPG",
    "../image/022.webp",
    "../image/020cropped.webp",
  ];
  let j = 0;

  setInterval(function () {
    $(".image2").attr("src", images2[i]);
    j++;
    if (j == images2.length - 1) {
      j = 0;
    }
  }, 3000);

  // ==> Sale Slide Show

  let images3 = [
    "../image/07.webp",
    "../image/08.webp",
    "../image/09.webp",
    "../image/010.webp",
    "../image/011.webp",
  ];
  let k = 0;

  setInterval(function () {
    $(".model-image").attr("src", images3[i]);
    k++;
    if (k == images3.length - 1) {
      k = 0;
    }
  }, 2000);

  //  ==> owl carousel

  $("#slider-area").owlCarousel({
    loop: true,
    // autoplay:true,
    dots: true,
    nav: true,
    // autoplaySpeed:800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $("#reviews-slider-area").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: true,
    autoplaySpeed: 800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // ==> Toggle Footer Links

  $("#fa-account-plus").click(function () {
    setTimeout(function () {
      $(".account ul").css(
        "clip-path",
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      );
    }, 300);
    $(".account ul").css("height", "fit-content");

    $("#fa-account-minus").css("display", "block");
    $("#fa-account-plus").css("display", "none");
  });
  $("#fa-account-minus").click(function () {
    $(".account ul").css("clip-path", "polygon(0 0, 100% 0, 100% 0, 0 0)");

    setTimeout(function () {
      $(".account ul").css("height", "0");
    }, 300);

    $("#fa-account-minus").css("display", "none");
    $("#fa-account-plus").css("display", "block");
  });

  $("#fa-about-plus").click(function () {
    setTimeout(function () {
      $(".about ul").css(
        "clip-path",
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      );
    }, 300);
    $(".about ul").css("height", "fit-content");
    $("#fa-about-minus").css("display", "block");
    $("#fa-about-plus").css("display", "none");
  });
  $("#fa-about-minus").click(function () {
    $(".about ul").css("clip-path", "polygon(0 0, 100% 0, 100% 0, 0 0)");
    setTimeout(function () {
      $(".about ul").css("height", "0");
    }, 300);
    $("#fa-about-minus").css("display", "none");
    $("#fa-about-plus").css("display", "block");
  });

  $("#fa-help-plus").click(function () {
    setTimeout(function () {
      $(".help ul").css("clip-path", "polygon(0 0, 100% 0, 100% 100%, 0 100%)");
    }, 300);
    $(".help ul").css("height", "fit-content");
    $("#fa-help-minus").css("display", "block");
    $("#fa-help-plus").css("display", "none");
  });
  $("#fa-help-minus").click(function () {
    $(".help ul").css("clip-path", "polygon(0 0, 100% 0, 100% 0, 0 0)");
    setTimeout(function () {
      $(".help ul").css("height", "0");
    }, 300);
    $("#fa-help-minus").css("display", "none");
    $("#fa-help-plus").css("display", "block");
  });

  $("#fa-contact-us-plus").click(function () {
    setTimeout(function () {
      $(".contact-us ul").css(
        "clip-path",
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      );
    }, 300);
    $(".contact-us ul").css("height", "fit-content");

    $("#fa-contact-us-minus").css("display", "block");
    $("#fa-contact-us-plus").css("display", "none");
  });
  $("#fa-contact-us-minus").click(function () {
    $(".contact-us ul").css("clip-path", "polygon(0 0, 100% 0, 100% 0, 0 0)");
    setTimeout(function () {
      $(".contact-us ul").css("height", "0");
    }, 300);
    $("#fa-contact-us-minus").css("display", "none");
    $("#fa-contact-us-plus").css("display", "block");
  });

  // ==> Date function

  var dt = new Date();
  var time = dt.getHours();

  time >= 10 && time <= 20
    ? $(".time").css("color", "green")
    : $(".time").css("color", "red");

  // ==> Set the number of products

  $(".count").text(`${dummyData.length} منتجات`);
});

// ==> show products function

let newData = dummyData;
function showProducts() {
  let val = newData.map(function (val, i) {
    return `
    <div class="product">
      
      <img src="${val.image}" alt=""/>

      <div class="view-info">
      <button onclick="openProductPage(${val.id})">إعرف المزيد</button>
      <button>أضف الان</button>
      </div>
      
      <div class="product-desc">
        <h4>${val.name}</h4>
        <p class="price">${val.price}</p>
      </div>
      <div class="all-colors">
      ${val.availableColorsHex
        ?.map(function (val, i) {
          return `
          <span class="color" style="background-color:${val}; border: ${val == "#ffffff" ? "1px solid black" : ""}"></span>
        `;
        })
        .join("")}
      </div>
    </div>
    `;
  });

  $(".products-holder .product").click(function () {
    $(".products-holder .product .view-info").css(
      "clip-path",
      "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
    );
  });

  // ==> Set the number of products

  $(".count").text(`${newData.length} منتجات`);

  // ==> Set html for products

  $(".all-products").html(val);
}

showProducts();

// ==> Handle Category Filter Function

function handleCategoryClick() {
  let myInput = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((ele) => ele.defaultValue);

  console.log(myInput);
  if (myInput.length == 0) {
    newData = dummyData;
  } else {
    newData = dummyData.filter(
      (ele) =>
        ele.category == myInput[0] ||
        ele.category == myInput[1] ||
        ele.category == myInput[2]
    );
  }

  let myInputPrice = document.querySelector('input[name="price"]:checked');

  myInputPrice ? (myInputPrice.checked = false) : "";

  showProducts();
}

// ==> Handle Price Filter Function

function handlePriceClick() {
  let myInput = document.querySelector('input[name="price"]:checked').value;
  console.log(myInput);
  myInput == "low"
    ? (newData = newData.sort((a, b) => a.price - b.price))
    : (newData = newData.sort((a, b) => b.price - a.price));
  showProducts();
}

let closeResponsiveFilter = false;

$(".responsive-filter-buttom").click(function () {
  if (closeResponsiveFilter == false) {
    console.log("true");
    $(".filters").css("opacity", "1");
    $(".filters").css("display", "flex");
    closeResponsiveFilter = true;
  } else {
    console.log("flase");
    $(".filters").css("opacity", "0");
    $(".filters").css("display", "none");
    closeResponsiveFilter = false;
  }
});

$(".all-products-page-container label").click(function () {
  if(closeResponsiveFilter == true){
    $(".filters").css("opacity", "0");
  $(".filters").css("display", "none");
  closeResponsiveFilter = false;

  }
  
});

// $(".close-filters").click(function () {
//   $(".filters").css("display", "none");
// });

// Product page function

function openProductPage(id) {
  localStorage.setItem("productID", id);

  window.location = "productPage.html";
}

// Show product UI in product Page
function showProductUi() {
  let productId = localStorage.getItem("productID");
  let product = dummyData.find((ele) => ele.id == productId);

  let productUI = `
  <div class="one-product-info" dir="rtl">
  <div class="image">
    <img src="${product.image}" alt=""product/>
  </div>
  <div class="desc">
     <p class="product-category">حريمي / ${product.categoryAr}</p>
     <h3><span>${product.name}</span><span>E£${product.price}</span></h3>
     <p class="color"><strong>اللون : </strong> <span>${
       product.color
     }</span></p>
     <div class="all-colors">
      ${product.availableColorsHex
        ?.map(function (val, i) {
          return `
          <span class="color" onclick='showColorProduct(${productId}, ${i})' style="background-color:${val}; border: ${val == "#ffffff" ? "1px solid black" : ""}"></span>
        `;
        })
        .join("")}
      </div>
      <div class="size">
      <p>المقاسات المتاحة</p>
       <div>
       ${product.sizes
         ?.map(function (val, i) {
           return `
         <span class="">${val}</span>
       `;
         })
         .join("")}
       </div>

      </div>
      <button class="add-to-cart">أضف إالي العربة</button>
  </div>
  </div>

  `;

  $(".product-container").html(productUI);
}

showProductUi();

function showColorProduct(val, i) {
  let product = dummyData.find((ele) => ele.id == val);
  console.log(product.images[i]);
  $(".one-product-info .image img").attr("src", `${product.images[i]}`);
  $(".color span").html(`${product.availableColors[i]}`);
}

function moreToLove() {
  let val = dummyData.slice(0, 3).map(function (val, i) {
    return `
    <div class="product">
      
      <img src="${val.image}" alt=""/>

      <div class="view-info">
      <button onclick="openProductPage(${val.id})">إعرف المزيد</button>
      <button>أضف الان</button>
      </div>
      
      <div class="product-desc">
        <h4>${val.name}</h4>
        <p class="price">${val.price}</p>
      </div>
    </div>
    `;
  });

  $(".more-to-love").html(val);
}
moreToLove();

// $("#love").owlCarousel({
//   loop: true,
//   autoplay:true,
//   dots: true,
//   // nav: true,
//   // autoplaySpeed:800,
//   smartSpeed: 1000,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     700: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });
