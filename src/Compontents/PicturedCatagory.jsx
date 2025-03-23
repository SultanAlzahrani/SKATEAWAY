import { Link } from "react-router-dom";

export default function PicturedCatagories({ array }) {
  return (
    <div className="flex-row Pictured-Catagories">
      {array.map((e, index) => (
        <Element
          key={index}
          src={e.src}
          CatagoryName={e.CatagoryName}
          link={e.link}
        />
      ))}
    </div>
  );
}

function Element({ src, CatagoryName, link }) {
  return (
    <Link to={"/" + link} className="flex-col catagory-pics-container">
      <img src={src} alt="" />
      <span>{CatagoryName}</span>
    </Link>
  );
}
