import React,{ useState } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import * as actionType from "../../redux/Actions/actionTypes";
import renderDropdown from '../../RenderFuntions/CountryDropdown/RenderDropdown';
import BackButton from '../Buttons/BackButton';
import Tags from '../Tags/Tags';


const CountryDorpdown = (props) => {
    const [state, setState] = useState({
        name: "",
    });

    const onChangeHandler = (e) => {
        setState({
          ...state,
          [e.target.id]: e.target.value,
        });
    };
    const backHandler = (e) => {
        props.changeFlag(1);
    }
    
    return (
        <div className = 'card'>
            <BackButton backHandler = {backHandler}/>
            <Tags props = {props}/>
            <input id="name" className = "form-control" value={state.value}
            onChange = {onChangeHandler} type = "text"/>
            <div className = 'tag-select'>
                <div className="add-tag">
                {renderDropdown(props,state.name)}
             </div>
        </div>
        </div>
        
    );
}

const mapStateToProps = state => {
    return {
        countries: state.countries,
        tags: state.tags
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTag: tags => dispatch({ type: actionType.ADD_TAG, tags: tags}),
        changeFlag: flag => dispatch({ type: actionType.CHANGE_FLAG, flag: flag })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryDorpdown);