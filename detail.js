var productImg=document.getElementById("Productimg")
console.log(productImg)
var smallImg=document.getElementsByClassName("smallimg")

console.log(smallImg[0])

smallImg[0].addEventListener("click", function(){
  productImg.src=smallImg[0].src
})

smallImg[1].addEventListener("click", function(){
    productImg.src=smallImg[1].src
  })
  
smallImg[2].addEventListener("click", function(){
    productImg.src=smallImg[2].src
  })
  
smallImg[3].addEventListener("click", function(){
    productImg.src=smallImg[3].src
  })