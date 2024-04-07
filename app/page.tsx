import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row items-center place-content-center">
      <Link className="px-3 py-3 m-5 w-40 h-16 place-content-center text-center rounded-lg bg-sky-600 hover:bg-sky-950" href="/inventory">Inventory</Link>
      <Link className="px-3 py-3 m-5 w-40 h-16 place-content-center text-center rounded-lg bg-sky-600 hover:bg-sky-950" href="/pos">POS</Link>
    </div>
  );
}
  