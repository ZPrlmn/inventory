import ChartValue from "./ChartValue";

export default function Chart() {
    return (
        <div className="w-1/2 bg-green-500 border-2 dark:bg-gray-900 border-slate-600 flex flex-col justify-center items-center mt-10 p-10 rounded-xl">
            <h1 className="text-xl self-start">Rice Chart Value From Grains to Rice</h1>
            <div className="bg-white dark:bg-gray-950 rounded-lg mt-5">
                <div className="flex flex-row pt-5 px-5 justify-between">
                    <ChartValue priceVal={32}/>
                    <ChartValue priceVal={28}/>
                    <ChartValue priceVal={31}/>
                    <ChartValue priceVal={34}/>
                    <ChartValue priceVal={33}/>
                    <ChartValue priceVal={29}/>
                    <ChartValue priceVal={32}/>
                    <ChartValue priceVal={34}/>
                </div>
                <div className="flex flex-row justify-between h-10 w-full px-7">
                    <h1>Jan</h1>
                    <h1>Feb</h1>
                    <h1>Mar</h1>
                    <h1>Apr</h1>
                </div>
            </div>
        </div>
    );
}
