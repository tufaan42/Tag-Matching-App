import Activities from "../../Components/Activities/Activities";
import CountryDropdown from "../../Components/CountryDropdown/CountryDropdown";
import Form from "../../Components/Form/Form";
import ActivityAddedModal from "../../Components/TagCard/ActivityAddedModal";
import TagCard from "../../Components/TagCard/TagCard";

const RenderApp = (flag)=>{
    if(flag === 0){
      return (<Form/>);
    }
    else if(flag === 1){
      return (<TagCard/>);
    }
    else if(flag === 2){
      return (<CountryDropdown/>);
    }
    else if(flag === 3){
      return (<ActivityAddedModal/>);
    }
    else if(flag === 4){
      return (<Activities/>);
    }
}

export default RenderApp;