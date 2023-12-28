import Link from "next/link";
export default function About() {
  return (
    <main
      style={{ backgroundColor: "#ccc" }}>
      <h1>About Page</h1>
      <Link href="/">Home</Link>
    </main>
  );
}