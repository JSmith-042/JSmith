export default function Table(props)
{
    if (props.rows.length == 0)
        return(<div></div>);



    return (<div>{props.rows.toString()}</div>);
}