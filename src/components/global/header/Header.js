import Logo from './Logo';
import Search from './Search'

import Menu from './Menu'
import Profile from './Profile'
function Header() {
    return (
        <div className="d-flex align-items-center mb-8">
            <div className="left-side">
                <Logo/>
            </div>
            <div className="rigth-side d-flex  align-items-center justify-content-between">
                <Search/>
                <Menu/>
                <Profile/>
            </div>
        </div>
    )
}

export default Header;