function showCards() {
    
    let productList = localStorage.getItem('cart')
   
    if (productList !=null) {
        productList = JSON.parse(productList)     

        // delete elements and leave the shopping cart empty if localStorage == localstorage.clear

    } else {
        let nocart = document.createElement("h1")
        nocart.innerHTML = "Kundvagnen är tom."
    
        document.getElementById("summaContainer").style.display = "none"

        index = document.getElementById("index")
        index.appendChild(nocart)

    }
    // showTotal will show the final price.
    let showTotal = 0  

    
    //complete buy button that deletes products, reloads the page and saves purchase history
    
    document.getElementById("checkOutBtn").addEventListener("click", function(){
        
        alert("Tack för ditt köp!");
        
        let objectHistory
        objectHistory = localStorage.getItem("nocart")

        localStorage.clear();
        location.reload();

        localStorage.setItem("objectHistory" , objectHistory)

    })
    
        let removeValue = 0
        let buttonId = removeValue
    

    let belopp = document.getElementById("belopp")

    for (let i = 0; i < productList.length; i++) {

        let product = productList[i]

        //updates the final price each time a new product is added to the shopping cart.
        showTotal = showTotal + product.price

        let imgContainer = document.createElement("div")    
        let textContainer = document.createElement("div")

          
        let cardContainer = document.createElement("div")
        cardContainer.className = "cardContainer" 
        cardContainer.id = "cardContainer"

        let indexContainer = document.getElementById("index")


        let productImg = document.createElement("img")
        productImg.src = product.image

        let productTitle = document.createElement("h1")
        productTitle.innerHTML = product.title
          
        let productPrice = document.createElement("b")
        productPrice.innerHTML = product.price + " kr"
    

        //creates a button with a unique ID for each productcard. the button removes the product from the productList, updates local storage and reloads the page.
        
        function myDeleteButton() {

            let deleteBtn = document.createElement("button") 
            deleteBtn.id = removeValue
            buttonId = deleteBtn.id
            deleteBtn.className = "deleteBtn"
            deleteBtn.innerHTML = '<i class="far fa-trash-alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; delete </i>'
            cardContainer.appendChild(deleteBtn)

            deleteBtn.addEventListener("click", function removeProduct() {
                
            productList.splice(deleteBtn.id, 1)
            productList = JSON.stringify(productList)
            localStorage.setItem("nocart", productList)
            location.reload();
            
            })
            
        
        

        }
        myDeleteButton()

        imgContainer.className = "imgContainer"
        textContainer.className = "textContainer"
        productImg.className = "productImg"  
    
        indexContainer.appendChild(cardContainer)
        cardContainer.appendChild(imgContainer)
        imgContainer.appendChild(productImg)
        cardContainer.appendChild(textContainer)

    
        textContainer.appendChild(productTitle)
        textContainer.appendChild(productPrice)

    
        belopp.innerHTML = showTotal    

        removeValue ++

    }
    //shows the number of products in the shopping cart// kundvagnen
    
    document.getElementById("cartSpan").innerHTML = productList.length

    // removes elements and shows that the shopping cart is empty.

    if (productList.length < 1) {
        document.getElementById("summaContainer").style.display = "none"

        let nocart = document.createElement("h1")
        nocart.innerHTML = "Kundvagnen är tom."
        
        index = document.getElementById("index")
        index.appendChild(nocart)
    }
    
}   
showCards()