"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname().split("/")[1];
  const session = useSession();

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

      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="/#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href=" /signin">Sign In</Link>
      )}
    </>
  );
};

export { Navigation };
