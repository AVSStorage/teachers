import Popup from '../Popup'
import TagInput from '../TagInput'
import { useSelector, useDispatch } from "react-redux";
import {closeFile} from '../../action/fileAction';
import {useState, useEffect}  from 'react'
import PropTypes from 'prop-types';

import FileComponent from './popup/FileComponent';
import LinkComponent from './popup/LinkComponent';
function MaterialPopup({ handler }) {
  const store = useSelector(state => state.file)

 const links = useSelector(state => state.link.links)
// const tasks = useSelector(state => state.task.tasks)
  let data = store.event === 'links' ? links : store.files;
  const storedData = store.entity && useSelector(state => state[store.entity][`${store.entity}s`]);
  const index = store.entity && useSelector(state => state[store.entity].editIndex);
 
 

  console.log(storedData[index])

  let savedData;
  if (index !== null) {
    savedData = storedData[index][store.event];
  
  } else {
    savedData = []
  }

  
  // const events = {
  //   course: addMaterialToCourse,
  //   theme: addMaterialToTheme,
  //   task: addMaterialToTask,
  //   lesson: addMaterialToLesson
  // }

   const dispatch = useDispatch();
  
    let [materials, setMaterials] = useState([...savedData])
    
    useEffect(() => {
        setMaterials([...savedData]);
      }, [store.event]);
    return (
        <Popup isSeen={store.isModalOpen}>
             <button type="button" onClick={() => dispatch(closeFile({
                 isModalOpen: false
             }))} className="btn-close align-self-end text-dark" aria-label="Close"></button>
            <h1>Добавить материал</h1>
            <TagInput direction={'column-reverse'} tags={
                ['Физика']
            }/>
            <div className="row mt-4">
            {data.map(file => { 
                const isChecked = savedData.some(item => item.id === file.id)
                const hander = (evt) => {
                  let materialTemp;
                  if (!evt.target.checked) {
                      materialTemp = [...materials]
                      materialTemp.splice(materialTemp.indexOf(file), 1)

                  } else {
                      materialTemp = [...materials, file];
                  }

                  setMaterials([...materialTemp])
                }
                if (store.event !== 'links'){
                  return (
                    <FileComponent key={file.id} file={file} isChecked={isChecked} handler={
                      hander 
                    }/>
                    )
                } else {
            
                  return (<LinkComponent key={file.id} link={file} isChecked={isChecked} handler={
                    hander 
                  } />)
                }
               })}
            </div>
            <button onClick={() => {
                dispatch(closeFile({
                 isModalOpen: false
                }))   
                // if (index !== null) {
                //   storedData.splice(storedData.indexOf(storedData[index]), 1, {...storedData[index], [store.event] : materials})
                
                //   dispatch(events[store.entity]({
                //       [`${store.entity}s`]: [...storedData]
                //   }))
                // } else {
                  handler(store.event, materials)
                  setMaterials([])
                // }
            }
             } className="add-button m-auto">Добавить</button>
        </Popup>
    )

}

MaterialPopup.propTypes = {
  handler: PropTypes.func
}


export default MaterialPopup;