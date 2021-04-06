import Popup from "../../Popup";
import { hideModal, showModal } from '../../../action/modalAction'
import { useDispatch, useSelector } from 'react-redux'
function ResetPasswordPopup() {
    const { modalType } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    return (
        <Popup isSmall={true} isSeen={modalType === 'resetPasswordPopup'}>
        <button onClick={() => {
          dispatch(hideModal())
       }} type="button" className="btn-close align-self-end text-dark" aria-label="Close"></button>
       <div className="d-flex flex-column align-items-center">
       <h3 className="card__title mb-4">Восстановление пароля</h3>
       <input className="input mb-3 w-100" type="email" placeholder="Введите Email"/>
       
       <button style={{maxWidth: '100%'}} className="btn add-button mt-3 mb-3">Восстановить</button>
       <button onClick={() =>  dispatch(showModal({
                    modalType: 'rolePopup'
                }))} className="btn"><span>Зарегистрироваться</span></button>
       </div>
   </Popup>
    )
}

export default ResetPasswordPopup;