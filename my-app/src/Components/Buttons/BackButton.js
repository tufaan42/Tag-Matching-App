import back from '../../assets/left-arrow.svg';

const BackButton = (props) => {
    return (
        <div className="top-bar">
            <button className = 'btn btn-outline-danger' onClick = {props.backHandler}>
                <img alt="back" src={back} height="24" width="24" />
            </button>
        </div>
    )
}

export default BackButton;