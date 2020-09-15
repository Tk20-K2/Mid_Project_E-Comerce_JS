
let scriptElement = document.querySelector('html')
let hiddenform = `<form  id="hiddenFormInfo"  action="redirectProductInfo.html" method="GET">
<input type="hidden" id ="hiddenInputInfo" name="product">
</form>
</section>`
scriptElement.innerHTML=scriptElement.innerHTML+hiddenform

let headerval =  window.location.href.split("/")[window.location.href.split("/").length-1].split('.')[0].split('%20').join(' ')
headerval = headerval.replace('2','')
console.log(headerval)

fetch('product.json')
  .then(response => response.json())
  .then(function(data){
      data.forEach(element => {
          if(element.rating ==""){
              element.rating = "3.5"
          }
         if(element.category== "Woman" && element.subCategory.toLowerCase() ==headerval.toLowerCase()){
             searchContentContainer.innerHTML=searchContentContainer.innerHTML + `
             <div class="product-box" onclick="redirectProductInfo(this)" style="display: flex;">
             <img src="${element.picture}" class="product-image">
             <span class="product-name">${element.name}</span>
             <div>
                 <span class="product-price">Rs. ${element.price}</span>
                 <span class="product-rating">${element.rating} ☆</span>
             </div>
             <span class="product-brand">${element.brand}</span>
         </div>
             `
         }
      });})




    //   render products info

let hiddenFormInfo = document.getElementById('hiddenFormInfo')
let hiddenInputInfo = document.getElementById('hiddenInputInfo')
function redirectProductInfo(element){
    // console.log(element.children[1].innerHTML)
    hiddenInputInfo.value=element.children[1].innerHTML
    hiddenFormInfo.submit()
}
    
    
    
    