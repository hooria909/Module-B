
const mainStoreInventory = [
{ name: "Laptop", price: 1200, stock: 5 },
{ name: "Mouse", price: 25, stock: 0 },
{ name: "Keyboard", price: 100, stock: 12 }
];
const acquiredStoreInventory = [
{ name: "Monitor", price: 300, stock: 8 },
{ name: "Headphones", price: 50, stock: 0 },
{ name: "Webcam", price: 75, stock: 20 }
];



const unifiedInventory = [...mainStoreInventory,...acquiredStoreInventory];

console.log(unifiedInventory);

const inStockItems = unifiedInventory.filter(acessories => acessories.stock>0)

console.log(inStockItems);

const discountedInventory = inStockItems.map(acessories =>{
    return{
        name: acessories.name,
        price: acessories.price * 0.9,
        stock: acessories.stock,
    };
})

console.log(discountedInventory);

const totalMonetaryValue = discountedInventory.reduce((sum,acessories) => {
    return sum + (acessories.price * acessories.stock);
},0)

console.log("Total Monetary Value :" + totalMonetaryValue);

