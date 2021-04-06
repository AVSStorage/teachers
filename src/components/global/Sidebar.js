import { NavLink, Link } from "react-router-dom";
import './Sidebar.css'
import {ReactComponent as ScheduleIcon} from '../../static/img/schedule-icon.svg';
import {ReactComponent as MaterialIcon} from '../../static/img/material-icon.svg';
import {ReactComponent as ChatIcon} from '../../static/img/chat-icon.svg';
import {ReactComponent as GraduationIcon} from '../../static/img/graduation-icon.svg';
import {ReactComponent as UserIcon} from '../../static/img/user-icon.svg';
function Sidebar(){
    return (
        <div className="d-flex flex-column sidebar">
            <h2 className="sidebar-title">Главное меню</h2>
            <ul className="menu-list">
                <li> <NavLink exact activeClassName='is-active' to="/teachers"><ScheduleIcon/> Расписание</NavLink></li>
                <li> <NavLink activeClassName='is-active' to="/courses"><MaterialIcon/> Мои материалы</NavLink></li>
                <li> <NavLink activeClassName='is-active' to="/students"><GraduationIcon/> Ученики</NavLink></li>
                <li> <NavLink activeClassName='is-active' to="/blog"><ChatIcon/> Блог</NavLink></li>
                <li> <NavLink activeClassName='is-active' to="/profile"><UserIcon/> Профиль</NavLink></li>
            </ul>
            <div className="banner">
                <a className="banner__link banner__link--acent" href="tel:+7 800 555 444 33">+7 800 555 444 33</a>
                <Link to="/service" className="text-gray-small banner__text">Правила сервиса</Link>
            </div>
            <span className="text-gray-small mt-4 mb-2">Автоматизация <br/> учебного процесса</span>
            <span className="text-black-small">
            2021 ©
            <span className="color-primary font-weight-bold">РокетЛаб. </span><br/>

Все права защищены.
            </span>
        </div>
    )
}

export default Sidebar;