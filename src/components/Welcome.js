import Logo from '../components/global/header/Logo';
import { showModal } from '../action/modalAction';
import { useDispatch } from 'react-redux'
function Welcome() {
    const dispatch = useDispatch()
    return (
        <div className="d-flex align-items-center mb-8">
        <div className="left-side">
            <Logo/>
        </div>
        <div className="rigth-side d-flex  align-items-center justify-content-end">
            <button onClick={() => dispatch(showModal({
                modalType: 'loginPopup'
            }))} className="btn">Вход</button>
            <button onClick={() => dispatch(showModal({
                modalType: 'rolePopup'
            }))} className="btn">Регистрация</button>
        </div>
    </div>
    )
}

export default Welcome;