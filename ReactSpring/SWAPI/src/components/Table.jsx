import "./Table.css"

export default function Table({rows})
{
    if (rows.length === 0)
        return(<div id="loading">LOADING SWAPI DATA</div>);

    let columns = ["name", "height", "hair_color", "gender"]

    let data = rows.map((row, index)=>(
        <tr key={index + "r"}>
            {columns.map((column, index) => (
            <td key={index + "c"}>{row[column]}</td>
            ))}</tr>));

    return (<table>
        <thead>
            <tr><th>Name</th><th>Height</th><th>Hair Color</th><th>Gender</th></tr>
        </thead>
        <tbody>
        {data}
        </tbody>
    </table>);
}