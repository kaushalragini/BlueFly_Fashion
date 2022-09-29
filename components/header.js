

const headerHtml = () => {
   
  return `
    <div id="fb">
    <div>
        <a href="index.html"><img class="bllogo" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1613183141">
        </a>
    </div>
    <div id="icon">
         
         <div><img class="cool" src="data:image/jpeg;base64,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"></div>
         
         
         <div><img class="cool" src="data:image/png;base64,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"/></div>
    
         
    
    
         </div>
  </div>
  <div id="manue">
    <div class="container">
        <ul>
            <li>
                <a href="@">CLOTHING</a>
                 <div class="meg">
                    <div id="box1">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women.jpg?v=1613619704">
                            <h4>DRESSES</h4>
                            <p>up to 80% off</p>
                        </div>
                        <div>
                            <h4 class="sp">WOMEN'S CLOTHING</h4>
                            <p>
                                Activewear
                                Coats & Jackets
                                Dresses
                                Jeans & Denim
                                Jumpsuits & Rompers
                                Lingerie & Hosiery
                                Loungewear & Sleepwear
                                Pants & Leggings
                                Shorts
                                Skirts
                                Sweaters
                                Sweatshirts & Hoodies
                                Swimwear & Coverups
                                Tops & Tees             
                            </p>
                        </div>
                        <div>
                            <h4 class="sp">MAN'S CLOTHING</h4>
                            <P>
                                Activewear
                                Casual Button-Down Shirts
                                Coats & Jackets
                                Dress Shirts
                                Jeans & Denim
                                Pants
                                Polo Shirts
                                Shorts
                                Sport Coats & Blazers
                                Suits & Separates
                                Sweaters
                                Sweatshirts & Hoodies
                                Swimwear
                                T-Shirts
                                Underwear & Socks
                            </P>
                        </div>
                    </div>
                 </div>
            </li>
            <li><a href="@">SHOES</a>
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
            <li><a href="@">HANDBAGS&ACCESSORIES</a>
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
            <li><a href="@">DESIGNERS</a>
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
            <li><a href="@">SUNGLASSES</a>
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
            <li><a href="@">JWALRY&WATCHES</a>
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
            <li><a href="@">JUNDER $50</a>
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
            <li><a href="@">BEAUTY</a>
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
        </ul>
    </div>
  </div>
  <div id="bottomblack">WELCOME TO BLUEFLY: luxury brands at disscounted prices</div>
    `;
};

export { headerHtml };
