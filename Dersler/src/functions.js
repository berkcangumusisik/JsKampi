function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi: ürün: " + productName + " adet: " +quantity)
}

addToCart()
addToCart("Yumurta",10)
addToCart(10)

let sayHello = () => {
    console.log("Hello World");
}

sayHello();

let sayHello2 = function() {
    console.log("Hello World");
}

sayHello();