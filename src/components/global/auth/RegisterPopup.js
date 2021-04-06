import RolePopup from "./RolePopup";
import { useSelector,useDispatch } from 'react-redux'
import { authUser } from '../../../action/userActions'
import { Fragment } from 'react'
import { hideModal } from '../../../action/modalAction'
import Popup from '../../Popup'
import { useHistory } from 'react-router-dom'
function RegisterPopup() {
    const { modalType, modalProps } = useSelector(state => state.modal)
    const types = {
        teacher: 'преподавателя',
        parent: 'родителя',
        student:'ученика'

    }

    let history = useHistory();

    const dispatch = useDispatch()
    return (
        <Fragment>
            <RolePopup isSeen={modalType === 'rolePopup'} />
            <Popup isSeen={modalType === 'registerPopup'}>
            <button onClick={() => {
                dispatch(hideModal())
            }} type="button" className="btn-close align-self-end text-dark" aria-label="Close"></button>
                <div className="d-flex flex-column align-items-center">
                <h3 className="card__title mb-4">Регистрация {modalProps && types[modalProps.role]}</h3>
                <div className="grid-2">
                <input className="input  w-100" placeholder="Введите имя" />
                <input className="input w-100"  placeholder="Введите фамилию" />
                <input className="input w-100" type="tel" placeholder="Введите телефон" />
                <input className="input  w-100" type="email"  placeholder="Введите email" />
                {(modalProps && (modalProps.role !== 'teacher')) && (
                    <input placeholder="Пригласительная ссылка"  className="input mb-3 w-100" style={{gridColumnStart: 1, gridColumnEnd: 3}}/>
                )}
                <input className="input  w-100" type="password"  placeholder="Введите пароль" />
                <input className="input w-100" type="password"  placeholder="Повторите пароль" />

                </div>
                <button onClick={() => {
                    dispatch(hideModal());
                          dispatch(authUser({
                            isAuth: true
                        }))
                        history.push("/teachers");
                }}  className="btn add-button mt-5 mb-3">Зарегистрироваться</button>
                </div>
            </Popup>
        </Fragment>
    )
}

export default RegisterPopup;