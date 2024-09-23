// 1function to load all the Items (loading all the products)
document.addEventListener("DOMContentLoaded",()=>{
    // 🎯step1: loading all the buttons to apply the Functionalities
    let addtocartBtn=document.querySelectorAll(".add-to-cart")
    // console.log(addtocartBtn)

    // 🎯step2 :adding the functionality for buttons
    addtocartBtn.forEach((btn)=>{
        // console.log("btn",btn)
        btn.addEventListener("click",(e)=>{
            let productinfo =btn.parentElement.parentElement.parentElement
            let Ptitle=productinfo.querySelector(".prod-title").innerText ;
            let Pprice=productinfo.querySelector(".price").innerText ;
            let PImage=productinfo.querySelector(".prod-img").src ;
            // let pdescription=productinfo.querySelector(".pdescription").innerText //optional

            // creating an object for selected Items 
            let selectedProd={
                 title:Ptitle,
                 Price:Pprice,
                 image:PImage,
                 quantity:1
            };

            AddtoCart(selectedProd)
        })
    })
})



// empty array to store cart Items 
let cartItems=[]

// 😎😎2.function to add to cart

function AddtoCart(product){
   let existingItems=cartItems.find((item)=>item.title === product.title)
   if(existingItems){
    existingItems.quantity++
   }else{
    cartItems.push(product)
   }

//    adding items to localstorage for further peristance
 localStorage.setItem("cart",JSON.stringify(cartItems))
 UpdateCartIconValue()

}

// 3.function to calculate the icon total
function UpdateCartIconValue(){
    let IconVal=document.querySelector(".icon-val")
    let Iconvalue=cartItems.reduce((total,ele)=>total+ele.quantity,0)
    //    updating the Icon
    IconVal.innerText=Iconvalue
}

function LoadCart(){
    let cartvalues=localStorage.getItem("cart")
    if(cartvalues){
        cartItems=JSON.parse(cartvalues)
        UpdateCartIconValue()
    }
}
LoadCart()
// 3function to display the Items added in the cart(inside cart-page)
// 4function to  increment the quantity of product
// 5function to  decrement the quantity of product
// 6function to  delete product
// 7function to  remove all  products
// 8function to calculate the total 
// 9