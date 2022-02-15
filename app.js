function onclick(btnName, btnId , price) {

    document.getElementById(btnName).addEventListener('click', function () {
        updatePrice(btnId, price);

    })
}


onclick('sixteenGB', 'memory-cost', 200);
onclick('eightGB', 'memory-cost', 0);
onclick('ssd1', 'storage-cost', 0);
onclick('ssd2', 'storage-cost', 300);
onclick('ssd3', 'storage-cost', 500);
onclick('paid-delivery', 'delivery-cost', 20);
onclick('free-delivery', 'delivery-cost', 0);


function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice)

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

document.getElementById('apply-btn').addEventListener('click',function(){
    const voucher = 'hero';
    const promoInput = document.getElementById('promo-input').value;
    let total = document.getElementById('total-price');
    
    if(promoInput == voucher){
        const discount = parseInt(total.innerText) * 0.2;
        const newTotal = parseInt(total.innerText) - discount;
        total.innerText = newTotal;
        document.getElementById('promo-input').value = '';
        document.getElementById('applied-text').style.display = 'block'; 
        document.getElementById('incorrect-text').style.display = 'none'; 
    }
    else{
        document.getElementById('promo-input').value = '';
        document.getElementById('incorrect-text').style.display = 'block'; 
        document.getElementById('applied-text').style.display = 'none'; 
    }
    
})