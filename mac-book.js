function calculation(){
    const memory = parseInt(document.getElementById('memory-cost').innerText);
    const storage = parseInt(document.getElementById('storage-cost').innerText);
    const delivery = parseInt(document.getElementById('delivery-cost').innerText);


    document.getElementById('pomo-save').innerText = document.getElementById('total-cost').innerText = memory + storage + delivery + 1299 ;
}

document.getElementById('8GB-memory').addEventListener('click',function(){
    document.getElementById('memory-cost').innerText = 0;
    calculation();
    
})

document.getElementById('16GB-memory').addEventListener('click',function(){
    document.getElementById('memory-cost').innerText = 180;
    calculation();
    
})
document.getElementById('256GB-SSD').addEventListener('click',function(){
    document.getElementById('storage-cost').innerText = 0;
    calculation();
    
})
document.getElementById('512GB-SSD').addEventListener('click',function(){
    document.getElementById('storage-cost').innerText = 100;
    calculation();
    
})
document.getElementById('1TB-SSD').addEventListener('click',function(){
    document.getElementById('storage-cost').innerText = 180;
    calculation();
    
})
document.getElementById('free-delivery').addEventListener('click',function(){
    document.getElementById('delivery-cost').innerText = 0;
    calculation();
    
})
document.getElementById('urgent-delivery').addEventListener('click',function(){
    document.getElementById('delivery-cost').innerText = 20;
    calculation();
    
})

document.getElementById('pomo-btn').addEventListener('click', function(){
    const code = document.getElementById('pomo-code');
    if(code.value == 'msi-sumon'){
        let FinalCost =  parseInt(document.getElementById('pomo-save').innerText);
        FinalCost = FinalCost - ((FinalCost * 20) / 100);
        document.getElementById('pomo-save').innerText = FinalCost;
    }
    code.value = "";
})