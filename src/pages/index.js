import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{"Sanjay "} Are you having a nice time. Very Nice
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
