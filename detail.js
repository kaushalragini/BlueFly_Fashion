let data_to_display = JSON.parse(localStorage.getItem("productToShow"));
let img = data_to_display.img;

let bigimg = [
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160127531_RLLZ_1_1800x1800.jpg?v=1664100479",
  },
];
displayImg = () => {
  let productimg = document.getElementById("productimg");
  img.map(function (element) {
    let div = document.createElement("div");
    div.setAttribute("id", "firstdiv");
    let firstimg = document.createElement("img");
    firstimg.setAttribute("class", "smallimg");
    firstimg.src = element;
    div.append(firstimg);
    productimg.append(div);
  });
};
displayImg();

// var productImg = document.getElementById("Productimg");
// var smallImg = document.getElementsByClassName("smallimg");
// console.log(productImg);
// console.log(smallImg[0].currentSrc);

// smallImg[0].addEventListener("click", function () {
//   productImg.src = smallImg[0].currentSrc;
// });

// smallImg[1].addEventListener("click", function () {
//   productImg.src = smallImg[1].currentSrc;
// });

// smallImg[2].addEventListener("click", function () {
//   productImg.src = smallImg[2].currentSrc;
// });

// smallImg[3].addEventListener("click", function () {
//   productImg.src = smallImg[3].currentSrc;
// });

let Alsolike = [
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160203634_RLLZ_1_720x.jpg?v=1664442926",
    title: "GUCCI HORSEBIT 1955 SMALL GG SUPREME CANVAS & LEATHER SHOULDER BAG",
    oldprice: "$1650",
    newprice: "$1,298.99",
    save: " Save 21%",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gcSwQUp6xMdpxujKTeXxBksptS2Omw5k-25_1800x1800.jpg?v=1664247986",
    title: "GG MARMONT WOMENS LEATHER CHEVRON SHOULDER HANDBAG",
    oldprice: "$1,550.00",
    newprice: "$1,251.99 ",
    save: "Save 19%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160226772_RLLZ_1_1800x1800.jpg?v=1664111691",
    title: "SAINT LAURENT ENVELOPE MEDIUM LEATHER SHOULDER BAG",
    oldprice: "$2,590.00",
    newprice: "$1,823.99",
    save: "Save 30%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160275998_RLLZ_1_1800x1800.jpg?v=1663966689",
    title: "GUCCI HORSEBIT 1955 LEATHER SHOULDER BAG",
    oldprice: "$1,800.00",
    newprice: "$1,498.99",
    save: "Save 17%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160287015_RLLZ_1_1800x1800.jpg?v=1664297076",
    title: "SAINT LAURENT ENVELOPE MEDIUM LEATHER SHOULDER BAG",
    oldprice: "$2,590.00",
    newprice: "$1,823.99",
    save: "Save 30%",
  },
];
displayNextdiv = () => {
  let mostlike = document.getElementById("maintwo");

  Alsolike.map(function (element) {
    let div = document.createElement("div");
    div.setAttribute("id", "Secdiv");
    let img = document.createElement("img");
    img.setAttribute("class", "imgone");
    img.src = element.img;
    let title = document.createElement("h3");
    title.innerHTML = element.title;
    let span1 = document.createElement("span");
    span1.innerHTML = element.oldprice;
    span1.setAttribute("id", "firstspan");
    let span2 = document.createElement("span");
    span2.innerHTML = element.newprice;
    span2.setAttribute("id", "secspan");
    let span3 = document.createElement("span");
    span3.innerHTML = element.save;
    span3.setAttribute("id", "thirdspan");
    div.append(img, title, span1, span2, span3);
    mostlike.append(div);
  });
};
displayNextdiv();
let productImg = document.querySelector("#Productimg");
console.log("productImg => ", productImg);
var smallImg = document.getElementsByClassName("smallimg");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", () => {
    console.log("small images = > ", smallImg[i].src);
    productImg.src = smallImg[i].src;
  });
}
const displayProduct = () => {
  let bigImg = document.querySelector("#bigimg");
  let img = document.createElement("img");
  img.setAttribute("id", "Productimg");
  img.src = data_to_display.img[0];
  bigImg.append(img);

  let detailSection = document.querySelector("#last");
  let brandName = document.querySelector("#gucchih3");
  // brandName.setAttribute("id", "gucchih3");
  brandName.innerText = data_to_display.product_name.split(" ")[0];

  let brandTitle = document.querySelector("#gucchih1");
  // brandTitle.setAttribute("id", "gucchih1");
  brandTitle.innerText = data_to_display.product_name;
  // detailSection.append(brandName, brandTitle);

  let oldPrice = document.querySelector(".span2");
  oldPrice.innerText = data_to_display.new_price;
  let newPrice = document.querySelector(".span1");
  newPrice.innerText = data_to_display.previousprice;
};

displayProduct();

document.querySelector("#ATC").addEventListener("click", () => {
  let data_to_display = JSON.parse(localStorage.getItem("productToShow"));
  let cartData = JSON.parse(localStorage.getItem("cart_items")) || {};

  let productAddedToCart = {};
  if (Object.keys(cartData).length === 0) {
    productAddedToCart[data_to_display.id] = { count: 1, obj: data_to_display };
    cartData = productAddedToCart;
  } else {
    let found = false;
    for (key in cartData) {
      if (Number(key) === Number(data_to_display.id)) {
        cartData[key]["count"]++;
        found = true;
      }
    }
    if (found === false) {
      cartData[data_to_display.id] = { count: 1, obj: data_to_display };
    }
  }

  localStorage.setItem("cart_items", JSON.stringify(cartData));
  // if (productAddedToCart.length === 0) {
  //   let newObj = {};
  //   newObj[JSON.stringify(data_to_display)] = 1;
  //   productAddedToCart.push(newObj);
  // } else {
  //   productAddedToCart.forEach((productObj, i) => {
  //     console.log(productObj);
  //     for (key in productObj) {
  //       console.log(key);
  //       key = JSON.parse(key);
  //       if (productObj[key] === undefined) {
  //         alert("aa");
  //         let newObj = {};
  //         newObj[JSON.stringify(data_to_display)] = 1;
  //         productAddedToCart.push(newObj);
  //       } else {
  //         alert("bb");
  //         console.log(productAddedToCart);
  //         productAddedToCart[key]++;
  //       }
  //     }
  //   });
  // }

  // localStorage.setItem("cart_items", JSON.stringify(productAddedToCart));
});
