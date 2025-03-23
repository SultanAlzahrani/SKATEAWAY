// Imports
import NavBar from "./Navbar";

// Thin Strap, used for offers
function HeaderStrap({ text }) {
  return (
    <div className="Header-strap">
      <span>{text}</span>
    </div>
  );
}

// Links elements
function Categories() {
  const CategoriesArray = [
    "New",
    "Shoes",
    "Clothing",
    "Backpacks",
    "Accessories",
  ]; // Example categories array

  return (
    <div className="Categories-container flex-row">
      {CategoriesArray.map((category) => (
        <a key={category} href="" className="header-category-element">
          {category}
        </a>
      ))}
    </div>
  );
}

// Header Component
export default function Header({CartCounter}) {
  return (
    <>
      <HeaderStrap text={"10% OFF KIDS' CLOTHING"} />
      <div className="Header">
        <section className="Header-section-1">
          <span>Glad you're here, please enjoy</span>
        </section>

        <div className="Header-section-2 flex-row">
          <NavBar CartCounter={CartCounter}/>
        </div>
      </div>
    </>
  );

  // return <NavBar />;
}
