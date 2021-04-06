import Popup from "../../Popup";
import { hideModal, showModal } from '../../../action/modalAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import PropTypes from "prop-types";
import Parent from '../../../static/img/student.png'
import Student from '../../../static/img/boy.png'
import Teacher from '../../../static/img/professor.png'
function RolePopup({ isSeen }) {
    const dispatch = useDispatch()
    const [role, changeRole] = useState('')
    return (
        <Popup isSeen={isSeen}>
            <button onClick={() => {
                dispatch(hideModal())
            }} type="button" className="btn-close align-self-end text-dark" aria-label="Close"></button>
            <form onSubmit={(evt) => {
                evt.preventDefault()
                dispatch(showModal({
                    modalType: 'registerPopup',
                    modalProps: {
                        role
                    }
                }))
            }} className="d-flex form flex-column align-items-center">
                <h3 className="card__title mb-4">Регистрация</h3>
                <div className="grid-3">
                    <input onChange={(evt) => {
                        changeRole(evt.target.value)
                    }} id="teacher" value="teacher" type="radio" name="role" className="d-none" />
                    <label htmlFor="teacher" className="card justify-content-between align-items-center p-3">
                        <img src={Teacher} />
                        <p>Я преподаватель</p>

                    </label>

                    <input onChange={(evt) => {
                        changeRole(evt.target.value)
                    }}  id="student" value="student" type="radio" name="role" className="d-none" />
                    <label htmlFor="student" className="card justify-content-between align-items-center p-3">
                        <img src={Student} />
                        <p className="mt-2">Я ученик</p>

                    </label>

                    <input onChange={(evt) => {
                        changeRole(evt.target.value)
                    }}  id="parent" value="parent" type="radio" name="role" className="d-none" />
                    <label htmlFor="parent" className="card justify-content-between align-items-center p-3">
                        <img src={Parent} />
                        <p className="mt-2">Я родитель</p>

                    </label>

                </div>
                <button style={{ maxWidth: '100%' }} className="btn add-button mt-3 mb-3">Продолжить</button>

            </form>
        </Popup>
    )
}

RolePopup.propTypes = {
    isSeen: PropTypes.bool
}
export default RolePopup;