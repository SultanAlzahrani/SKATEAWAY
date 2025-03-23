import { ProductElement } from "../Compontents/product";
import AllProducts from "../DataBase/AllProducts.json";

export default function TrendyProducts() {
  return (
    <div className="product-preview-container flex-row">
      {AllProducts.Products.map((element) => {
        if (element.isTrendy) {
          return (
            <ProductElement
              key={element.id}
              id={element.id}
              src={element.imgs[0]}
              name={element.name}
              price={element.price}
              className="trendy-item"
            />
          );
        }
      })}
    </div>
  );
}
