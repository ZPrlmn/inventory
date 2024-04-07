import Link from "next/link";

export default function Nav () {
  return(
    <div className="fixed bottom-0 h-16 w-screen flex justify-around items-center bg-neutral-900 border-t-2 border-gray-700">
      <Link className="text-center bg-sky-900 py-2 px-4 rounded-lg hover:bg-slate-800" href="/">Home</Link>
      <Link className="text-center bg-sky-900 py-2 px-4 rounded-lg hover:bg-slate-800" href="/pos">POS</Link>
      <Link className="text-center bg-sky-900 py-2 px-4 rounded-lg hover:bg-slate-800" href="/inventory">Inventory</Link>
    </div>
  )
}
