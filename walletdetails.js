let btn= document.getElementById("continueBtn")
let input= document.getElementById("input-email")
let zip = document.getElementById("zipcode")
let city = document.getElementById("city")
let firstname= document.getElementById("firstname")
let lastname= document.getElementById("lastname")
btn.onclick= function(){
if(input.value=="" || zip.value=="" || city.value=="" || firstname.value=="" || lastname.value==""){
    alert("fill all credentials")
}else{
    alert("Process completed")
}
location.reload()
}

let cartdetailsdiv= document.getElementById("cart-details-div")
let total=0


let array = [{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"},{"product_name":"Cashmere Blend Black  V-Neck Sweater","product_description":" Black, brand_Cashmere Company, condition_New, is-returnableis_returnable, size-womens-clothing_10, size-womens-clothing_12, size-womens-clothing_6, size-womens-clothing_8","img":["https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_a_resized_large.jpg?v=1664171013","https://cdn.shopify.com/s/files/1/0248/3473/6191/products/77228-77231_b_resized_large.jpg?v=1664171015"],"previousprice":"$27.99","new_price":"$195.00"}]


let str;
for(i=0;i<array.length;i++){
    str = array[i].previousprice.substring(1);
    total+= Number(str)
    let div= document.createElement("div")
    let img= document.createElement("img")
    img.src= array[i].img
    let title= document.createElement("p")
    title.innerText= array[i].product_name
    let price= document.createElement("p")
    price.innerText= array[i].previousprice
    div.append(img,title,price)
    cartdetailsdiv.append(div)
}


let hrline= document.createElement("hr")
let hrrline= document.createElement("hr")
let hrrrline= document.createElement("hr")


let div= document.createElement("div")
div.id= "div-for-giftcard"
let inputt= document.createElement("input")
inputt.placeholder= "Discount % (only put number)"
inputt.id= "input-discount"
let applybtn= document.createElement("button")
applybtn.innerText= "Apply"
applybtn.id= "bbttnn"
div.append(inputt,applybtn)

let subtotaldiv= document.createElement("div")
let ppp=document.createElement("p")
ppp.innerText="SubTotal"
let pppp= document.createElement("p")
pppp.innerText="$"+total
subtotaldiv.append(ppp,pppp)






let afterdiscount= document.createElement("div")
let dp= document.createElement("p")
dp.innerText= "discount"
let dpp= document.createElement("p")
dpp.id= "discountminus"
dpp.innerText="-"
afterdiscount.append(dp,dpp)


let shipping= document.createElement("div")
let shippingp=document.createElement("p")
shippingp.innerText="Shipping"
let shippingpp= document.createElement("p")
shippingpp.innerText="Calculated at next step"
shipping.append(shippingp,shippingpp)




let totaldiv= document.createElement("div")
let p=document.createElement("p")
p.innerText="Total"
let pp= document.createElement("p")
pp.id= "totalchange"
pp.innerText="USD "+"$"+total
totaldiv.append(p,pp)



cartdetailsdiv.append(hrline,div,hrrline,subtotaldiv,afterdiscount,shipping,hrrrline,totaldiv)



let inputdiscount= document.getElementById("input-discount");
let couponbttn= document.getElementById("bbttnn")
let minus;
let totall



couponbttn.onclick= function(){
    let totalShow= document.getElementById("totalchange");
    let totaldisc= document.getElementById("discountminus");
    minus =(total/100*(inputdiscount.value))
    totall= total-minus
    console.log(minus)
    totaldisc.innerText= "-"+"$"+minus
    totalShow.innerText= "USD "+"$"+totall
    // totalShow= totall
    console.log(totall)


inputdiscount.value= null;
}

