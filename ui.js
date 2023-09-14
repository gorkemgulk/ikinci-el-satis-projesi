function UI() {

}

UI.prototype.addProductToUI = function (newProduct) {

    const productList = document.getElementById("products");

    productList.innerHTML +=
        `<tr>
        <td><img src="${newProduct.url}" class="img-fluid img-thumbnail" style="width: 30%; height: 30%; "></td>
        <td>${newProduct.title}</td>
        <td>${newProduct.price}</td>
        <td><a href="#" id = "delete-product" class = "btn btn-danger">Ürünü Sil</a></td>
        </tr>`
}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";

}

UI.prototype.displayMessage = function (message,type){
    const cardBody = document.querySelector(".card-body") //ilk olanı seçer.

    //Alert Divini Oluşturma

    const div = document.createElement("div");
    div.className = `alert alert-${type}`
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function (){
        div.remove();
    },5000);
}

UI.prototype.loadAllProducts = function (products){
    const productList = document.getElementById("products");

    products.forEach(function (product){
            productList.innerHTML +=
                `<tr>
        <td><img src="${product.url}" class="img-fluid img-thumbnail" style="width: 30%; height: 30%; "></td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td><a href="#" id = "delete-product" class = "btn btn-danger">Ürünü Sil</a></td>
        </tr>`
    });
}


UI.prototype.deleteProductFromUI = function (element) {
    //silme işlemi ebeveynde olacak. td üstündeki tr ebeveyni
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllProductsFromUI = function (){
    const productList = document.getElementById("products") //elemanların hepsini seçmek için

    // productList.innetHTML = "";

    while(productList.firstElementChild !== null){
        productList.firstElementChild.remove();
    }
}
