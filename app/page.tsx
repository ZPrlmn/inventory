import Link from "next/link";
import Chart from "./chart/Chart";

export default function Home() {
  return (
    <div className="flex flex-row items-center place-content-center">
      <Chart />
    </div>
  );
}
  