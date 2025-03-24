import "./Table.css"

export default function Table(props)
{
    if (props.rows.length === 0)
        return(<div></div>);



     console.log(props.rows)

    let columns = ["name", "height", "hair_color", "gender"]

    return (<table>
        <thead>
            <tr><th>Name</th><th>Height</th><th>Hair Color</th><th>Gender</th></tr>
        </thead>
        <tbody>
        {props.rows.map((row, index)=>(<tr key={index + "r"}>
            {columns.map((column, index) => (
                <td key={index + "c"}>{row[column]}</td>
            ))}
        </tr>))}
        </tbody>
    </table>);
}