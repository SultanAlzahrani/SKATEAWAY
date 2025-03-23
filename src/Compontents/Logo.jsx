const logo = "/assets/Logo/logo-1.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <div className="logo-container flex-row">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </Link>
  );
}
