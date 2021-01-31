import Row from "./Row"
import Thead from "./Thade"

const Table = (props) => {

    const RenderActivities = () => {
        const rowRender = (element,index) => {
            return (<Row key = {index} index = {index+1} date = {element.date} text = {element.text}
             tags = {element.tags}/>)
        }
        return props.activities.map((element,index)=>{
            return rowRender(element,index);
        });
    }

    return (
        <div className = "table-space">
            <table className= "table table-hover">
                <Thead/>
                <tbody>
                    {RenderActivities()}
                </tbody>
            </table>
        </div>
    )
}

export default Table;