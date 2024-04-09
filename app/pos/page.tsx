export default function POS() {
    //styles
    const inputFormat = "ml-2 rounded-md dark:bg-gray-700"
    const inputContainer = "flex flex-row my-2"
    //styles
    return (
        <div className="justify-center">
            <h1 className="text-3xl ml-5 my-10">Point of Sales</h1>
            <form className="w-fit mx-auto border-2 border-slate-800 py-5 px-10 rounded-2xl">
                <div className={inputContainer}>
                    <label htmlFor="customerName">Customer Name: </label>
                    <input type="text" id="customerName" className={inputFormat} />
                </div>
                <div className={inputContainer}>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="text" id="quantity" className={inputFormat + " w-10"} />
                </div>
                <div className={inputContainer}>
                    <label htmlFor="totalWeight">Total Weight: </label>
                    <input type="text" id="totalWeight" className={inputFormat + " w-10"} />
                    <h1 className="ml-2">kg</h1>
                </div>
                <button className="py-1 px-3 border-2 rounded-lg bg-lime-600 border-lime-800 hover:bg-lime-800" type="submit">submit</button>
            </form>
        </div>
    );
}
