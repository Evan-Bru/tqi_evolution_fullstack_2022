import './table.css';

function TableSales({ vector, select }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Autor</th>
                    <th>Publisher</th>
                    <th>Publication</th>
                    <th>Price</th>
                    <th>Select Book</th>
                </tr>
            </thead>

            <tbody>
                {
                    vector.map((obj, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{obj.title}</td>
                            <td>{obj.autor}</td>
                            <td>{obj.publisher}</td>
                            <td>{obj.publication}</td>
                            <td>{obj.price}</td>
                            <td><button onClick={() => {select(index)}} className="btn btn-success">Select Book</button></td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableSales;