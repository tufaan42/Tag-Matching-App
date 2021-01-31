import renderTags from "../RenderTags/RenderTags"


const Tags = (props)=>{
    return (
        <>
            <label>Tags:</label>
            <div className="tag-wrapper">
                {renderTags(props.props)}
            </div>
        </>
    )
}

export default Tags;