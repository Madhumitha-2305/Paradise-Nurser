import React from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
    description: "A beautiful and low-maintenance indoor plant."
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
    description: "An elegant plant that adds beauty to any room."
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
    description: "A useful succulent known for its soothing properties."
  },
  {
    id: 4,
    name: "Money Plant",
    category: "Indoor Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1614594575662-45f6e5b9d4f5?auto=format&fit=crop&w=500&q=80",
    description: "A popular indoor plant that is easy to grow."
  },
  {
    id: 5,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
    description: "A fast-growing plant perfect for indoor spaces."
  },
  {
    id: 6,
    name: "Jade Plant",
    category: "Succulents",
    price: 28,
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=500&q=80",
    description: "A beautiful succulent with thick green leaves."
  },
  {
    id: 7,
    name: "Cactus",
    category: "Succulents",
    price: 15,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
    description: "A hardy plant that requires very little maintenance."
  },
  {
    id: 8,
    name: "Areca Palm",
    category: "Outdoor Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=500&q=80",
    description: "A tropical palm that brings a fresh natural look."
  }
];

function ProductList({ onAddToCart }) {
  const addToCart = (plant) => {
    if (onAddToCart) {
      onAddToCart(plant);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = cart.find((item) => item.id === plant.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          ...plant,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${plant.name} added to cart!`);
    }
  };

  return (
    <div className="product-page">
      <div className="product-header">
        <h1>Paradise Nursery</h1>
        <h2>Our Plants</h2>
        <p>Choose from our collection of beautiful and healthy plants.</p>
      </div>

      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="product-image"
            />

            <div className="product-details">
              <h3>{plant.name}</h3>

              <p className="product-category">
                {plant.category}
              </p>

              <p className="product-description">
                {plant.description}
              </p>

              <p className="product-price">
                ${plant.price}
              </p>

              <button
                className="add-to-cart"
                onClick={() => addToCart(plant)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
