let cart = []
let btn = document.querySelector('#tf-ion-android-cart')
let subTotal = document.querySelector('#total-price')

btn.addEventListener('click', addToCart())


function addToCart(){
    btn.addEventListener('click',(pushToArry)=>{
      cart.push('btn')
      console.log(cart)
  
    })
  }