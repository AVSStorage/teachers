import Popup from '../Popup';
import { hideModal } from '../../action/modalAction'
import { deleteStudent } from '../../action/scheduleAction'
import StudentCard from '../student/StudentCard'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
function CancelModal() {
    const { modalType, modalProps } = useSelector(state => state.modal)
    const { students } = useSelector(state => state.schedule)
    const dispatch = useDispatch()
    const modalState = modalType === 'cancelModal';
    return (
        <Popup isSeen={modalState}>
            <button onClick={() => {
               dispatch(hideModal())
            }} type="button" className="btn-close align-self-end text-dark" aria-label="Close">
            </button>
            <p className="card__description card__description--big p-0">Вы уверены, что хотите отменить занятие с </p>
            <div className="cards d-flex justify-content-center  mt-3">
            <StudentCard card={modalProps && modalProps.student ? modalProps.student : {} } />
            </div>
            <p className="card__description card__description--big">на время</p>
            <p className="time">
                <span>{(modalProps && modalProps.student) && moment(modalProps.student.date, 'DD-MM-YYYY HH:mm:ss').format(' HH:mm')}</span>
                <span>{(modalProps && modalProps.student) && moment(modalProps.student.date, 'DD-MM-YYYY HH:mm:ss').format(' DD.MM.YYYY')}</span>
            </p>
            <button onClick={() => {
                  dispatch(hideModal())
                let deleteIndex = students.findIndex(stud => stud.id === modalProps.student.id)
                let modifiedStudents = [...students]
                modifiedStudents.splice(deleteIndex, 1)
                dispatch(deleteStudent({
                    students: modifiedStudents
                }))
              
            }} className="add-button-blue mt-3 pl-5 pr-5 pt-3 pb-3">Подтвердить</button>
            <button onClick={() => {
                dispatch(hideModal())
            }} className="btn w-100 btn-cancel mt-3 pl-5 pr-5 pt-3 pb-3 btn-outline-dark">Отменить</button>
        </Popup>
    )
}

export default CancelModal;