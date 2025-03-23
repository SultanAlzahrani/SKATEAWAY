import { useState } from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
//
import "./styles/index.css";
import "./styles/header.css";
import "./styles/billboard.css";
import "./styles/MainSection.css";
import "./styles/SectionTitle.css";
import "./styles/PicturedCatagory.css";
import "./styles/OtherCatagories.css";
import "./styles/productPreviewCard.css";
import "./styles/expandedProduct.css";
import "./styles/Footer.css";
import "./styles/cartPage.css";
import "./styles/page-template.css";
//
import Header from "./Compontents/header";
import Footer from "./Compontents/footer";
import MainSection from "./PageSections/MainPage";
import { ExpandProduct } from "./Compontents/product";
import { CartViewPage } from "./Compontents/ShoppingCart";
import DefaultRoute from "./Compontents/RouteDoesntExits";

// Pages
import NewPage from "./PageSections/NewPage";
import ShoesPage from "./PageSections/ShoesPage";
import BackpackPage from "./PageSections/BackpackPage";
import ClothingPage from "./PageSections/ClothingPage";
import AccessoriesPage from "./PageSections/Accessories";
import KidsPage from "./PageSections/kids";
import SkateboardingPage from "./PageSections/SkateboardingPage";
import SummerPage from "./PageSections/SummerPage";

function AppContainer() {
  const [CartCounter, UpdateCartCounter] = useState(0);
  const incCartCounter = (quantity) => {
    UpdateCartCounter(CartCounter + quantity);
  };
  const decCartCounter = () => {
    UpdateCartCounter(CartCounter - quantity);
  };

  return (
    <Router>
      <Header CartCounter={CartCounter} />
      <Routes>
        <Route path="/" element={<App CartCounter={CartCounter} />} />
        <Route
          path="/product/:id"
          element={
            <ExpandProduct
              incCartCounter={incCartCounter}
              decCartCounter={decCartCounter}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartViewPage
              counter={CartCounter}
              UpdateCartCounter={UpdateCartCounter}
            />
          }
        />
        <Route path="/new" element={<NewPage />} />
        <Route path="/Shoes" element={<ShoesPage />} />
        <Route path="/Backpack" element={<BackpackPage />} />
        <Route path="/Clothing" element={<ClothingPage />} />
        <Route path="/Accessories" element={<AccessoriesPage />} />
        <Route path="/Kids" element={<KidsPage />} />
        <Route path="/Skateboarding" element={<SkateboardingPage />} />
        <Route path="/Summer" element={<SummerPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/other" element={<DefaultRoute />} />
      </Routes>
      <Footer />
    </Router>
  );
}
function App({ CartCounter }) {
  return (
    <>
      <MainSection />
    </>
  );
}

export default AppContainer;
