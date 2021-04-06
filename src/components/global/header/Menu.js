import { Link } from "react-router-dom";
import MessageIcon from '../../../static/img/mail.png'
import NotificationIcon from '../../../static/img/bell.png'
import './css/Menu.css'
import SettingsIcon from '../../../static/img/settings.png'
function Menu(){
    return (
          <ul className="menu d-flex p-0">
                    <li className="menu__item">
                        <Link to="/messages">
                            <img src={MessageIcon}/>
                        </Link>
                        <span className="menu__notification notification">2</span>
                    </li>
                    <li className="menu__item">
                        <Link to="/notifications">
                            <img src={NotificationIcon}/>
                        </Link>
                        <span className="notification">5</span>
                    </li>
                    <li className="menu__item">
                        <Link to="/settings">
                            <img src={SettingsIcon}/>
                        </Link>
                    </li>
        </ul>
    )
}

export default Menu;
