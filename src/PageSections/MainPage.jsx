import BillBoard from "../Compontents/billboard";
import { BillBoardCaption } from "../Compontents/billboard";
import SectionHeader from "../Compontents/SectionHeader";

import PicturedCatagories from "../Compontents/PicturedCatagory";
import { MostLovedArray } from "../Arrays/MostLoved";

import { OtherCatagoriesArray } from "../Arrays/OtherCatagories";
import OtherCatagories from "../Compontents/OtherCatagories";

import TrendyProducts from "../Compontents/Trendy";

export default function MainSection() {
  return (
    <>
      <BillBoard />
      <section className="Main-page-section">
        <BillBoardCaption />
        <SectionHeader title={"Most Loved"} />
        <PicturedCatagories array={MostLovedArray} />
        <OtherCatagories array={OtherCatagoriesArray} />
        <SectionHeader title={"Trending"} />
        <TrendyProducts />
      </section>
    </>
  );
}
