import { Link } from "react-router-dom";
export default function Links() {
  return (
    <div className="links">
     
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/Skills" className="link">
        Skills
      </Link>
      <Link to="/Portfolio" className="link">
        portfolio
      </Link>
      <Link to="/ContectUs" className="link">
        contact
      </Link>
    </div>
  );
}
