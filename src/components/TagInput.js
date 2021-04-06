import React from 'react';
import PropTypes from "prop-types";

function TagInput({tags, changeTag, direction = 'column'}){
    return (
        <div className="mt-4 d-flex" style={{flexDirection: direction}}>
            <input className="tag-input mt-3" placeholder="Поиск по тегам..." onKeyPress={(evt) => {
                if(evt.key === 'Enter'){
                  changeTag([...tags, evt.target.value])
                }
            }}/>
            <div className="d-flex flex-wrap mt-4">
            {tags.map((tag, index) => (
                <div className="btn btn-outline-dark tag" key={index}>{tag}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                    changeTag(tags.filter(item => item !== tag))
                }}></button>
                </div>
            ))}
            
            </div>
        </div>
    )
}

TagInput.propTypes = {
    isSeen: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    changeTag: PropTypes.func,
    direction: PropTypes.string
}


export default TagInput;