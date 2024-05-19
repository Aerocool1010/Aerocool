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
        name: 'Carrier Optima Green (WCARZ006E1)',
        image: 'WT1.png',
        details1:'0.5HP',
        details2:'R410A Eco-Friendly Refrigerant',
        details3:'Top Discharge',
        details4:'Energy Savings Plug',
        details5:'12-Hour OFF Timer',
        details6:'Optime Green',
        details7:'Multi - Pore Filter',
        details8:'',
        details9:'',
        price: 10998
    },
    {
        id: 2,
        name: 'Condura 6S (WCONZ006EC1)',
        image: 'WT2.png',
        details1:'0.5 HP',
        details2:'R410A Eco - Friendly Refrigerant',
        details3:'Top Discharge',
        details4:'12 - Hour On/Off Timer',
        details5:'Easy Access Filter',
        details6:'Multi-Pore Indoor Air Filter',
        details7:'Plastic Base Pan',
        details8:'2 Speed Cooling',
        details9:'2 - Way Air Flow Cooling',
        price: 9998
    },
    {
        id: 3,
        name: 'LG LA250GC2',
        image: 'WT3.png',
        details1:'2.5 HP',
        details2:'Dual Inverter Compressor',
        details3:'kW Manager',
        details4:'LG ThinQ',
        details5:'Auto Clean',
        details6:'Filter Alarm Function',
        details7:'Top Discharge Even Air Flow',
        details8:'',
        details9:'',
        price: 47998
    },
    {
        id: 4,
        name: 'Kolin KAM - 55CMC32',
        image: 'WT4.png',
        details1:'0.5 HP',
        details2:'EER Rating: 10.6',
        details3:'Compact Size',
        details4:'Air Fresh Filter',
        details5:'R32 Refrigerant',
        details6:'Electrostatic Filter',
        details7:'High-Quality Motor',
        details8:'Horizontal Auto Swing',
        details9:'3 minutes Compressor Delay',
        price: 9498
    },
    {
        id: 5,
        name: 'Carrier Compact Inverter (WCARH009EEVC2)',
        image: 'WT5.png',
        details1:'1 HP',
        details2:'R410A Refrigerant',
        details3:'EER Rating: 4.05 CSPF',
        details4:'Turbo Mode Activates Faster Cooling',
        details5:'Inverter',
        details6:'Econo Feature',
        details7:'24 - hour Timer',
        details8:'Sleep Mode',
        details9:'8-in-1 Air Filter Technology',
        price: 27998
    },
    {
        id: 6,
        name: 'Carrier Aura Inverter, Side Discharge (WCARJ009EEV)',
        image: 'WT6.png',
        details1:'1.0 HP',
        details2:'11.7 kJ/WH Energy Efficiency Ratio (EER)',
        details3:'8-in-1 Air Filter Technology',
        details4:'Econo Feature',
        details5:'Sleep Mode',
        details6:'Timer Settings',
        details7:'',
        details8:'',
        details9:'',
        price: 37100
    },
    {
        id: 7,
        name: 'Carrier Aura Non-Inverter Top Discharge (WCARK010EE)',
        image: 'WT7.png',
        details1:'1.0 HP',
        details2:'Econo Feature',
        details3:'Sleep Mode',
        details4:'Timer settings',
        details5:'High EER at 10.6 kJ/WH (1HP) ',
        details6:'Multi-Pore Air Filter keeps dust and pollution away',
        details7:'With Remote Control',
        details8:'',
        details9:'',
        price: 21100
    },
    {
        id: 8,
        name: 'Carrier Aura Plus Side Discharge (WCARJ010EEC3)',
        image: 'WT8.png',
        details1:'1.0HP',
        details2:'High energy efficiency ratio at 12.2',
        details3:'Econo Feature',
        details4:'12-hour Off Timer',
        details5:'Sleep Mode',
        details6:'Turbo Mode',
        details7:'8-in-1 Air Filter Technology',
        details8:'R410A Refrigerant',
        details9:'',
        price: 25200
    },
    {
        id: 9,
        name: 'TCL TAC - 09CWI/UJE',
        image: 'WT9.png',
        details1:'1 HP',
        details2:'Inverter',
        details3:'Quiet Operation',
        details4:' Smart Control',
        details5:'Hydrophilic Coated Fins',
        details6:'Eco R32-Refrigerant',
        details7:'EER Rating: 13.6',
        details8:'2600 Watts',
        details9:'',
        price: 18998
    },
    {
        id: 10,
        name: ' Panasonic CW-U923JPH-W',
        image: 'WT10.png',
        details1:'1HP',
        details2:'Inverter',
        details3:'Anti Bacterial Filter',
        details4:'Equipped DC Inverter Motor with a Higher CSPF ',
        details5:'Compact Size',
        details6:'Clean and Classic Design',
        details7:'',
        details8:'',
        details9:'',
        price: 26498
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
