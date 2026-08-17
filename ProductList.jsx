import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Jade Plant",
    category: "Succulents",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Lavender",
    category: "Flowering Plants",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Money Plant",
    category: "Air Purifying Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setCart((previousCart) => ({
      ...previousCart,
      [product.id]: (previousCart[product.id] || 0) + 1,
    }));
  };

  const handleIncrease = (product) => {
    dispatch(addItem(product));

    setCart((previousCart) => ({
      ...previousCart,
      [product.id]: (previousCart[product.id] || 0) + 1,
    }));
  };

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="product-list-page">
      <header className="product-header">
        <h1>Paradise Nursery 🌱</h1>
        <p>Find the perfect plants for your home</p>
      </header>

      <main className="products-container">
        {categories.map((category) => (
          <section key={category} className="product-category">
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-info">
                      <h3>{product.name}</h3>

                      <p className="product-category-name">
                        {product.category}
                      </p>

                      <p className="product-price">
                        ${product.price.toFixed(2)}
                      </p>

                      {cart[product.id] ? (
                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              setCart((previousCart) => ({
                                ...previousCart,
                                [product.id]: Math.max(
                                  0,
                                  previousCart[product.id] - 1
                                ),
                              }))
                            }
                          >
                            -
                          </button>

                          <span>{cart[product.id]}</span>

                          <button
                            onClick={() => handleIncrease(product)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="add-to-cart-btn"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ProductList;
