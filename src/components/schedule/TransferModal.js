import Popup from '../Popup';
import { hideModal } from '../../action/modalAction'
import { transferStudent } from '../../action/scheduleAction'
import { useState } from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
function TransferModal() {
    const { modalType, modalProps } = useSelector(state => state.modal)
    const { students } = useSelector(state => state.schedule)
    const dispatch = useDispatch()
    const modalState = modalType === 'transferModal';
    const [date, setDate] = useState({})
    return (
        <Popup isSeen={modalState}>
            <div className="d-flex flex-column">
                <div className="d-flex w-100 align-items-start justify-content-between mb-4">
                    <h2 className="material__title">Перенос занятий</h2>
                    <button onClick={() => {
                        dispatch(
                            hideModal()
                        )
                    }} type="button" className="btn-close align-self-end text-dark" aria-label="Close">
                    </button>

                </div>
                <label className="card__title">Выберите новую дату</label>
                <input onChange={(evt) => {
                    setDate({...date, isoDate: evt.target.value})
                }} className="input w-100" type="date" />
                <label className="card__title">Выберите время начала занятий</label>
                <input onChange={(evt) => {
                    setDate({...date, time: evt.target.value})
                }} className="input w-100" type="time" />
                <label className="card__title">Выберите длительность занятий (мин.)</label>
                <input  onChange={(evt) => {
                    setDate({...date, duration: evt.target.value})
                }} className="input w-100" type="number" />
                <button onClick={
                () => {
                    const [hour, minute] = date.time.split(':');
               
                    const newDate = moment(date.isoDate, 'YYYY-MM-DD').set({hour, minute}).format('DD-MM-YYYY HH:mm:ss')
                    const newStudents = [...students]
                    const index = newStudents.findIndex(stud => stud.id === modalProps.student.id)
                    dispatch(hideModal())
                    newStudents.splice(index, 1, {...modalProps.student, status: 'transfer', date: newDate, oldDate: modalProps.student.date  })
                    dispatch(transferStudent({
                        students: newStudents}))
                }
                } className="add-button-blue mt-3 pl-5 pr-5 pt-3 pb-3">Перенести</button>
            </div>
        </Popup>
    )
}

export default TransferModal;