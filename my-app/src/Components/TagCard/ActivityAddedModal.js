import * as actionType from "../../redux/Actions/actionTypes";
import {connect} from 'react-redux';
import { getActivities } from "../../Utility/fetchs";

const ActivityAddedModal = (props) => {
    getActivities(props.addActivities);
    const newActivityHandler = () => {
        props.changeFlag(0);
        props.tagReset();
    }
    return (
        <div className = 'card'>
            <h1 style={{alignSelf: "center"}}>Activity Added!</h1>
            <button className = 'form-btn btn btn-outline-success' onClick = {newActivityHandler}>Ok</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeFlag: flag => dispatch({ type: actionType.CHANGE_FLAG, flag: flag }),
        tagReset: () => dispatch({type: actionType.RESET_TAG }),
        addActivities: activities => { dispatch({ type: actionType.ADD_ACTIVITIES, activities: activities }) }
    }
}

export default connect(null,mapDispatchToProps)(ActivityAddedModal);