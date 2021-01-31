import {TagComponent} from '../../Utility/Utility'
const renderTags = (props)=>{
    return props.tags.map((element,index)=>{
        if(element !== '') return TagComponent(element,index);
        else return null;
    })
}

export default renderTags;