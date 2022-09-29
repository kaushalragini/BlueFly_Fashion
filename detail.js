let img = [
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160127531_RLLZ_1_720x.jpg?v=1664100479",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160127531_RLLZ_2_720x.jpg?v=1664100481",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1160127531_RLLZ_3_720x.jpg?v=1664100482",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gucci_women_belts221_0c1fb5a7-8acf-465b-95dc-0d920722dd26_720x.png?v=1664100484",
  },
];

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
    firstimg.src = element.img;
    div.append(firstimg);
    productimg.append(div);
  });
};
displayImg();

bigImg = () => {
  let bi = document.getElementById("bigimg");
  bigimg.map(function (ele) {
    let div = document.createElement("div");
    div.setAttribute("id", "bigimg");
    let secim = document.createElement("img");
    secim.setAttribute("id", "Productimg");
    secim.src = ele.img;
    div.append(secim);
    bi.append(div);
  });
};
bigImg();

var productImg = document.getElementById("Productimg");
var smallImg = document.getElementsByClassName("smallimg");
console.log(productImg);
console.log(smallImg[0].currentSrc);

smallImg[0].addEventListener("click", function () {
  productImg.src = smallImg[0].currentSrc;
});

smallImg[1].addEventListener("click", function () {
  productImg.src = smallImg[1].currentSrc;
});

smallImg[2].addEventListener("click", function () {
  productImg.src = smallImg[2].currentSrc;
});

smallImg[3].addEventListener("click", function () {
  productImg.src = smallImg[3].currentSrc;
});

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
var productImg = document.getElementById("Productimg");
console.log(productImg);
var smallImg = document.getElementsByClassName("smallimg");

console.log(smallImg[0]);

smallImg[0].addEventListener("click", function () {
  productImg.src = smallImg[0].src;
});

smallImg[1].addEventListener("click", function () {
  productImg.src = smallImg[1].src;
});

smallImg[2].addEventListener("click", function () {
  productImg.src = smallImg[2].src;
});

smallImg[3].addEventListener("click", function () {
  productImg.src = smallImg[3].src;
});
