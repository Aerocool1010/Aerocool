let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Samsung AR13BYHAMWKNTC',
        image: 'ST1.png',
        details1:'1.5 HP',
        details2:'EER Rating: 14.26',
        details3:'WindFree Technology',
        details4:'Fast Cooling',
        details5:'Easy Filter Plus',
        details6:'Quiet Mode',
        details7:'DuraFin',
        details8:'Single User Mode',
        details9:'R32 Refrigerant',
        price: 35995
    },
    {
        id: 2,
        name: 'Panasonic CS/CU XU9XKQ',
        image: 'ST2.png',
        details1:'1 HP',
        details2:'EER Rating: 14.34',
        details3:'Nanoe-X Technology',
        details4:'Built-in Wi-Fi System',
        details5:'iAUTO-X with Humidity Sensor',
        details6:'ECONAVI Balances Energy Savings up to 20',
        details7:'',
        details8:'',
        details9:'',
        price: 39498
    },
    {
        id: 3,
        name: 'Carrier Optima 2 NonInverter (FP-53CGF009308-1)',
        image: 'ST3.png',
        details1:'1.0 HP ',
        details2:'Highest EER among non-inverters',
        details3:'Temperature Control Sensor with “Follow Me” setting',
        details4:'Noise Reduction Technology',
        details5:'Bio-filters',
        details6:'',
        details7:'',
        details8:'',
        details9:'',
        price: 29600
    },
    {
        id: 4,
        name: 'Panasonic CS/CU-XU18AKQ',
        image: 'ST4.png',
        details1:'2 HP',
        details2:'Nanoe X Technology with Mark 3 Generator',
        details3:'Built-in Easy Connect Wi-Fi System',
        details4:'Auto adjust to the optional eco',
        details5:'Auto - X Provides Stronger & Faster Cooling',
        details6:'Humidity Control with Humidity Sensor + Dry Mode',
        details7:'AI Eco',
        details8:'1/260 W',
        details9:'1-Phase / 230VAC / 60 Hz ',
        price: 60998
    },
    {
        id: 5,
        name: 'Carrier Alpha Inverter 53GCVBE010-303P  ',
        image: 'ST5.png',
        details1:'Split-type ',
        details2:'1.0HP',
        details3:'',
        details4:'',
        details5:'',
        details6:'',
        details7:'',
        details8:'',
        details9:'',
        price: 36500
    },
    {
        id: 6,
        name: 'Carrier Aura Inverter,',
        image: 'ST6.png',
        details1:'1.0 HP',
        details2:'Full DC Inverter with Eco-Gear',
        details3:'Intelligent eye sensors ',
        details4:'reduce energy consumption when no presence',
        details5:'is detected in the room.',
        details6:'',
        details7:'',
        details8:'',
        details9:'',
        price: 39800
    },
    {
        id: 7,
        name: 'Carrier Crystal 2 Inverter FP-53GCVBS010-303P',
        image: 'ST7.png',
        details1:'1.0 HP',
        details2:'Unique Magic Coil ',
        details3:'that protects against oil and dust',
        details4:'Self Cleaning Function',
        details5:'that prevents mold & germs build-up',
        details6:'',
        details7:'',
        details8:'',
        details9:'',
        price: 39800
    },
    {
        id: 8,
        name: 'Carrier Neo, Inverter Split-type Air Conditioner',
        image: 'ST8.png',
        details1:'1.0HP',
        details2:'With the Carrier Neo',
        details3:'your AC can be in any color* you like! ',
        details4:'This all-new designer series features',
        details5:'a fabric-panel grill in two color options - ',
        details6:'Tahitian Grey &',
        details7:'Onyx Grey',
        details8:'',
        details9:'',
        price: 54000
    },
    {
        id: 9,
        name: 'LG HS12IBA',
        image: 'ST9.png',
        details1:'1.5HP',
        details2:'Dual Inverte',
        details3:'Smart Diagnosis',
        details4:'70% Energy Saving',
        details5:'Auto Cleaning',
        details6:'Jet Cool Operation',
        details7:'Quick and Easy Installation',
        details8:'Matt Design',
        details9:'1,150 Watts',
        price: 38398
    },
    {
        id: 10,
        name: 'Midea FP - 53ST015KEIV - F4',
        image: 'ST10.png',
        details1:'1.5HP',
        details2:'Inverter, Basic, Flash Cooling',
        details3:'Cooling Capacity: 12660 kJ/hr',
        details4:'Rated Input Power: 1150 W',
        details5:'Cold Catalyst Filter',
        details6:'Energy Saving - Eco Mode',
        details7:'Sleep Mode',
        details8:'Timer',
        details9:'',
        price: 26998
    },
    

];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="details1">${value.details1}</div>
            <div class="details2">${value.details2}</div>
            <div class="details3">${value.details3}</div>
            <div class="details4">${value.details4}</div>
            <div class="details5">${value.details5}</div>
            <div class="details6">${value.details6}</div>
            <div class="details7">${value.details7}</div>
            <div class="details8">${value.details8}</div>
            <div class="details9">${value.details9}</div>
            <div class="price">${'₱'+value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${'₱'+value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

