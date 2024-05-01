function productPrice(productId){

    const elementId= document.getElementById(productId);
    const priceString= elementId.innerText;
    const price= parseInt(priceString);
    return price;
}

function product1(){
      const product1Price=  productPrice('price');

      createElement('K. Accessories');
}


function createElement(productName){
    const element= document.getElementById('element-new');

    const count=element.childElementCount;

    const p= document.createElement('p');
    
    p.classList.add('mb-3')

    p.innerHTML=`${count+1}: ${productName}` 

    element.appendChild(p);

   
}




