import { products } from "./products-list.js";

function renderProducts(){
    let ProductsHtml='';
products.forEach((product,index) => {
        const html=`
        <div class="view-products">
           <div>${product.purpose}</div>
           <div>${product.amount}</div>
           <button class="delete-button-js">
           Delete
           </button>
        </div>
        `;
        ProductsHtml+=html;

});
document.querySelector('.products-view').innerHTML=ProductsHtml;
if(products.length === 0){
    document.querySelector('.products-view').innerHTML=`
       <div class="empty-list-js">
       THE LIST IS EMPTY
       </div>
    `;
}

document.querySelectorAll('.delete-button-js')
 .forEach((deletebutton,index)=>{
    deletebutton.addEventListener('click',()=>{
        products.splice(index,1);
        localStorage.setItem('product',JSON.stringify(products));
        renderProducts();
    });
 });
    
}

renderProducts();


document.querySelector('.image-home-js')
.addEventListener('click',()=>{
  window.location.href="front-page.html";
 //window.open("front-page.html","_blank");
});


