import { ProductElement } from "../Compontents/product";

export default function PageMaker({ title, productArray }) {
  console.log(productArray + " array");
  return (
    <section className="Page-template-container flex-col">
      <h1>{title}</h1>
      <div>temp</div>
      <div className="item-container-template flex-row">
        {productArray.map((element, i) => {
          console.log(element);
          return (
            <ProductElement
              key={element.id}
              id={element.id}
              src={element.imgs[0]}
              name={element.name}
              price={element.price}
            />
          );
        })}
      </div>
    </section>
  );
}
