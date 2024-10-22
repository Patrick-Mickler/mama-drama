/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

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