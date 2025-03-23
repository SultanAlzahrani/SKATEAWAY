import { useState } from "react";
import AllProducts from "../DataBase/AllProducts.json";
import PageMaker from "./pageTemplate";
import LoadMoreBTN from "../Compontents/loadMoreBtn";

export default function NewPage() {
  // State for newItems and endIndex
  const [newItems] = useState(FindNewItems); // Using FindNewItems directly
  const [endIndex, updateEndIndex] = useState(10);

  const sliceArray = (array, end) => {
    if (end >= array.length) {
      return array;
    } else {
      return array.slice(0, end);
    }
  };

  const handleViewMore = () => {
    const len = newItems.length;
    const increment = 5;

    if (endIndex < len) {
      const newEndIndex = Math.min(endIndex + increment, len);
      updateEndIndex(newEndIndex);
    }
  };

  return (
    <div className="new-page">
      <PageMaker
        title="New Products"
        productArray={sliceArray(newItems, endIndex)}
      />
      <LoadMoreBTN
        handleOnClick={handleViewMore}
        currentCount={endIndex}
        totalItems={newItems.length}
      />
    </div>
  );
}

// Function to find new items from AllProducts
function FindNewItems() {
  let items = [];
  for (let i = 0; i < AllProducts.Products.length; i++) {
    if (AllProducts.Products[i].isNew) {
      items.push(AllProducts.Products[i]);
    }
  }
  return items;
}
