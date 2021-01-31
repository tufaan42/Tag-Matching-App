import * as Utility from '../../Utility/Utility'
import DropdownComponent from '../../Components/CountryDropdown/DropdownComponent'

const renderDropdown = (props, name) =>{
    const tempCountries = Utility.mkarray(props.countries);
    const withouttag = Utility.withoutTag(props.tags,tempCountries);
    const addtagHandler = (e,name)=> {
        const currentTag = [name];
        const final = Utility.withoutTag(props.tags, currentTag);
        props.addTag(final);
    }
    const isOk = (element)=>{
        let flag = true;
        for(let i = 0; i < name.length; i++ ){
            // eslint-disable-next-line
            if(element[i].toLowerCase() != name[i].toLowerCase()) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    const dropdownComponent = (element,index)=> {
        return (
            <DropdownComponent key = {index} element = {element} addTag = {addtagHandler}/>
        );
    }
    return withouttag.map((element, index)=>{
        if(isOk(element) === true) return (dropdownComponent(element,index));
        else return null;
    })
}

export default renderDropdown;