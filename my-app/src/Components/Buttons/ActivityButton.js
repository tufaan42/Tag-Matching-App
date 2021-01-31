const ActivityButton = (props) => {
    return (
        <button className = 'activity-button btn btn-outline-info' onClick = {props.handler}>View Previous Activities</button>
    )
}

export default ActivityButton;