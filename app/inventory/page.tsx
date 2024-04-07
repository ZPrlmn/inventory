export default function inventory () {
    const inventoryClient = ([
        {
            id:1,
            from: 'client 1',
            quantity: 200,
            dry: true
        },
        {
            id:2,
            from: 'client 2',
            quantity: 100,
            dry: false
        },
        {
            id: 3,
            from: 'client 3',
            quantity: '800',
            dry: false
        }
    ])
    return (
        <div>
            <h1>Inventory Clients</h1>
            <table className="table-auto w-4/5 mx-auto">
                <thead>
                    <tr className="bg-gray-900 border-blue-950 border-2">
                        <th className="bg-gray-900 border-blue-950 border-2 px-5">ID</th>
                        <th className="bg-gray-900 border-blue-950 border-2 px-5">From</th>
                        <th className="bg-gray-900 border-blue-950 border-2 px-5">Quantity</th>
                        <th className="bg-gray-900 border-blue-950 border-2 px-5">Dry</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryClient.map(item => (
                        <tr key={item.id}>
                            <td className="bg-gray-900 border-blue-950 border-2 text-center">{item.id}</td>
                            <td className="bg-gray-900 border-blue-950 border-2 pl-2">{item.from}</td>
                            <td className="bg-gray-900 border-blue-950 border-2 pl-2">${item.quantity}</td>
                            <td className="bg-gray-900 border-blue-950 border-2 text-center">{item.dry ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}