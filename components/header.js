const showCartItems = () => {
  let lsItems = JSON.parse(localStorage.getItem("cart_items"));
  let mainDiv = document.querySelector("#bro");

  mainDiv.innerText = "";
  let total_price = 0;
  for (let key in lsItems) {
    let subDiv = document.createElement("div");
    subDiv.setAttribute("class", "sub_div");
    let ele = lsItems[key]["obj"];
    let aa = ele.new_price.split("$")[1].replace(",", "");
    total_price += Number(aa);

    let img = document.createElement("img");
    img.setAttribute("src", ele.img[0]);
    img.setAttribute("class", "wallet_slider_img");

    let prd_name = document.createElement("p");
    prd_name.innerText = ele.product_name;
    prd_name.setAttribute("class", "wallet_slider_name");

    let description = ele["product_description"].split();
    ele["product_description"][0] +
      " " +
      ele["product_description"][1] +
      " " +
      ele["product_description"][2];
    let prd_desc = document.createElement("p");
    // prd_desc.innerText = description;
    let qty = document.createElement("p");
    qty.innerText = lsItems[key]["count"];
    qty.setAttribute("class", "qty");

    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "remove_btn");
    removeBtn.innerText = "Remove";

    removeBtn.addEventListener("click", () => {
      let lsItems = JSON.parse(localStorage.getItem("cart_items"));
      for (let k in lsItems) {
        if (key === k) {
          if (Number(lsItems[k]["count"]) === 1) {
            delete lsItems[k];
          } else {
            lsItems[k]["count"]--;
          }
          break;
        }
      }
      localStorage.setItem("cart_items", JSON.stringify(lsItems));
      showCartItems();
    });

    let price = document.createElement("p");
    price.innerText = ele["new_price"];

    subDiv.append(img, prd_name, price, qty);
    mainDiv.append(subDiv, removeBtn);
  }
  let subTotal = document.createElement("p");
  subTotal.innerText = `SUBTOTAL \t\t\t${total_price}`;
  subTotal.setAttribute("class", "subtotal_p");
  let fixedText = document.createElement("p");
  fixedText.innerText =
    "Shipping, taxes, and discounts codes calculated at checkout.";
  let checkOutBtn = document.createElement("button");
  checkOutBtn.setAttribute("class", "checkoutbtn");
  checkOutBtn.innerText = "CHECK OUT";

  checkOutBtn.addEventListener("click", () => {
    window.location = "walletdetails.html";
  });

  mainDiv.append(subTotal, fixedText, checkOutBtn);
};

const bagSideOpen = () => {
  document.querySelector("#spi").addEventListener("click", () => {
    document.querySelector("#mySidebar").style.width = "350px";
    // document.getElementById("#main").style.marginLeft = "0";
  });
};

const bagSideClose = () => {
  document.querySelector("#closeTab").addEventListener("click", () => {
    document.querySelector("#mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  });
};
const cartsliderhtml = () => {
  return ` <a href="javascript:void(0)" class="closebtn" id="closeTab">&times;</a>
    <div id="car">CART</div>
    <!-- <hr /> -->
    <div id="bro">Your Cart is Empty</div>`;
};

const headerHtml = () => {
  return `
    <div id="fb">
    <div>
        <a href="index.html"><img class="bllogo" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1613183141">
        </a>
    </div>
    <div id="icon">
        <div><i id="usr" class="fa-regular fa-user fa-2x"></i></div>
        <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" id="close" class="closebtn">&times;</a>
    <div id="car">CART</div>
    <div id="bro"></div>
  </div>
  
  <div id="main">
    <button id="spi" class="openbtn"><i class="fa-solid fa-bag-shopping" ></i> </button>
  
  </div>
    </div>
  </div>
  <div id="manue">
    <div class="container">
        <ul>
            <li>
                <a href="products.html?q=all_clothing">CLOTHING</a>
                 <div class="meg">
                    <div id="box1">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women.jpg?v=1613619704">
                            <h4>DRESSES</h4>
                            <p>up to 80% off</p>
                        </div>
                        <div>
                            <h4 class="sp"><a href="products.html?q=women_clothing">WOMEN'S CLOTHING</a></h4>
                            <p>
                                <a href="products.html?q=women_clothing-activewear">Activewear</a>
                                <a href="products.html?q=women_clothing-coat_jacket">Coats & Jackets</a>
                                <a href="products.html?q=women_clothing-dresses">Dresses</a>
                                <a href="products.html?q=women_clothing-jeans">Jeans & Denim</a>
                                <a href="products.html?q=women_clothing-jumpsuit">Jumpsuits & Rompers</a>
                                <a href="products.html?q=women_clothing-lingerie">Lingerie & Hosiery</a>
                                <a href="products.html?q=women_clothing-Loungewear">Loungewear & Sleepwear</a>
                                <a href="products.html?q=women_clothing-Pants">Pants & Leggings</a>
                                <a href="products.html?q=women_clothing-Shorts">Shorts</a>
                                <a href="products.html?q=women_clothing-Skirts">Skirts</a>
                                <a href="products.html?q=women_clothing-Sweaters">Sweaters</a>
                                <a href="products.html?q=women_clothing-Sweatshirts">Sweatshirts & Hoodies</a>
                                <a href="products.html?q=women_clothing-Swimwear">Swimwear & Coverups</a>
                                <a href="products.html?q=women_clothing-Tops">Tops & Tees</a>
                            </p>
                        </div>
                        <div>
                            <h4 class="sp"><a href="products.html?q=men_clothing">MAN'S CLOTHING</a></h4>
                            <P>
                                <a href="products.html?q=men_clothing">Activewear</a>
                                <a href="products.html?q=men_clothing-casual_shirt">Casual Button-Down Shirts</a>
                                <a href="products.html?q=men_clothing-jacket">Coats & Jackets</a>
                                <a href="products.html?q=men_clothing-dress">Dress Shirts</a>
                                <a href="products.html?q=men_clothing-jeans">Jeans & Denim</a>
                                <a href="products.html?q=men_clothing-pants">Pants</a>
                                <a href="products.html?q=men_clothing-shirt">Polo Shirts</a>
                                <a href="products.html?q=men_clothing-shorts">Shorts</a>
                                <a href="products.html?q=men_clothing-blazer">Sport Coats & Blazers</a>
                                <a href="products.html?q=men_clothing-suits">Suits & Separates</a>
                                <a href="products.html?q=men_clothing-sweaters">Sweaters</a>
                                <a href="products.html?q=men_clothing-swetshirt">Sweatshirts & Hoodies</a>
                                <a href="products.html?q=men_clothing-swimwear">Swimwear</a>
                                <a href="products.html?q=men_clothing-tshirt">T-Shirts</a>
                                <a href="products.html?q=men_clothing">Underwear & Socks</a>
                            </P>
                        </div>
                    </div>
                 </div>
            </li>
            <li><a href="products.html">SHOES</a>
                <div class="meg">
                    <div id="box2"> 
                         <div>
                            <h4 class="sp"> WOMEN'S SHOES</h4>
                            <p>
                            Shop All
                            Boots
                            Espadrilles
                            Flats
                            Mules & Slides
                            Oxfords & Loafers
                            Pumps & Heels
                            Sandals
                            Slippers
                            Sneakers
                            Wedges
                            </p>
                         </div>
                         <div>
                            <h4 class="sp">WOMEN'S DESIGNERS</h4>
                            <p>
                                Alexander McQueen
                                Balenciaga
                                Bottega Veneta
                                Christian Louboutin
                                Dolce & Gabbana
                                Fendi
                                Gianvito Rossi
                                Gucci
                                Jimmy Choo
                                Manolo Blahnik
                                Saint Laurent
                                Stuart Weitzman
                                Salvatore Ferragamo
                                Valentino
                                VEJA
                            </p>
                         </div>
                         <div>
                            <h4 class="sp">MEN'S SHOES</h4>
                            <p>
                                Shop All
                                Boots
                                Drivers, Loafers & Slip-Ons
                                Oxford & Derby Shoes
                                Sandals & Flip Flops
                                Slippers
                                Sneakers
                            </p>
                         </div>
                         <div>
                            <h4 class="sp">MEN'S DESIGNERS</h4>
                            <p>
                                Alexander McQueen
                                Balenciaga
                                Bottega Veneta
                                Burberry
                                Christian Louboutin
                                Common Projects
                                Dolce & Gabbana
                                Giuseppe Zanotti
                                Golden Goose
                                Gucci
                                Off-White
                                Saint Laurent
                                Salvatore Ferragamo
                                Valentino
                                Versace
                            </p>
                         </div>
                         <div>
                            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/SHOES-MEN.jpg?4112">
                            <h4 class="sp">DRIVERS, LOAFERS & SLIP-ONS</h4>
                             <p>   UP TO 60% OFF</p>
                        
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="products.html">HANDBAGS&ACCESSORIES</a>
                <div class="meg">
                    <div id="box3">
                        <div>
                            <img src="./images/download.jpeg">
                            <h4 class="sp">SATCHELS</h4>
                               <p> UP TO 60% OFF</p>
                        </div>
                        <div>
                            <h4 class="sp">ALL HANDBAGS</h4>
                            <p>
                                Shop All
                                Backpacks
                                Bucket Bags
                                Clutches
                                Crossbody Bags
                                Hobo Bags
                                Satchels
                                Shoulder Bags
                                Tote Bags
                                Wallets & Cardholders</p>
                        </div>
                        <div>

                        </div>
                        <div>
                            <h4 class="sp">  TOP DESIGNERS</h4>
                            <p>
                                Balenciaga
                                Bottega Veneta
                                Burberry
                                Celine
                                Chloe
                                Dolce & Gabbana
                                Fendi
                                Givenchy
                                Gucci
                                Mario Valentino
                                Prada
                                Saint Laurent
                                Salvatore Ferragamo
                                Stella McCartney
                                Valentino         
                            </p>
                        </div>
                        <div>
                            <h4>PRE-OWNED</h4>
                          <p>
                            Shop All
                            Bucket Bags
                            Clutches
                            Crossbody Bags
                            Hobo Bags
                            Satchels
                            Shoulder Bags
                            Tote Bags
                            Wallets & Cardholders</p>
                        </div>
                        <div>
                            <h4 class="sp">ACCESSORIES</h4>
                            <p>
                                Bag Charms, Straps, & Accessories
                                Belts
                                Cosmetic Bags
                                Hats
                                Gloves
                                Scarves & Wraps
                                Optical & Reading Glasses
                                Sunglasses</p>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="products.html">DESIGNERS</a>
                <div class="meg">
                    <div id="box4">
                       <div>
                        <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag.jpg?v=1613619701">
                        <h4 class="sp">GUCCI</h4>
                          <p>UP TO 64% OFF</p>
                       </div>
                       <div>
                        <h4 class="sp">FEATURED DESIGNERS</h4>
                        <p>
                            Alexander McQueen
                            Balenciaga
                            Bottega Veneta
                            Burberry
                            Celine
                            Chloe
                            Christian Louboutin
                            Dior
                            Dolce & Gabbana
                            Fendi
                            Gianvito Rossi
                            Givenchy
                            Gucci
                            Jimmy Choo
                            Johnny Was</p>
                       </div>
                       <div>
                        <p>Manolo Blahnik
                            Mario Valentino
                            Moschino
                            Off-White
                            Prada
                            Saint Laurent
                            Salvatore Ferragamo
                            Stella McCartney
                            Stuart Weitzman
                            Tom Ford
                            Valentino
                            Veja
                            Versace
                            Vince</p>
                       </div>
                    </div>
                </div>
            </li>
            <li><a href="products.html">SUNGLASSES</a>
                <div class="meg">
                    <div id="box5">
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dlENm_Hp1CK7pd31ioiIpW5nmybdY9NOvQ&usqp=CAU">
                            <h4>SUNGLASSES</h4>
                              <p>  UP TO 80% OFF</p>
                        </div>
                        <div>
                            <h4>WOMEN'S SUNGLASSES</h4>
                            <p>
                                Shop All
                                Balenciaga
                                Celine
                                Dior
                                Emilio Pucci
                                Fendi
                                Givenchy
                                Gucci
                                Jimmy Choo
                                Oliver Peoples
                                Prada
                                Roberto Cavalli
                                Saint Laurent
                                Salvatore Ferragamo
                                Tom Ford</p>
                        </div>
                        <div>
                            <h4>MEN'S SUNGLASSES</h4>
                            <p>
                                Shop All
                                Burberry
                                Carrera
                                Dior
                                Ermenegildo Zegna
                                Givenchy
                                Gucci
                                Jimmy Choo
                                Montblanc
                                Persol
                                Prada
                                Ray Ban
                                Saint Laurent
                                Salvatore Ferragamo
                                Tom Ford</p>
                        </div>
                    </div>
                </div>
            
            </li>
            <li><a href="products.html">JEWALRY&WATCHES</a>
                <div class="meg">
                    <div id="box6">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/watch.jpg?v=1613619725">
                            <h4>WATCHES</h4>
                               <p> UP TO 80% OFF</p>
                        </div>
                        <div>
                            <h4>JEWELRY</h4>
                            <p>
                                Shop All
                                Bracelets
                                Brooches & Pins
                                Earrings
                                Necklaces
                                Rings
                                Watches
                                Men's Jewelry</p>
                        </div>
                        <div>
                            <h4>FEATURED DESIGNER WATCHES</h4>
                            <p>
                                Anne Klein
                                Briston
                                Calvin Klein
                                CCCP
                                Christophe Duchamp
                                CT Scuderia
                                Daniel Wellington
                                Diesel
                                Esprit
                                Fossil
                                Frederique Constant
                                Glycine
                                Gucci
                                Hamilton
                                Invicta</p>
                        </div>
                        <div>
                            <p>Jacques Lemans
                                Jacy
                                Juicy Couture
                                Michael Kors
                                Mido
                                Omega
                                Pierre Cardin
                                Rado
                                Red Line
                                Salvatore Ferragamo
                                Seiko
                                TechnoMarine
                                Thomas Earnshaw
                                Tissot
                                Versace</p>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="products.html">JUNDER $50</a>
                <div class="meg">
                    <div id="box7">
                        <div>
                        <h4 class="sp">SHOP BY PRICEPOINT</h4>
                        <p>
                            Under $25
                            $25-$49.99
                            Shop All Under $50</p>
                        </div>
                        <div>
                            <h4 class="sp">SHOP BY CATEGORY</h4>
                           <p>
                            Women
                            Men
                            Shoes
                            Handbags & Accessories
                            Jewelry
                            Kids</p> 
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="products.html">BEAUTY</a>
                <div class="meg">   
                    <div id="box8">
                        <div>
                            <h4 class="sp">FRAGRANCE</h4>
                             <p> Shop All</p>
                                
                        </div>
                        <div>
                            <p>
                               <h4 class="sp">SKINCARE</h4>
                               <p>Shop All</p>
                               
                            </p>
                        </div>
                        <div>
                           <h4 class="sp"> HAIRCARE</h4>
                           <p>Shop All</p>
                        </div>
                  </div>
                </div>
            </li>
            <li style="color:red" ><a href="products.html">CLEARANCE</a></li>
        </ul>
    </div>
  </div>
    `;
};

const headerJS = () => {
  document.querySelector("#usr").addEventListener("click", () => {
    window.location = "login.html";
  });
};

const topSliderTxt = () => {
  const arr = [
    "FREE SHIPPING On Order Over $99",
    "WELCOME TO BLUEFLY: Luxury brands of discounted price",
    "HAVE A QUESTION: Get Help Form FlyRep@Bluefly.com",
  ];

  let i = 0;

  let div = document.getElementById("slider");

  let txt = document.createElement("h4");
  txt.innerText = arr[0];

  div.append(txt);
  i++;

  setInterval(function () {
    if (i == 3) {
      i = 0;
    }
    txt.innerText = arr[i];
    i++;

    div.append(txt);
  }, 2500);
};

export {
  headerHtml,
  headerJS,
  topSliderTxt,
  bagSideClose,
  bagSideOpen,
  cartsliderhtml,
  showCartItems,
};

//<div id="bottomblack">WELCOME TO BLUEFLY: luxury brands at disscounted prices</div>
