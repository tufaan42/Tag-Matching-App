import React, { useState } from 'react';
import * as actionType from "../../redux/Actions/actionTypes";
import * as Utility from '../../Utility/Utility'
import TextField from './TextField/TextField';
import {connect} from 'react-redux';
import '../../App.css';

const Form = (props) => {
    props.tagReset();
    const [state, setState] = useState({
        id: "",
        value: ""
    });
    const onChangeHandler = (e) => {
        setState({
          ...state,
          [e.target.id]: e.target.value,
        });
      };
    const subHandler = (e) =>{
        const totalCountries = Utility.mkarray(props.countries);
        const myText = state.value;
        const final = Utility.findTags(myText,totalCountries);
        if(final.length > 0) props.addTag(final);
        props.myText(myText);
        props.changeFlag(1);
    }
    return (
        <div className = 'form1'>
            <label>Enter your text here:</label>
            <TextField handler = {onChangeHandler} value = {state.value}/>
            <button className = 'form-btn btn btn-outline-success' onClick = {subHandler}>Submit</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        countries: state.countries,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTag: tags => dispatch({ type: actionType.ADD_TAG, tags: tags }),
        myText: myText => dispatch({ type: actionType.ADD_TEXT, myText: myText }),
        changeFlag: flag => dispatch({ type: actionType.CHANGE_FLAG, flag: flag }),
        tagReset: () => dispatch({type: actionType.RESET_TAG })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
