import { FileText } from "lucide-react";
import NavLink from "./nav-link";

const Header = () => {
  const isLoggedIn = false;

  return (
    <nav className="container flex items-center justify-between px-2 py-4 lg:px-8">
      <div>
        <NavLink className="flex shrink-0 items-center gap-1 lg:gap-2" href="/">
          <FileText className="w-5 text-gray-900 transition-all duration-200 ease-in-out hover:rotate-12 lg:w-8" />
          <span className="font-extrabold text-gray-900 lg:text-xl">
            Sommaire
          </span>
        </NavLink>
      </div>

      <div className="lg:space-x12 space-x-4">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your summaries</NavLink>}
      </div>

      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <NavLink href="/upload">Upload a PDF</NavLink>
          <div>Pro</div>
          <button>Sign Out</button>
        </div>
      ) : (
        <div>
          <NavLink href="/sign-in">Sign In</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
