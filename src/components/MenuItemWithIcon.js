import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
function MenuItemWithIcon({text, icon, menuClassName, href, imageClass}) {
    return (
        <li className={menuClassName}>
            <NavLink activeClassName='is-active' to={`/${href}`}>
            <img className={imageClass} src={icon}/>
            {text}</NavLink>
            
        </li>
    )
}

MenuItemWithIcon.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    menuClassName: PropTypes.string,
    href: PropTypes.string,
    imageClass: PropTypes.string
}



export default MenuItemWithIcon
