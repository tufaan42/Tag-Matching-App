import Row from "../Table/Row";

const RenderActivities = (props) => {
    const rowRender = (element,index) => {
        return (<Row key = {index} index = {index+1} date = {element.date} text = {element.text}
         tags = {element.tags}/>)
    }
    return props.activities.map((element,index)=>{
        return rowRender(element,index);
    });
}

export default RenderActivities;