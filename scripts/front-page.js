import { products } from "./products-list.js";

 let total= JSON.parse(localStorage.getItem('key'))||0;
function displayamount(){
  document.querySelector('.total-amount-js')
  .innerHTML=`TOTAL AMOUNT YOU HAVE: ${total} RUPEES`; 
} 

function calculateamount(){
  total+=Number(document.querySelector('.total-input-js')
  .value);
  if(total<0){
    total=0;
  }
  localStorage.setItem('key',JSON.stringify(total));
  displayamount();
 document.querySelector('.total-input-js')
  .value='';
}
document.querySelector('.total-button-js')
  .addEventListener('click',()=>{
    calculateamount();
  });
document.querySelector('.total-input-js')
.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    calculateamount();
  }
});  

 displayamount();



 function productList(){
  let productItem=document.querySelector('.product-input-js').value;
  let productAmount=Number(document.querySelector('.amount-input-js').value);
  let count=0;
  total-=productAmount;
  if(total<0){
    total+=productAmount;
    document.querySelector('.warning-amount-js')
    .innerHTML="YOU DON'T HAVE ENOUGH MONEY";
   setTimeout(()=>{
    document.querySelector('.warning-amount-js')
    .innerHTML='';
    },2000);
  }
  else{

    products.forEach((product)=>{
      if(product.purpose === productItem){
        product.amount+=productAmount;
        count++;
      }
});
if(count===0){
   products.push({
     purpose:productItem,
     amount:productAmount
   })
}

  displayamount();

  }
  localStorage.setItem('key',JSON.stringify(total));
 }


 document.querySelector('.product-button-js')
 .addEventListener('click',()=>{
  productList();
  document.querySelector('.product-input-js').value='';
  document.querySelector('.amount-input-js').value='';
  localStorage.setItem('product',JSON.stringify(products));
 });

document.querySelector('.save-button')
.addEventListener('click',()=>{
  window.location.href="product-page.html";
 //window.open("product-page.html","_blank");
});

function enterProductList() {
  document.querySelector('.amount-input-js')
    .addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const item = document.querySelector('.product-input-js').value;
        const money = Number(document.querySelector('.amount-input-js').value);
        if (item !== '' && money !== 0) {
          productList();
          document.querySelector('.product-input-js').value='';
          document.querySelector('.amount-input-js').value='';
          localStorage.setItem('product',JSON.stringify(products));
        }
      }
    });
}

enterProductList();
