import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | NextJS",
};

export default function About() {
  return (
    <section className="centered-row">
      <h1>About us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </section>
  );
}
