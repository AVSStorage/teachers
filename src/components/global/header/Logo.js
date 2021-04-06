import './css/Logo.css'
import OpenMenuButtonIcon from '../../../static/img/logo-btn.png'
function Logo() {

    return (
        <div className="d-flex align-items-center">
            <div className="icon">
                <img src={process.env.PUBLIC_URL + '/logo-icon.png'}/>
            </div>
            <h1 className="header-title">Рокетлаб</h1>
            <button className="btn">
                <img src={OpenMenuButtonIcon}/>
            </button>
        </div>
    )
}

export default Logo;