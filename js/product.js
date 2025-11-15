const activeList =document.querySelectorAll(".items-combo");
activeList[0].classList.add("items-acti")
activeList.forEach((e)=>{
   e.addEventListener("click",()=>{
      activeList.forEach((items)=>{
         items.classList.remove("items-acti")
      })
      e.classList.add("items-acti")
   })
})


const proall = document.querySelector(".product");
const sangtrong = document.querySelector(".product-sangtrong");
const codien = document.querySelector(".product-codien");
const hiendai = document.querySelector(".product-hiendai");
activeList[0].addEventListener("click",()=>{
    proall.style.display="block";
    hiendai.style.display="none";
    codien.style.display="none";
    sangtrong.style.display="none"
})
activeList[1].addEventListener("click",()=>{
    proall.style.display="none";
    hiendai.style.display="none";
    codien.style.display="none";
    sangtrong.style.display="block"
})
activeList[2].addEventListener("click",()=>{
    proall.style.display="none";
    sangtrong.style.display="none";
    codien.style.display="none";
    hiendai.style.display="block"
})
activeList[3].addEventListener("click",()=>{
    proall.style.display="none";
    sangtrong.style.display="none";
    codien.style.display="block";
    hiendai.style.display="none";
})

//// phan them gio hang

const listButton = document.querySelectorAll(".add-cart");

var listProduct = [];

listButton.forEach((e) => {
    e.addEventListener("click", () => {
        var validateLogin = localStorage.getItem('Login')==='true';
        if(validateLogin){
            const parent = e.closest(".card");
            const linkImg = parent.querySelector("img").getAttribute("src");
            const productName = parent.querySelector(".card-title").textContent;
            const productPrice = parent.querySelector(".card-text").textContent;
    
            var product = {
                Image: linkImg,
                prName: productName,
                prPrice: productPrice
            };
    
            listProduct.push(product);
    
            var productJson = JSON.stringify(listProduct);
    
            localStorage.setItem('listProduct', productJson);
        }
        else{
            $("#sign-in").modal("show")
        }

        
    });
});
