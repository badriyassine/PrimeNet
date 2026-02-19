import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="w-42" src="/logo/Light_logo.png" alt="PrimeNet Logo" />
      </Link>
    </div>
  );
};

export default Logo;
