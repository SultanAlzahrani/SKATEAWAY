import { useState } from "react";
import { products } from "../DataBase/SummerProducts.json";
import PageMaker from "./pageTemplate";
import LoadMoreBTN from "../Compontents/loadMoreBtn";

export default function SummerPage() {
  // State for newItems and endIndex
  const [newItems] = useState(FindSummerItems); // Using FindNewItems directly
  const [endIndex, updateEndIndex] = useState(7);

  const sliceArray = (array, end) => {
    if (end >= array.length) {
      return array;
    } else {
      return array.slice(0, end);
    }
  };

  const handleViewMore = () => {
    const len = newItems.length;
    const increment = 3;

    if (endIndex < len) {
      const newEndIndex = Math.min(endIndex + increment, len);
      updateEndIndex(newEndIndex);
    }
  };

  return (
    <div className="new-page">
      <PageMaker title="Summer" productArray={sliceArray(newItems, endIndex)} />
      <LoadMoreBTN
        handleOnClick={handleViewMore}
        currentCount={endIndex}
        totalItems={newItems.length}
      />
    </div>
  );
}

function FindSummerItems() {
  console.log(products);
  let items = [];
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    items.push(products[i]);
  }
  return items;
}
