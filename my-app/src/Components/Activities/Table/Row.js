import renderTags from "../../TagCard/RenderTags/RenderTags";

const Row = (props) => {
    return (
        <tr className = "table-row">
            <th scope="row">{props.index}</th>
            <td>{props.date}</td>
            <td>{props.text}</td>
            <td>{renderTags(props)}</td>
        </tr>
    )
}

export default Row;