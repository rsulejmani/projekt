var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}

function initSite() {
    loadProducts();

     // This would also be a good place to initialize other parts of the UI
}



function addProductsToWebpage() {
    // Sparar produktlistan i en variabel

    var main = document.getElementsByTagName("main")[0];

    for (var i = 0; i < listOfProducts.length; i++) {
        var container = createCartContainer(listOfProducts[i]);
        main.appendChild(container)
        var cart = listOfProducts[i]

    //console.log(listOfProducts);
}

function createCartContainer(cart) {
    console.log(cart)
    var cartContainer = document.createElement("div")
    cartContainer.classList.add("cartContainer")

    var cartText = document.createElement("h1")
    cartText.innerText = cart.title;
    cartContainer.appendChild(cartText)

    //crea descrizione
    var cartDescription = document.createElement("p")
    cartDescription.innerText =cart.description;
    cartContainer.appendChild(cartDescription)

    //creo container per img
    var imgeContainer = document.createElement("div")
    imgeContainer.classList.add("imgeContainer")
    cartContainer.appendChild(imgeContainer)


    var cartImg = document.createElement("img")
    cartImg.src = "./assets/" + cart.image
    cartImg.classList.add("productImg")
    imgeContainer.appendChild(cartImg)

    // //prezzo cont

    var priceContainer = document.createElement("p")
    priceContainer.innerText = cart.price + "euro"
    cartContainer.appendChild(priceContainer)

    // //bottoncino

    var buttonContainer = document.createElement("div")
    buttonContainer.classList.add("buttonContainer")
    cartContainer.appendChild(buttonContainer)

    var addToCartButton = document.createElement('button')
    addToCartButton.title = cart.title;
    buttonContainer.addEventListener("click", function () {
        addToCart(products)
    });
    buttonContainer.appendChild(addToCartButton)

    // //buttontext
    var buttontext = document.createElement("p")
    buttontext.innerText = "làgg till i kundvanen"
    buttontext.classList.add("Nav")
    addToCartButton.appendChild(buttontext)

    // //button icon

    var buttonIcon = document.createElement("i")
    buttonIcon.className = "cart2 fas fa-cart-arrow-down";
    addToCartButton.appendChild(buttonIcon)

    return cartContainer

    LocalStorage()
}
}

/*
function addToCart(product) {
    let cart = localStorage.getItem("cart")

    if(cart) {
        cart = JSON.parse(cart)
    } else {
        cart = []
    }



    let i = cart.findIndex(index => index.product.title == product.title)

    i >= 0
        ? cart[i].quantity++
        : cart.push({
            product: product,
            quantity: 1
        })

    localStorage.setItem("cart", JSON.stringify(cart))
    getNumProducts()
}
*/

function LocalStorage(){
    let cartItems = localStorage.getItem("cart")
    cartItems = JSON.parse(cartItems)

    if (cartItems) {
        document.getElementById("cart").innerHTML = cartItems.length


    }
}


function setItems(cart){

    let cartItems = localStorage.getItem("cartInCart")


    if(cartItems !=null){
        cartItems = JSON.parse(cartItems)

    }else{
        cart.inCart = 1
        cartItems = []

    }

    cartItems.push(cart)

    // pushar in product i array

    document.getElementById("cart").innerHTML = cartItems.length


    localStorage.setItem("cartInCart", JSON.stringify(cartItems))
    //saves a key and converts from object to string so it can save in localStorage
}
