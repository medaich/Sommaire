import { FileText } from "lucide-react";
import NavLink from "./nav-link";

const Header = () => {
  const isLoggedIn = false;

  return (
    <nav className="container flex items-center justify-between px-2 py-4 lg:px-8">
      <div>
        <NavLink className="flex items-center gap-1 lg:gap-2 shrink-0" href="/">
          <FileText className="w-5 lg:w-8 text-gray-900 hover:rotate-12 transition-all duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Sommaire
          </span>
        </NavLink>
      </div>

      <div className="space-x-4 lg:space-x12">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your summaries</NavLink>}
      </div>

      {isLoggedIn ? (
        <div className="flex gap-2 items-center">
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
