import React from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import * as actionType from "../../redux/Actions/actionTypes";
import BackButton from '../Buttons/BackButton';
import Tags from '../Tags/Tags';
import { postActivity } from '../../Utility/fetchs';



const TagCard = (props) => {

    const subHandler = (e) => {
        postActivity(props);
        props.changeFlag(3);
    }
    const addtagHandler = (e) => {
       props.changeFlag(2);
    }
    const backHandler = (e) => {
        props.changeFlag(0);
        props.tagReset();
    }
    

    return (
        <div className = 'card'>
            <BackButton backHandler = {backHandler}/>
            <h1>{props.myText}</h1>
            <Tags props = {props}/>
            <div className ="button-align">
            <button className = 'btn btn-outline-success' onClick = {subHandler}>Add Activity</button>
            <button className = 'btn btn-outline-success' onClick = {addtagHandler}>Add Tag</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        myText: state.myText,
        tags: state.tags
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFlag: flag => dispatch({ type: actionType.CHANGE_FLAG, flag: flag }),
        tagReset: () => dispatch({type: actionType.RESET_TAG })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TagCard);