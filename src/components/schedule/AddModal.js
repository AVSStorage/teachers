import Popup from '../Popup';
import { hideModal } from '../../action/modalAction'
import StudentCard from '../student/StudentCard'
import { addStudent } from '../../action/scheduleAction'
import moment from 'moment'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useState, Fragment } from 'react'

const StudentCheckComponent = ({ checkHandler, student, id }) => {
    return (<Fragment>
        <input onChange={checkHandler} id={`student${id}`} value={id} name="student" className="d-none" type="radio" />
        <label htmlFor={`student${id}`}>
            <StudentCard card={
                student
            } />
        </label>
    </Fragment>)
}

function AddModal() {
    const { modalType, modalProps } = useSelector(state => state.modal)
    const { students } = useSelector(state => state.schedule)
    const dispatch = useDispatch()
    const modalState = modalType === 'addModal';
    const [student, changeStudent] = useState({
        status: 'new'
    })
    const studentsTest = [
        {
            id: 1,
            image: 'avatar_student.png',
            title: "Петя Иванов"
        },
        {
            id: 2,
            image: 'avatar_student2.png',
            title: "Валерия Сысоева"
        },
        {
            id: 3,
            image: 'avatar_student2.png',
            title: "Валерия Сысоева"
        },
        {
            id: 4,
            image: 'avatar_student.png',
            title: "Петя Иванов"
        }
    ]
    return (
        <Popup isSeen={modalState}>
            <div className="d-flex flex-column align-items-start">
                <div className="d-flex w-100 align-items-start justify-content-between mb-4">
                    <h2 className="material__title">Добавить ученика</h2>
                    <button onClick={() => {
                        dispatch(hideModal())
                    }} type="button" className="btn-close align-self-end text-dark" aria-label="Close">
                    </button>

                </div>
                <h3 className="card__title">Выберите ученика</h3>
                <div className="cards grid-2 mb-3 w-100">
                    {studentsTest.map(stud => (
                        <StudentCheckComponent key={stud.id} checkHandler={() => { changeStudent({ ...student, ...stud }) }} student={stud} id={stud.id} />

                    ))}
                </div>
                <h3 className="card__title">Выберите время начала занятий</h3>
                <input onChange={(evt) => {
                    const time = evt.target.value.split(':');


                    changeStudent({ ...student, date: moment(modalProps.date, 'DD-MM-YYYY').set({ hour: Number(time[0]), minute: Number(time[1]) }).format('DD-MM-YYYY HH:mm:ss') })
                }} className="w-100 input" type="time" />
                <h3 className="card__title mt-4">Выберите длительность занятий (мин.)</h3>
                <input value={student.duration} onChange={(evt) => {
                    changeStudent({ ...student, duration: evt.target.value })
                }} className="w-100 input" type="number" />
                <button onClick={() => {
                    dispatch(hideModal())
                    dispatch(addStudent({ students: [...students, student] }))
                    changeStudent({})
                }} className="add-button-blue mt-3 pl-5 pr-5 pt-3 pb-3">Добавить</button>
            </div>
        </Popup>
    )
}

StudentCheckComponent.propTypes = {
    checkHandler: PropTypes.func,
    student: PropTypes.object,
    id: PropTypes.number
}
export default AddModal;