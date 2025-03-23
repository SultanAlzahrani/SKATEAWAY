const main = "./assets/Models/main1440x600.webp";
const middlePic = "./assets/Models/middle430x498.webp";

import { Link } from "react-router-dom";

export default function BillBoard() {
  return (
    <div className="Billboard-container flex-row">
      <img src={middlePic} alt="middle" className="middle-img" />
      <img className="right-img" src={main} alt="right" />{" "}
    </div>
  );
}
export function BillBoardCaption() {
  return (
    <div className="heading-container flex-col">
      <h1 className="main-heading">SKATE WITH COMFERT</h1>
      <p>A light-weight, sick take on one of our most iconic shoes</p>
      <Link to={`/product/0`} className="link-as-button-1">
        Shop Now
      </Link>
    </div>
  );
}
