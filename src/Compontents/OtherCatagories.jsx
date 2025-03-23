import { Link } from "react-router-dom";

export default function OtherCatagories({ array }) {
  return (
    <div className="Other-Catagories-container">
      {array.map(
        (
          e,
          index // Added index for the key prop
        ) => (
          <Element
            key={index}
            src={e.src}
            title={e.title}
            buttonText={e.buttonText}
            link={e.link}
          />
        )
      )}
    </div>
  );
}

function Element({ src, title, link, buttonText = "Shop" }) {
  return (
    <Link to={"/" + link} className="other-catagory-element-container flex-col">
      <img src={src} alt="" />
      <span>{title}</span>
      <button>{buttonText}</button>
    </Link>
  );
}
