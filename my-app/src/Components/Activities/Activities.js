import React from "react";
import { connect } from "react-redux";
import BackButton from '../Buttons/BackButton'
import * as actionType from "../../redux/Actions/actionTypes";
import Table from "./Table/Table";


const Activities = (props) => {
    const backHandler = () => {
        props.changeFlag(0);
    }
    return (
        <div className = 'card'>
            <BackButton backHandler = {backHandler}/>
            <h4 style={{alignSelf: "center"}}>Activity List</h4>
            <Table activities = {props.activities}/>
        </div>        
    )
    
}

const mapStateToProps = state => {
    return {
        activities: state.activities,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFlag: flag => dispatch({type: actionType.CHANGE_FLAG, flag: flag }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Activities);