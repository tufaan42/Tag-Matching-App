import RenderActivities from "../../../RenderFuntions/Table/RenderActivities";
import Thead from "./Thade"

const Table = (props) => {
    return (
        <div className = "table-space">
            <table className= "table table-hover">
                <Thead/>
                <tbody>
                    {RenderActivities(props)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;