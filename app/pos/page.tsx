export default function POS() {
    //styles
    const inputFormat = "ml-2 rounded-md dark:bg-gray-700"
    const inputContainer = "flex flex-row my-2"
    //styles
    return (
        <div className="justify-center">
            <h1 className="text-3xl ml-5 mt-10">Point of Sales</h1>
            <div className="flex flex-row ml-5">
                <h1 className="px-2 py-1 m-2 bg-sky-600 rounded-lg">Client</h1>
                <h1 className="px-2 py-1 m-2 bg-sky-600 rounded-lg">Customer</h1>
            </div>

            <form className="w-fit mx-auto border-2 border-slate-800 py-5 px-10 rounded-2xl">
                <h1 className="text-2xl font-bold text-center">Client</h1>
                <div className={inputContainer}>
                    <label htmlFor="customerName">Customer Name: </label>
                    <input type="text" id="customerName" className={inputFormat} />
                </div>
                <div className={inputContainer}>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="text" id="quantity" className={inputFormat + " w-16"} />
                </div>
                <div className={inputContainer}>
                    <label htmlFor="totalWeight">Total Weight: </label>
                    <input type="text" id="totalWeight" className={inputFormat + " w-16"} />
                    <span className="ml-2">kg</span>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="type">Type</label>
                    <select id="type" className={inputFormat}>
                        <option>None</option>
                        <option>Palay</option>
                        <option>Bigas</option>
                    </select>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="condition">Condition</label>
                    <select id="condition" className={inputFormat}>
                        <option value="None">None</option>
                        <option value="Dry">Dry</option>
                        <option value="Wet">Wet</option>
                    </select>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="price">Price:</label>
                    <span className="ml-2">₱</span>
                    <input type="text" id="price" className={inputFormat + " w-24"}/>
                </div>
                <button className="py-1 px-3 border-2 rounded-lg bg-lime-600 border-lime-800 hover:bg-lime-800" type="submit">submit</button>
            </form>

            
        </div>
    );
}
/*
            <form className="w-fit mx-auto border-2 border-slate-800 py-5 px-10 rounded-2xl">
                <h1 className="text-2xl font-bold text-center">Client</h1>
                <div className={inputContainer}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input className={inputFormat} type="text" id="quantity"/>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="totalWeight">Total Weight:</label>
                    <input className={inputFormat} type="text" id="totalWeight" />
                </div>
                <div className={inputContainer}>
                    <label htmlFor="type">Type</label>
                    <select id="type" className={inputFormat}>
                        <option>None</option>
                        <option>Palay</option>
                        <option>Bigas</option>
                    </select>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="condition">Condition</label>
                    <select id="condition" className={inputFormat}>
                        <option value="None">None</option>
                        <option value="Dry">Dry</option>
                        <option value="Wet">Wet</option>
                    </select>
                </div>
                <button className="py-1 px-3 border-2 rounded-lg bg-lime-600 border-lime-800 hover:bg-lime-800" type="submit">submit</button>
            </form>
*/

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

/*
            <form className="w-fit mx-auto border-2 border-slate-800 py-5 px-10 rounded-2xl">
                <h1 className="text-2xl font-bold text-center">Client</h1>
                <div className={inputContainer}>
                    <label htmlFor="customerName">Customer Name: </label>
                    <input type="text" id="customerName" className={inputFormat} />
                </div>
                <div className={inputContainer}>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="text" id="quantity" className={inputFormat + " w-16"} />
                </div>
                <div className={inputContainer}>
                    <label htmlFor="totalWeight">Total Weight: </label>
                    <input type="text" id="totalWeight" className={inputFormat + " w-16"} />
                    <span className="ml-2">kg</span>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="type">Type</label>
                    <select id="type" className={inputFormat}>
                        <option>None</option>
                        <option>Palay</option>
                        <option>Bigas</option>
                    </select>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="condition">Condition</label>
                    <select id="condition" className={inputFormat}>
                        <option value="None">None</option>
                        <option value="Dry">Dry</option>
                        <option value="Wet">Wet</option>
                    </select>
                </div>
                <div className={inputContainer}>
                    <label htmlFor="price">Price:</label>
                    <span className="ml-2">₱</span>
                    <input type="text" id="price" className={inputFormat + " w-24"}/>
                </div>
                <button className="py-1 px-3 border-2 rounded-lg bg-lime-600 border-lime-800 hover:bg-lime-800" type="submit">submit</button>
            </form>
*/