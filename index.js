document.body.innerHTML = `

        <div class = "product-form">  
            <input class = "add-product-title" placeholder = "enter Product Name"/>
            <p aria-hidden="true">
                <span class="placeholder col-6"></span>
            </p>
            <input class = "add-product-image" placeholder ="Enter product pic url"/>
            <button onclick = "addProduct()">ADD PRODUCT</button>
        </div>
    <section class ="products-list">    
    </section>`;   




async function getProducts(){
    const data = await fetch("https://fakestoreapi.com/products",
      
        {method: "GET"    
    
    }
        ); // Return a Promise
    
    const products = await data.json();

    const productContainer = document.querySelector(".products-list");

    productContainer.innerHTML = ""; // To Erase the old List
            
    products.forEach((product) => {
        productContainer.innerHTML += `
        <div class ="product-container">
        <div>
            <img class ="image" src = "${product.image}" alt = "${product.id}" />  
        </div>                   
                <div class ="specs">
                    <p class ="product-title"> ${product.title}</p>
                    <p class ="product-price"> ${product.price}</p>
                    <p class ="product-category"> ${product.category}</p>
                    <p class ="product-description"> ${product.description}</p>
                    <button onclick = "toggleEdit(${product.id})">EDIT</button>
                    <button class ="bi-trash" onclick = "deleteProduct(${product.id})"><i class="bi bi-trash"></i> DELETE</button>
                    <div class = "edit-product-form edit-${product.id}">
                         <input class = "edit-${product.id}-product-title" placeholder = "Enter Product Name"/>
                         <input class = "edit-${product.id}-product-image" placeholder = "Enter Product Pic url"/>
                        <button onclick = "editProduct()"></i>EDIT PRODUCT</button>
                        
                   
                    </div>   
                
                </div>    
        `;
        
    });

    
    console.log(products);
}
getProducts();

async function deleteProduct(){
    console.log("deleting...");

    const data = await fetch(
        "https://fakestoreapi.com/products/1", 
      { method: "DELETE"}  
    );
        getProducts();
}
        async function addProduct(){
         console.log("adding...");
          
          const productTitle = document.querySelector(".add-product-title").value;
          const productImage = document.querySelector(".add-product-image").value;
          console.log(productTitle, productImage);

          // 1. method => POST
          // 2. data => body => stringify (JSON) // javascript object to json
        // 3. headers => json data

        const data = await fetch(
            "https://fakestoreapi.com/products",
            { method: "POST",
            headers: {"Content-Type": " application/json"},
            body: JSON.stringify({title: productTitle, image: productImage}),
        
            }
        );

            // addProducts => refresh the user list
           // getProducts();
           getProducts();
        }
        


        // DELETE => deleteProduct => fetch delete => Refreshing
        //  delete => Refresh the product list ( old list + new list)
        // delete old list then add new list

       function toggleEdit(productId){
            console.log("editing user...");
            const editProductForm = document.querySelector(`.edit-${productId}`);
            console.log(editProductForm.style.display);
            editProductForm.style.display = editProductForm.style.display == "block"? "none" : "block";
        
       }
       
               
        function saveProduct(productId){

            console.log("editing user...");
            const productTitle = document.querySelector(`.edit-${productId}-product-Title`).value;
            const productImage = document.querySelector(
                `.edit-${productId}-product-image`).value;
                console.log( productTitle, productImage);

                // const data = await fetch
            

        }