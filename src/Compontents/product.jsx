import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import productsData from "../DataBase/AllProducts.json";
import Header from "../Compontents/header.jsx";

import { cartArray } from "../Arrays/CartArray.js";
import { useEffect, useRef, useState } from "react";

export function ProductElement({
  id,
  src,
  name,
  price,
  className = "product-link-2",
}) {
  return (
    <Link to={`/product/${id}`} className={className}>
      <div className="product-preview flex-col">
        <img src={src} alt="Product Image" />
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </Link>
  );
}

// For preview

export function ExpandProduct({ incCartCounter, decCartCounter }) {
  const { id } = useParams();
  const product = productsData.Products[id];
  let [selectedSize, updateSelectedSize] = useState(null);
  let [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSelectedItem = (index) => {
    updateSelectedSize(product.sizes[index]);
  };

  // const handleAddToCart = () => {
  //   if (selectedSize) {
  //     const item = {
  //       id: product.id,
  //       name: product.name,
  //       color: product.color,
  //       price: product.price * quantity,
  //       size: selectedSize,
  //       quantity: quantity,
  //       img: product.imgs[0],
  //     };

  //     cartArray.push(item);
  //     incCartCounter(parseInt(item.quantity));
  //     updateSelectedSize(null);
  //   } else {
  //     alert("Pick a Size First");
  //   }
  //   setQuantity(1);
  // };

  const handleAddToCart = () => {
    if (selectedSize) {
      const item = {
        id: product.id,
        name: product.name,
        color: product.color,
        price: product.price * quantity,
        size: selectedSize,
        quantity: parseInt(quantity),
        img: product.imgs[0],
      };

      let result = Exists(cartArray, item);
      console.log("isThere? " + result);
      if (result >= 0) {
        cartArray[result].quantity += parseInt(quantity);
        console.log("exists");
      } else {
        cartArray.push(item);
        console.log("new item");
      }
      incCartCounter(parseInt(item.quantity));
      updateSelectedSize(null);
    } else {
      alert("Pick a Size First");
    }
    setQuantity(1);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <div className="expanded-product-container">
        <div className="product-imgs-container">
          {product.imgs.map((e, i) => {
            return <img src={e} alt={product.name} key={i} />;
          })}
        </div>
        <div className="product-info-container">
          <h2>{product.genre}</h2>
          <h1>{product.name}</h1>
          <p className="product-rating">Rating {product.rating}/5</p>

          <p>${product.price.toFixed(2)}</p>
          <p>Color: {product.color}</p>

          <h3 className="sizes-header">Sizes</h3>
          <ProductSizes
            sizesArray={product.sizes}
            handleClick={handleSelectedItem}
            selectedSize={selectedSize}
          />
          <input
            type="number"
            min={1}
            max={10}
            onChange={handleQuantityChange}
            value={quantity}
          />
          <h3 className="sizes-header info-heading">Info</h3>
          <p>{product.description}</p>

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

function ProductSizes({ sizesArray, handleClick, selectedSize }) {
  return (
    <div className="product-sizes-container">
      {typeof sizesArray[0] === "string"
        ? sizesArray.map((e, i) => {
            let womenSize = e + 1.5;
            if (e === selectedSize) {
              return (
                <button
                  key={i}
                  className="size-button-focus"
                  onClick={() => handleClick(i)} // Passes index to handleButtonClick
                >
                  {e}
                </button>
              );
            }

            return (
              <button
                key={i}
                className="size-button"
                onClick={() => handleClick(i)} // Passes index to handleButtonClick
              >
                {e}
              </button>
            );
          })
        : sizesArray.map((e, i) => {
            let womenSize = e + 1.5;
            if (e === selectedSize) {
              return (
                <button
                  key={i}
                  className="size-button-focus"
                  onClick={() => handleClick(i)} // Passes index to handleButtonClick
                >
                  M{e} / W{womenSize}
                </button>
              );
            }

            return (
              <button
                key={i}
                className="size-button"
                onClick={() => handleClick(i)} // Passes index to handleButtonClick
              >
                M{e} / W{womenSize}
              </button>
            );
          })}
    </div>
  );
}

function Exists(array, element) {
  let current = null;
  console.log(element);
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    console.log(current);
    if (current.id == element.id && current.size == element.size) {
      return i;
    }
  }

  return -1;
}
