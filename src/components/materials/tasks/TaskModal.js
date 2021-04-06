import Popup from '../../Popup'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, Fragment } from 'react'
import { addTask, editTask } from "../../../action/taskAction"
import PopupButtons from '../../PopupButtons'
import MaterialWidget from '../MaterialWidget'
import TagWidget from '../TagWidget'
import MaterialPopup from '../MaterialPopup'
function TaskModal() {


    let { isModalOpen, tasks, action, editIndex } = useSelector(state => ({
        isModalOpen: state.task.isModalOpen,
        tasks: state.task.tasks,
        editIndex: state.task.editIndex,
        action: state.task.action
    }));

 

   
    let modalTitle;
    let handler = () => { };

    let task, setTask;
    if (editIndex === null) {
        modalTitle = 'Создать задачу'
        handler = (task) => dispatch(addTask({
            isModalOpen: !isModalOpen,
            editIndex: null,
            tasks: [...tasks, task]
        }));
        [task, setTask] = useState({
            id: tasks.length + 1,
            name: '',
            title: '',
            description: '',
            tags: [],
            type: 'task',
            condition: '',
            hint: '',
            decision:'',
            materials: [],
            links: [],
            condinition_files: [],
            decision_files: [],
            hint_files: []
        })
    } else  {
        modalTitle = 'Редактировать задачу'
        handler = (task) => {
            console.log(task)
            const newTasks = [...tasks]
            //const index = newTasks.findIndex(tas => tas.id === task.id)
            newTasks[editIndex] = task
           
            dispatch(addTask({
                isModalOpen: !isModalOpen,
                tasks: newTasks,
                editIndex:null
            }))
        }
        [task, setTask] = useState({ ...tasks[editIndex] });
      
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    useEffect(() => {
        setTask(action === 'edit' ? { ...tasks[editIndex] } : {
            id: tasks.length + 1,
            name: '',
            title: '',
            description: '',
            condition: '',
            hint: '',
            decision:'',
            tags: [],
            type: 'task',
            materials: [],
            links: [],
            condinition_files: [],
            decision_files: [],
            hint_files: []
        })
    }, [tasks[editIndex], action]);

    // let memoSetTask = useCallback((task) => {
       
    //     setTask(task)
    // })


    const dispatch = useDispatch();
    return (
        <Fragment>
        <Popup isSeen={isModalOpen}>
            <button type="button" className="btn-close align-self-end text-dark" aria-label="Close"
                onClick={() => dispatch(editTask({
                    editIndex: null,
                    isModalOpen: !isModalOpen
                }))}
            >
            </button>
            <h1>{modalTitle}</h1>
            <label className="r3">Название</label>
            <input  onChange={(evt) => { setTask({ ...task, title: evt.target.value }) }} value={task.title} className="input" />
            <label className="r3">Описание</label>
            <textarea rows="5" onChange={(evt) => { setTask({ ...task, description: evt.target.value }) }} value={task.description} className="input" placeholder="Описание"></textarea>
            <label className="r3">Условие</label>
            <input value={task.condition} onChange={(evt) => { setTask({ ...task, condition: evt.target.value }) }} className="input" />
            <MaterialWidget tags={task.condinition_files ? task.condinition_files : []} entity={'task'}
                event={'condinition_files'} />
            <label className="r3">Подсказки</label>
            <input value={task.hint} onChange={(evt) => { setTask({ ...task, hint: evt.target.value }) }} className="input" />
            <MaterialWidget tags={task.hint_files ? task.hint_files : []} entity={'task'} event={'hint_files'} />
            <label className="r3">Решения</label>
            <input value={task.decision} onChange={(evt) => { setTask({ ...task, decision: evt.target.value }) }} className="input" />
            <MaterialWidget tags={task.decision_files ? task.decision_files: []} entity={'task'} event={'decision_files'} />
            <label className="r3">Материалы</label>
            <MaterialWidget tags={task.materials ? task.materials : []} entity={'task'} event={'materials'} />
            <label className="r3">Ссылки</label>
            <MaterialWidget tags={task.links ? task.links : []} entity={'task'} event={'links'} />
            <TagWidget values={task.tags ? task.tags  : []} handler={(key, value) => {
                 setTask({ ...task, [key]: value }) }} entity={'task'} />

            <PopupButtons action={action} onClose={() => handler(task)} />
        </Popup>
        <MaterialPopup handler={(key, value) => { console.log(task); setTask({ ...task, [key]: value }) }}/>
        </Fragment>
    )
}

export default TaskModal;