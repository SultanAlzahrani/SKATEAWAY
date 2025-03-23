export default function LoadMoreBTN({
  currentCount,
  totalItems,
  handleOnClick,
}) {
  return (
    <div className="load-more-container flex-col">
      <span>
        You have viewed {currentCount} of {totalItems} items
      </span>
      <button onClick={handleOnClick}>View More</button>
    </div>
  );
}
