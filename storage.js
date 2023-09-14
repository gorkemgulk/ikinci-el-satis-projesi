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


Storage.prototype.deleteProductFromStorage = function (productTitle){

    let products = this.getProductsFromStorage();
    products.forEach(function (product,index){
       products.splice(index,1); // sadece seçilen elemanı silmek için

        localStorage.setItem("products",JSON.stringify(products)); //local storageı güncellemek için
    });
}


Storage.prototype.clearAllProductsFromStorage = function (){
    localStorage.removeItem("products");
}