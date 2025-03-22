"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const NavLink = ({ href, className, children }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-gray-600 hover:text-rose-500 transition-colors duration-200",
        className,
        {
          "text-rose-500":
            pathname === href ||
            (pathname !== href && href.startsWith(pathname + "#")),
        }
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
