function productPrice(productId){

    const elementId= document.getElementById(productId);
    const priceString= elementId.innerText;
    const price= parseInt(priceString);
    
    // return price;

    const totalValue=document.getElementById('total-price');

    const totalValueString= totalValue.innerText;
    const previousTotalValue= parseInt(totalValueString);

    const totalPrice= previousTotalValue+price;
    totalValue.innerText= totalPrice;
    document.getElementById('total').innerText= totalPrice;

}



       document.getElementById('coupon-code').addEventListener('keyup',function(event){

        const couponValue= event.target.value;

        if(couponValue =='SELL200'){
            document.getElementById("btn-coupon").removeAttribute('disabled');
        }
        
       })
        
        document.getElementById('btn-coupon').addEventListener('click', function(){
        const totalValue=document.getElementById('total-price');
        const totalValueString= totalValue.innerText;
        const previousTotalValue= parseInt(totalValueString);
        const discount= previousTotalValue*0.2;

        const grandTotal=previousTotalValue-discount;
        document.getElementById('discount').innerText= discount;
        document.getElementById('total').innerText= grandTotal;
    

         });
        


function product1(){
      const product1Price=  productPrice('price1');

      createElement('K. Accessories');
}

function product2(){

    const product2Price= productPrice('price2');

    createElement('K. Accessories 2')
}
function product3(){
    const product3Price= productPrice('price3');
    createElement('Home Cooker')
}




function createElement(productName){
    const element= document.getElementById('element-new');

    const count=element.childElementCount;

    const p= document.createElement('p');
    
    p.classList.add('mb-3')

    p.innerHTML=`${count+1}: ${productName}` 

    element.appendChild(p);

   
}


document.getElementById('btn-purchase').addEventListener('click',function(){
    const totalValue=document.getElementById('total');
    const totalValueString= totalValue.innerText;
    const total= parseInt(totalValueString);

    if(total==0){
        document.getElementById('btn-purchase').setAttribute('disabled',true);
    }
    else{
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
  
    document.getElementById('total').innerText= 0;
    document.getElementById('total-price').innerText= 0;
    document.getElementById('discount').innerText= 0;
    document.getElementById('coupon-code').value= '';
    document.getElementById('btn-coupon').setAttribute('disabled',true);
    document.getElementById('btn-purchase').setAttribute('disabled',true);

    const modal = document.getElementById('my_modal_1');
    modal.showModal();
})


function closeModal(){
    const modal = document.getElementById('my_modal_1');
    modal.close();
    window.location.reload();
}











