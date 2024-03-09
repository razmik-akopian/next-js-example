"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname().split("/")[1];
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href.split("/")[1];

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
