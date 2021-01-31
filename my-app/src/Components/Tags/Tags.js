import renderTags from "../../RenderFuntions/TagCards/RenderTags"


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