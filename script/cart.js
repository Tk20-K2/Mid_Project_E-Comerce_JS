let mainCart = document.querySelector('.main_cart') 
let emptyCart = document.querySelector('#emptyCart') 
function fetchCartItems(){
for(let i =0; i<localStorage.length;i++){
    let jsonData =JSON.parse(localStorage.getItem(localStorage.key(i)))
        mainCart.innerHTML= mainCart.innerHTML+`
    <div class="card p-4">
    <div class="row">
        <!-- Card Image -->
        <div
            class=product_img">
            <img src="${jsonData.src}" alt="" class="prod_image">
        </div>
        <!-- Cart Product Detail  -->
        <div class="col-md-8 col-11 mx-auto px-4 mt-2">
            <div class="row">
                <!-- Product Name -->
                <div class="col-6 card-title">
                    <h1 class="mb-4 product-name">${jsonData.name}</h1>
                    <p class="mb-2"> ${jsonData.disc.slice(0, 100)}</p>
                    <p class="mb-2" style="color:#34bdeb;"> ${jsonData.brand}</p>
                </div>
                <!-- Product Quantity -->
                <div class="col-6">
                    <ul class="pagination justify-content-end set_quantity">
                        <li class="page-item">
                            <button class="page-link"
                                onclick="decItemQuantity(this)"><i
                                    class="fas fa-minus"></i></button>
                        </li>
                        <li class="page-item">
                            <span id="quantity_textbox1" 
                                class="page-link">${jsonData.quantity}</span>
                        </li>
                        <li class="page-item">
                            <button class="page-link"
                                onclick="incItemQuantity(this)"><i
                                    class="fas fa-plus"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Remove Item and WishList -->
            <div class="row center-dive">
                <div class="col-8 d-flex justify-content-between remove_item">
                    <p><i class="fas fa-trash-alt del_btn" onclick="removeThisItem(this)"></i> Remove Item</p>
                    <button id="addToCartButton"> CHECKOUT <i class="fas fa-check"></i></button>
                </div>
                <div class="col-4 d-flex justify-content-end product_price font-weight-bold">
                    <p>Rs. <span id="item_price1">${jsonData.price}</span></p>
                </div>
            </div>
        </div>
    </div>
    </div><hr> `
    let countCartItems  = document.getElementById('count-cart-items')
    countCartItems.innerText=localStorage.length

    if(countCartItems.innerText=="0"){
  countCartItems.style.display="none"
    }      
    else{
  countCartItems.style.display="flex"
    emptyCartfunc()
    }
}}
fetchCartItems()

function emptyCartfunc(){
    if(localStorage.length>0){
        emptyCart.style.display="none"
    }
    else{
    emptyCart.style.display="flex"
    }
}
emptyCartfunc()


// Del Items
function removeThisItem(element){
    localStorage.removeItem(element.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerText)
    mainCart.innerHTML=""
    fetchCartItems()
    emptyCartfunc()
    countCartItems.innerText=localStorage.length
    if(countCartItems.innerText=="0"){
        countCartItems.style.display="none"
      }
      else{
        countCartItems.style.display="flex"
      }
}

// Inc & Dec Quantity 
const decItemQuantity = (button) => {
   let totPrice = button.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0]
   let quan  = button.parentElement.parentElement.children[1].children[0]

   let oldquan =parseInt(quan.innerText)
   if(quan.innerText!="1"){
    quan.innerText =parseInt(quan.innerText)-1
    let totcal =parseInt(totPrice.innerText)/oldquan
    totPrice.innerText = totcal*parseInt(quan.innerText)
   }
//    for update josn data 
   let prodName = button.parentElement.parentElement.parentElement.parentElement.children[0].children[0]
   let getJsonData = JSON.parse(localStorage.getItem(prodName.innerText))
   getJsonData.quantity = parseInt(quan.innerText)
   getJsonData.price = parseInt(totPrice.innerText)
   localStorage.setItem(prodName.innerText,JSON.stringify(getJsonData))
}

const incItemQuantity = (button) => {
    let totPrice = button.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0]
    let quan  = button.parentElement.parentElement.children[1].children[0]
 
    let oldquan =parseInt(quan.innerText)
    if(quan.innerText!="9"){
     quan.innerText =parseInt(quan.innerText)+1
     let totcal =parseInt(totPrice.innerText)/oldquan
     totPrice.innerText = totcal*parseInt(quan.innerText)
    }
//    for update josn data 

    let prodName = button.parentElement.parentElement.parentElement.parentElement.children[0].children[0]
    let getJsonData = JSON.parse(localStorage.getItem(prodName.innerText))
    getJsonData.quantity = parseInt(quan.innerText)
    getJsonData.price = parseInt(totPrice.innerText)
    localStorage.setItem(prodName.innerText,JSON.stringify(getJsonData))

}








