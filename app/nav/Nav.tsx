import Link from "next/link";

export default function Nav () {

  const buttonDesign = [
    "text-center",
    "bg-sky-600",
    'py-2',
    'px-4',
    'rounded-lg',
    "hover:bg-sky-800"
  ].join(' ');

  return(
    <div className="fixed bottom-0 h-16 w-screen flex justify-around items-center bg-green-500 dark:bg-neutral-900 border-t-2 border-gray-700">
      <Link className={buttonDesign} href="/">Home</Link>
      <Link className={buttonDesign} href="/pos">POS</Link>
      <Link className={buttonDesign} href="/inventory">Inventory</Link>
    </div>
  )
}
