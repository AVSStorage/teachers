import Popup from "../../Popup";
import { hideModal, showModal } from '../../../action/modalAction'
import { useDispatch, useSelector } from 'react-redux'
import { authUser } from '../../../action/userActions'
import { useHistory } from 'react-router-dom'
function LoginPopup() {
    const { modalType } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    let history = useHistory();
    return (
        <Popup isSmall={true} isSeen={modalType === 'loginPopup'}>
             <button onClick={() => {
               dispatch(hideModal())
            }} type="button" className="btn-close align-self-end text-dark" aria-label="Close"></button>
            <div className="d-flex flex-column align-items-center">
            <h3 className="card__title mb-4">Авторизация</h3>
            <input className="input mb-3 w-100" placeholder="Введите логин"/>
            <input className="input mb-3 w-100"  type="password" placeholder="Введите пароль"/>
            <div className="d-flex w-100">
            <button className="btn" onClick={() => dispatch(showModal({
                modalType: 'resetPasswordPopup'
            }))}><span>Забыли пароль?</span></button>
            </div>
            <button onClick={() => {
                 dispatch(authUser({
                     isAuth: true
                 }))
                  history.push("/teachers");
            }} style={{maxWidth: '100%'}} className="btn add-button mt-3 mb-3">Войти</button>
            <button onClick={() => {
                dispatch(showModal({
                    modalType: 'rolePopup'
                }))
            }} className="btn"><span>Зарегистрироваться</span></button>
            </div>
        </Popup>
    )
}

export default LoginPopup;