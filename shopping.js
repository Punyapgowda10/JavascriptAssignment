let products = [
    {
        id: 1,
        name: "white Tshirt",
        size: "L",
        color: "white",
        price: 1200,
        image: "product9.jpg",
        description:"Good looking white tshirt",
    },
    {
        id: 2,
        name: "Black Shirt",
        size: "M",
        color: "Black",
        price: 1500,
        image: "product1.jpg",
        description:"Good looking black Shirt",
    },
    {
        id: 3,
        name: "checked Shirt",
        size: "S",
        color: "white & Black",
        price: 900,
        image: "product7.jpg",
        description:"Good looking checked Shirt",
    },
    {
        id: 4,
        name: "Black Female Blazer",
        size: "M",
        color: "Black",
        price: 3000,
        image: "product14.jpg",
        description:"Beautifull Blazer",
    },
    {
        id: 5,
        name: "Navy Blue Top",
        size: "S",
        color: "Blue",
        price: 1300,
        image: "product13.webp",
        description:"Good looking Top",
    },
    {
        id: 6,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product12.jpg",
        description:"Good looking Traditional Dress",
    },
  ];

  cart = [];

  function displayProducts(productsData, who = "productwrapper"){
      let productsString = "";

      productsData.forEach(function (product, index) {
          let { id, name, image, color, description, price, size } = product;

          if(who == "productwrapper") {
              productsString += ` <div class="product">
                <div class="prodimg">
                  <img src="productimages/${image}" width="100%" />
                </div>
                <h3>${name}</h3>
                <p>Price : ${price}$</p
                <p>size : ${size}</P>
                <p>Color : ${color}</p>
                <p>${description}</p>
                <p>
                  <button onclick="addToCart(${id})">Add to Cart</button>
                </P>
              </div>`;
            } else if (who == "cart") {
              productsString += `<div class="product">
                <div class="prodimg">
                  <div src="productimages/${images}"  width="100%" />
                </div>
                <h3>${name}</h3>
                <p>Price : ${price}$</p>
                <p>size : ${size}</P>
                <p>Color : ${color}</p>
                <p>${description}</p>
                <p>
                  <button onclick="removeFromCart(${id})">Remove From Cart</button>
                </P>
              </div>`;
            }
        });

        document.getElementById(who).innerHTML = productsString;
    }

    displayProducts(products);

    function searchProduccts(searchValue) {
        let searchedProducts = products.filter(function (product, index){
          let searchString =
            product.name + " " + product.color + " " + product.description;

          return searchString.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1;
        });

        displayProducts(searchProduccts);
    }



    function getproductByID(productArray, id) {
      return productArray.find(function (product) {
        return product.id == id;
      });
    }

    function addToCart(id) {

        let pro = getproductByID(products, id);

        cart.push(pro);
        displayProducts(cart, "cart");
    }

    function removeFromCart(id) {

        let index = cart.findIndex(function (product) {
          return product.id == id;
        });


        cart.splice(index, 1);
        displayProducts(cart, "cart");
    }
 