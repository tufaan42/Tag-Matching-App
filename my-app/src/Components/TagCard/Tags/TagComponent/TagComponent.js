const TagComponent = (props)=>{
    return (
        <div key={props.key} className="card2">
            {props.element}
        </div>
    );
}

export default TagComponent;