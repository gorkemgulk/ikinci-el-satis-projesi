function Storage(){
    Storage.prototype.addProductToStorage = function (newProduct){
        let products = this.getProductsFromStorage();
        products.push(newProduct);
        localStorage.setItem("products",JSON.stringify(products));
    }
}

Storage.prototype.getProductsFromStorage = function (){

    let products;

    if(localStorage.getItem("products") ===null){
        products = [];
    } else {
        products = JSON.parse(localStorage.getItem("products"));
    }
    return products;
}