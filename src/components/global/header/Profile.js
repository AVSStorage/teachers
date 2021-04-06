import Avatar from '../../../static/img/avatar.png'
import './css/Profile.css'
import { ReactComponent as DropDown } from '../../../static/img/down-btn.svg';
function Profile() {

    return (
        <div className="profile d-flex">
                    <img className="profile__image" src={Avatar}/>
                    <div className="profile__wrapper d-flex flex-column justify-content-center">
                        <span className="profile__user">Степан Елисеев</span>
                        <span className="profile__role text-gray-small">Учитель</span>
                    </div>
            <button className="profile__button btn">
                 <DropDown/>
            </button>
        </div>
    )
}

export default Profile
