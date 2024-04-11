import Image from "next/image";
import lineChart from "./images/lineChart.jpg"
import palay from "./images/Palay.jpg"

export default function Home() {
  const textFormat = "w-full text-center font-bold text-lg rounded-lg "
  return (
    <div className="flex flex-row items-center place-content-center">
      <div className="mt-10 p-10 bg-green-400 border-2 border-slate-600 rounded-lg">
        <div className="justify-evenly flex flex-row rounded-lg mb-5 bg-sky-600">
          <h1 className={textFormat + "bg-sky-900 border-2 border-slate-800"}>Palay To Bigas</h1>
          <h1 className={textFormat}>Palay Price</h1>
        </div>
        <Image 
        className="rounded-md"
          src={lineChart}
          alt=""
          height={100}
          width={500}
        />
      </div>
    </div>
  );
}
  