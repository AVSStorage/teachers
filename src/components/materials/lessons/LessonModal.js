import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, Fragment } from 'react'
import { editLesson, addLesson } from '../../../action/lessonAction'
import Popup from '../../Popup'
import MaterialWidget from '../MaterialWidget'
import TagWidget from "../TagWidget";
import PopupButtons from "../../PopupButtons";
import MaterialPopup from "../MaterialPopup";
function LessonModal() {
    const { isModalOpen, actionType, editIndex, lessons } = useSelector(state => state.lesson);
    const dispatch = useDispatch()
    const [lesson, changeLesson] = useState(actionType === 'add' ? {
        id: lessons.length + 1,
        title: '',
        description: '',
        type: 'lesson',
        tasks: [

        ],
        links: [],
        materials: [],
        homework: [],
        tags: []

    } : { ...lessons[editIndex] })

    useEffect(() => {
        changeLesson(actionType === 'edit' ? { ...lessons[editIndex] } :
            {
                id: lessons.length + 1,
                title: '',
                description: '',
                type: 'lesson',
                tasks: [

                ],
                links: [],
                materials: [],
                homework: [],
                tags: []
            })
    }, [actionType, lessons[editIndex]])
    return (

        <Fragment>
            <Popup isSeen={isModalOpen}>
                <button onClick={() => dispatch(editLesson({
                    isModalOpen: !isModalOpen,
                    actionType,
                    editIndex: null
                }))} type="button" className="btn-close align-self-end text-dark" aria-label="Close">
                </button>
                <h1>{actionType === 'add' ? 'Создать занятие' : 'Редактировать занятие'}</h1>
                {actionType === 'edit' && (<div className="d-flex justify-content-center"><span>ID <b>{lesson.id}</b></span></div>)}
                <label className="r3">Название</label>
                <input className="input" value={lesson.title} onChange={(evt) => {

                    changeLesson({ ...lesson, title: evt.target.value })
                }} />
                <label className="r3">Описание</label>
                <textarea className="input" value={lesson.description} onChange={(evt) => {
                    changeLesson({ ...lesson, description: evt.target.value })
                }} />
                <label className="r3">Список задач</label>
                <MaterialWidget entity={"lesson"} event={"tasks"} tags={lesson.tasks ? lesson.tasks : []} />
                <label className="r3">Материалы</label>
                <MaterialWidget entity={"lesson"} event={"materials"} tags={lesson.materials ? lesson.materials : []} />
                <label className="r3">Ссылки</label>
                <MaterialWidget entity={"lesson"} event={"links"} tags={lesson.links ? lesson.links : []} />
                <label className="r3">Домашнее задание</label>
                <MaterialWidget entity={"lesson"} event={"homework"} tags={lesson.homework ? lesson.homework: [] } />
                <TagWidget entity={'lesson'} values={lesson.tags ? lesson.tags: []} handler={(key, value) => {
                changeLesson({ ...lesson, [key]: value})
            }} />
                <PopupButtons action={actionType} onClose={() => {
                    let savedData = [...lessons];
                    if (actionType === 'edit') {
                        savedData.splice(editIndex, 1, { ...lesson })
                    } else {
                        savedData = [...savedData, lesson]
                    }
                    dispatch(addLesson({
                        isModalOpen: false,
                        lessons: [...savedData],
                        editIndex: null
                    }))
                }} />
            </Popup>
            <MaterialPopup handler={(key, value) => {
                changeLesson({ ...lesson, [key]: value})
            }}/>
        </Fragment>
    )
}

export default LessonModal;