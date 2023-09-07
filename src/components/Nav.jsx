import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/blog">
        <div>Blog</div>
      </Link>
    </div>
  );
}
