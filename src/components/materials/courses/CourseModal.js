import Popup from '../../Popup'
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from 'react'
import MaterialWidget from '../MaterialWidget'
import {addCourse, editCourse} from '../../../action/courseAction'
import TagWidget from '../TagWidget'
import MaterialPopup from '../MaterialPopup';
import { Fragment } from 'react'
import PopupButtons from '../../PopupButtons'
function CourseModal(){
    const dispatch = useDispatch()
    const {isModalOpen, actionType, editIndex, courses} = useSelector(state => state.course)
    
    let [course, changeCourse] = actionType === 'edit' ? useState({...courses[editIndex]}) : useState({
            id: courses.length + 1, 
            materials: [],
            tags: [],
            links: []
    })

    useEffect(() => {
        changeCourse(actionType === 'edit' ? {...courses[editIndex]} :
        {
            id: courses.length + 1, 
            materials: [],
            tags: [],
            links: []
    })
    },[actionType, courses[editIndex]])
    
    return (
        <Fragment>
        <Popup isSeen={isModalOpen}>
             <button onClick={() => dispatch(editCourse({
                 isModalOpen: !isModalOpen,
                 actionType,
                editIndex: null
             }))} type="button" className="btn-close align-self-end text-dark" aria-label="Close">
    </button>
    <h1>{actionType === 'add' ? 'Создать курс': 'Редактировать курс'}</h1>
    { actionType === 'edit' && (<div className="d-flex justify-content-center"><span>ID <b>{course.id}</b></span></div>)}
             <label className="r3">Название</label>
          <input value={course.title} onChange={(evt) => {
              changeCourse({...course, title: evt.target.value })
           
          }} className="input"/>
          <label className="r3">Описание</label>
          <textarea onChange={(evt) => {
            changeCourse({...course, description: evt.target.value })
        
          }} value={course.description}  rows="5"  className="input" placeholder="Описание"></textarea>
          <label className="r3">Материалы</label>
          <MaterialWidget event={'materials'} entity={'course'} tags={course.materials ? course.materials : []}/>
          <label className="r3">Ссылки</label>
          <MaterialWidget event={'links'} entity={'course'} tags={course.links ? course.links: []}/>
          <TagWidget handler={editIndex ? null : (key, values) => {
               changeCourse({...course, [key]: values})
           }} values={course.tags ? course.tags: []} entity={'course'}/>
          <PopupButtons action={actionType} onClose={() => {
                 let savedData = [...courses];
                 if (actionType === 'edit'){
                 savedData.splice(editIndex, 1, {...course})
                 } else {
                    savedData = [...savedData, course]
                 }
              dispatch(addCourse({
                 isModalOpen: false,
                 courses: [...savedData],
                 editIndex: null
             }))}}/>
       
        </Popup>
           <MaterialPopup handler={editIndex ? null : (key, values) => {
               changeCourse({...course, [key]: values})
           }}/>
        </Fragment>
    )
}

export default CourseModal;