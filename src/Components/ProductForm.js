import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ProductForm = () => {
  const { addToCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToCart = () => {
    const newItem = {
      name,
      description,
      price,
      quantity,
      size,
    };

    setSelectedItems((prevItems) => [...prevItems, newItem]);

    // Clear form fields
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setSize("");
  };

  const handleCheckout = () => {
    selectedItems.forEach((item) => addToCart(item));

    // Clear selected items
    setSelectedItems([]);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>

        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>

        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="large">Large</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
          </select>
        </label>

        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </form>

      <h2>Selected Items</h2>
      {selectedItems.length === 0 ? (
        <p>No items selected.</p>
      ) : (
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
            </li>
          ))}
        </ul>
      )}

      {selectedItems.length > 0 && (
        <button type="button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default ProductForm;
