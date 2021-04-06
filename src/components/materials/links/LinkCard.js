
import SettingIcon from '../../../static/img/settings.png'
import PropTypes from 'prop-types';
import { editLink} from '../../../action/linkAction'
import { useSelector, useDispatch } from 'react-redux'

function LinkCard({ link, editMode = true }) {
    const { isModalOpen } = useSelector(state => state.link)
    const dispatch = useDispatch()
    return (

        <div key={link.id} className="card p-4 d-flex flex-column">
            <div className="d-flex justify-content-between w-100 mb-3">
                <div>
                    <h3 className="card__title">{link.name}</h3>
                    <a href={link.href}>{link.href}</a>
                </div>
                {editMode && (
                    <button onClick={() => dispatch(editLink({
                        isModalOpen: !isModalOpen,
                        actionType: 'edit',
                        editIndex: link.id - 1
                    }))} className="btn btn-bg-round">
                        <img src={SettingIcon} />
                    </button>
                )}

            </div>
            <img className="card__image" style={{ backgroundImage: `url('${require('../../../static/img/' + link.image).default}')` }} />
        </div>
    )
}

LinkCard.propTypes = {
    link: PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        href: PropTypes.string,
        image: PropTypes.string
    }),
    editMode: PropTypes.bool
}

export default LinkCard;