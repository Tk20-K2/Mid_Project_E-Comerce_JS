let cartButton =document.getElementById('cart-button')
// localStorage.setItem("data" , "[]") 

function addToCartBtn(){
    var a =
                    {
                        "name":storageData.name,
                        "disc":storageData.disc,
                        "price":parseInt(storageData.price)*parseInt(quantspan.innerText),
                        "src":storageData.picture,
                        "quantity":quantspan.innerText,
                        "isCheckOut":false
                    }
    
                
    // a.push(JSON.parse(localStorage.getItem('data')));
    // localStorage.setItem('data', JSON.stringify(a));
    localStorage.setItem(storageData.name, JSON.stringify(a))
    console.log(localStorage.length)

    let countCartItems = document.getElementById('count-cart-items')
    countCartItems.innerText=localStorage.length

    if(countCartItems.innerText=="0"){
        countCartItems.style.display="none"
      }
      else{
        countCartItems.style.display="flex"
      }
}
