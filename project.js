const form = document.getElementById("product-form");

const titleElement = document.querySelector("#title");

const priceElement = document.querySelector("#price");

const urlElement = document.querySelector("#url");


//UI Objesini Başlatma
const ui = new UI();

const storage = new Storage();


// Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addProduct);

    document.addEventListener("DOMContentLoaded",function (){
        let products = storage.getProductsFromStorage();
        ui.loadAllProducts(products);
    });
}

function addProduct(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;
    //alanlara zorunluluk koymak, boş geçilmemesini sağlamak için
    if (title === "" || price === "" || url === ""){
        ui.displayMessage("Tüm alanların doldurulması zorunludur.","danger");
    } else {
        //yeni ürün
        const newProduct = new Product(title,price,url);
        ui.addProductToUI(newProduct); //arayüze yeni ürün ekleme
        storage.addProductToStorage(newProduct);
        ui.displayMessage("Ürün başarıyla eklenmiştir.","success");
    }
    ui.clearInputs(titleElement,urlElement,priceElement); //input alanları kayıt ettikten sonra temizlemek için

    e.preventDefault();
}

