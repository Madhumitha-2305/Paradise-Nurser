import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1620127252536-03bdfcb27f75?auto=format&fit=crop&w=400&q=80', cost: '$18.00' },
      { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=400&q=80', cost: '$15.00' },
      { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1616501268209-edfff098d5c4?auto=format&fit=crop&w=400&q=80', cost: '$22.00' },
      { name: 'Areca Palm', image: 'https://images.unsplash.com/photo-1587592299680-ae2f2f7c9b0e?auto=format&fit=crop&w=400&q=80', cost: '$28.00' },
      { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1597055181300-e3633a108f96?auto=format&fit=crop&w=400&q=80', cost: '$16.00' },
      { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1613737693022-4c9b6d3a3e7c?auto=format&fit=crop&w=400&q=80', cost: '$24.00' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Echeveria', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80', cost: '$10.00' },
      { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=400&q=80', cost: '$12.00' },
      { name: 'Jade Plant', image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=400&q=80', cost: '$14.00' },
      { name: 'Haworthia', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80', cost: '$11.00' },
      { name: 'Sedum', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80', cost: '$9.00' },
      { name: 'Panda Plant', image: 'https://images.unsplash.com/photo-1519336056116-bda898f92d3a?auto=format&fit=crop&w=400&q=80', cost: '$13.00' },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Orchid', image: 'https://images.unsplash.com/photo-1524598171348-0a41369cfa27?auto=format&fit=crop&w=400&q=80', cost: '$30.00' },
      { name: 'African Violet', image: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=400&q=80', cost: '$14.00' },
      { name: 'Hibiscus', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80', cost: '$20.00' },
      { name: 'Begonia', image: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?auto=format&fit=crop&w=400&q=80', cost: '$17.00' },
      { name: 'Geranium', image: 'https://images.unsplash.com/photo-1587334207806-7c8752e5c6cf?auto=format&fit=crop&w=400&q=80', cost: '$15.00' },
      { name: 'Kalanchoe', image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=400&q=80', cost: '$12.00' },
    ],
  },
];

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <span onClick={onHomeClick} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          🌿 Paradise Nursery
        </span>
        <div className="nav-links">
          <span onClick={onHomeClick}>Home</span>
          <span>Plants</span>
          <span className="cart-icon" onClick={onCartClick}>
            🛒 Cart <span className="cart-count">{totalQuantity}</span>
          </span>
        </div>
      </nav>

      <div className="product-list-container">
        {plantsData.map(section => (
          <div key={section.category}>
            <h2 className="category-title">{section.category}</h2>
            <div className="plant-grid">
              {section.plants.map(plant => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.cost}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={!!addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
