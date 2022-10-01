let btn = document.getElementById("continueBtn");
let input = document.getElementById("input-email");
let zip = document.getElementById("zipcode");
let city = document.getElementById("city");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
btn.onclick = function () {
  if (
    input.value == "" ||
    zip.value == "" ||
    city.value == "" ||
    firstname.value == "" ||
    lastname.value == ""
  ) {
    alert("fill all credentials");
  } else {
    alert("Process completed");
  }
  location.reload();
};

let cartdetailsdiv = document.getElementById("cart-details-div");
let total = 0;

let lsData = JSON.parse(localStorage.getItem("cart_items"));
let array = [];
let qty = [];
for (let key in lsData) {
  array.push(lsData[key]["obj"]);
  qty.push(Number(lsData[key]["count"]));
}

let str;
for (i = 0; i < array.length; i++) {
  str = Number(array[i].new_price.split("$")[1].replace(",", ""));
  total = total + Number(str) * qty[i];
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = array[i].img;
  let title = document.createElement("p");
  title.innerText = array[i].product_name;
  let price = document.createElement("p");
  price.innerText = array[i].new_price;
  let qnty = document.createElement("p");
  qnty.innerText = `Total Quantity: ${qty[i]}`;
  div.append(img, title, price, qnty);
  cartdetailsdiv.append(div);
}

let hrline = document.createElement("hr");
let hrrline = document.createElement("hr");
let hrrrline = document.createElement("hr");

let div = document.createElement("div");
div.id = "div-for-giftcard";
let inputt = document.createElement("input");
inputt.placeholder = "Discount % (only put number)";
inputt.id = "input-discount";
let applybtn = document.createElement("button");
applybtn.innerText = "Apply";
applybtn.id = "bbttnn";
div.append(inputt, applybtn);

let subtotaldiv = document.createElement("div");
let ppp = document.createElement("p");
ppp.innerText = "SubTotal";
let pppp = document.createElement("p");
pppp.innerText = "$" + total;
subtotaldiv.append(ppp, pppp);

let afterdiscount = document.createElement("div");
let dp = document.createElement("p");
dp.innerText = "discount";
let dpp = document.createElement("p");
dpp.id = "discountminus";
dpp.innerText = "-";
afterdiscount.append(dp, dpp);

let shipping = document.createElement("div");
let shippingp = document.createElement("p");
shippingp.innerText = "Shipping";
let shippingpp = document.createElement("p");
shippingpp.innerText = "Calculated at next step";
shipping.append(shippingp, shippingpp);

let totaldiv = document.createElement("div");
let p = document.createElement("p");
p.innerText = "Total";
let pp = document.createElement("p");
pp.id = "totalchange";
pp.innerText = "USD " + "$" + total;
totaldiv.append(p, pp);

cartdetailsdiv.append(
  hrline,
  div,
  hrrline,
  subtotaldiv,
  afterdiscount,
  shipping,
  hrrrline,
  totaldiv
);

let inputdiscount = document.getElementById("input-discount");
let couponbttn = document.getElementById("bbttnn");
let minus;
let totall;

couponbttn.onclick = function () {
  let totalShow = document.getElementById("totalchange");
  let totaldisc = document.getElementById("discountminus");
  minus = Math.round((total / 100) * inputdiscount.value, 3);
  totall = total - minus;
  console.log(minus);
  totaldisc.innerText = "-" + "$" + minus;
  totalShow.innerText = "USD " + "$" + totall;
  // totalShow= totall
  console.log(totall);

  inputdiscount.value = null;
};
