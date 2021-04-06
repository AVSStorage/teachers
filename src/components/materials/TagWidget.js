import { Fragment } from 'react'


import {useState} from 'react'
import PropTypes from 'prop-types';

function TagWidget({handler, values}) {
    
 
    // const handlers = {
    //     course: addMaterialToCourse,
    //     theme: addMaterialToTheme,
    //     lesson: addMaterialToLesson,
    //     task: addMaterialToTask
    // }
    const [newTag, setNewTag] = useState({})
    // const storedData = useSelector(state => state[entity][`${entity}s`])

    // const index =  useSelector(state => state[entity].editIndex);
    let tags;
  

    // if (index !== null) {
    //     tags = storedData[index].tags;
    // } else {
       tags = values
    // }
   

  
    return (
        <Fragment>
             <label className="r3">Теги</label>
        <div className="material__widget justify-content-between pl-3 mt-3">
            <input onKeyPress={(evt) => {
   
    if (evt.key === 'Enter') {
        handler('tags', [...tags, {...newTag}])
                setNewTag({})
    }
  }} onChange={(evt) => {
                setNewTag({ id: tags.length + 1, name: evt.target.value})
            }} placeholder="Введите название тега" className="input w-100 mr-3" type="text"/>

            <button  onClick={() => {
             
                handler('tags', [...tags, {...newTag}])
                setNewTag({})
               
            }} className="plus-button mr-3">
                +
            </button>
        </div>
        <div className="d-flex mt-3">
        {tags.map(tag => (
            <div key={tag.id + Math.random()} className="btn btn-outline-dark tag mr-3 mb-2">
            {tag.name}
            <button className="btn-close">
    
            </button>
                </div>
        ))}
        </div>
        </Fragment>
    )
}

TagWidget.propTypes = {
    handler: PropTypes.func,
    values: PropTypes.array
}

export default TagWidget;