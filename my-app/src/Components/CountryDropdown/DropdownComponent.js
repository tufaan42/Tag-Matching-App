import add from '../../assets/plus.svg';

const DropdownComponent = (props)=>{
    return (
        <div className="single-tag">
            <h5 className="dropdown-header">{props.element}</h5>
            <button className = 'btn btn-outline-light' 
            onClick = {(e) => props.addTag(e,props.element) }>        
                    <img alt="add" src={add} height="24" width="24" />
            </button>
        </div>
    )
}

export default DropdownComponent;