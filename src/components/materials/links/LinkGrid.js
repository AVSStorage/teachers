
import PropTypes from 'prop-types';
import LinkCard from './LinkCard'
import { editLink} from '../../../action/linkAction'
import { useSelector, useDispatch } from 'react-redux'
function LinkGrid({ grid}){
    const { links, isModalOpen } = useSelector(state => state.link)
    const dispatch = useDispatch()
    return (
        <div className={`cards grid-${grid} mt-4`}>
                <button onClick={() => dispatch(editLink({
                     isModalOpen: !isModalOpen,
                     actionType: 'add',
                     editIndex: null
                }))} className="card-new">
                    + Добавить ссылку
                </button>
                {links.map(link => (
                    <LinkCard key={link.id} link={link}/>
                ))}
        </div>
    )
}

LinkGrid.propTypes = {
    grid: PropTypes.number
}

export default LinkGrid;