
const RenderActivities = (props) => {
    
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td>{props.date}</td>
            <td>{props.text}</td>
            <td>{props.tags}</td>
        </tr>
    )
}

export default RenderActivities;