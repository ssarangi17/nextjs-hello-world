import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{"Sanjay "} Are you having a nice time ? <br>
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
