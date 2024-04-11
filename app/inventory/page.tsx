export default function Inventory () {
    const inventoryClient = ([
        {
            id:1,
            from: 'client 1',
            quantity: 200,
            totalWeight: 100*25,
            dry: true,
            type: "Palay",
            condition: "Dry",
            possibleIncome: 200*70,
            price: 200*20
        },
        {
            id:2,
            from: 'client 2',
            quantity: 100,
            totalWeight: 100*25,
            dry: false,
            type: "Palay",
            condition: "Dry",
            possibleIncome: 100*70,
            price: 100*20
        },
        {
            id: 3,
            from: 'client 3',
            quantity: '800',
            totalWeight: 800*25,
            dry: false,
            type: "Palay",
            condition: "Dry",
            possibleIncome: 800*70,
            price: 800*20
        }
    ])
    const tableRow = "dark:bg-gray-900 border-slate-600 dark:border-blue-950 border-2 px-5 dark:text-sky-400"
    const buttonFormat = [
        "text-center",
        "border-2",
        "rounded-lg",
        "py-1",
        "px-3",
        "m-1",
        "hover:py-2",
        "hover:px-4",
        "hover:m-0",
        "text-white"
      ].join(' ');
    return (
        <div>
            <h1 className="text-3xl ml-5 mt-10">Inventory</h1>
            <input type="text" placeholder="Search Client Name" 
                className="ml-10 my-5 px-3 py-1 rounded-lg"
            />
            <button type="submit"
                className="ml-2 bg-sky-600 px-2 py-1 rounded-lg"
                >Search
            </button>
            <table className="table-auto min-w-min mx-auto">
                <thead>
                    <tr className={tableRow}>
                        <th className={tableRow}>ID</th>
                        <th className={tableRow}>From</th>
                        <th className={tableRow}>Quantity</th>
                        <th className={tableRow}>Total Weight</th>
                        <th className={tableRow}>Dry</th>
                        <th className={tableRow}>Type</th>
                        <th className={tableRow}>Price</th>
                        <th className={tableRow}>Client Possible Income</th>
                        <th className={tableRow}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryClient.map(item => (
                        <tr key={item.id}>
                            <td className={tableRow + " text-center"}>{item.id}</td>
                            <td className={tableRow}>{item.from}</td>
                            <td className={tableRow}>{item.quantity}</td>
                            <td className={tableRow}>{item.totalWeight} kg</td>
                            <td className={tableRow + " text-center"}>{item.dry ? 'Yes' : 'No'}</td>
                            <td className={tableRow}>{item.type}</td>
                            <td className={tableRow}>₱{item.price}</td>
                            <td className={tableRow}>₱{item.possibleIncome}</td>
                            <td className={tableRow}>
                                <button className={buttonFormat + " bg-sky-600 border-sky-800 hover:bg-sky-800"} type="button">Add</button>
                                <button className={buttonFormat + " bg-lime-600 border-lime-800 hover:bg-lime-800"} type="button">Edit</button>
                                <button className={buttonFormat + " bg-red-600 border-red-800 hover:bg-red-800"} type="button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}