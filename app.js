let productCountEl = document.getElementById("product-count");
console.log(productCountEl)

let addToCatrButtons = document.querySelectorAll(".add-count");
console.log(addToCatrButtons)

 for(let i = 0;i<addToCatrButtons.length;i++){
 	addToCatrButtons[i].addEventListener("click",function(){
 		
 		let prevProductsCount = +productCountEl.textContent;
 		productCountEl.textContent = prevProductsCount + 1;
 	})
 }

let addLike = document.querySelectorAll(".hurt");
console.log(addLike)

 for(let i=0;i<addLike.length;i++)
 	addLike[i].addEventListener("mousedown",myFunction);
  function myFunction(){
  	this.style.background ="url(hurt2.png)"}

  
