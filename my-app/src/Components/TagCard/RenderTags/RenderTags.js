import TagComponent from '../Tags/TagComponent/TagComponent'
const renderTags = (props)=>{
    return props.tags.map((element,index)=>{
        if(element !== '') return (<TagComponent key = {index} element = {element} />);
        else return null;
    })
}

export default renderTags;