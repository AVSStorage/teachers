import { useDispatch, useSelector } from "react-redux";
import { selectFile } from '../../action/fileAction'

import PropTypes from 'prop-types';
function MaterialWidget(props) {
    const store = useSelector(state => state.file)
    const dispatch = useDispatch();
    const { tags , event, entity } = props;

    return (
        <div className="material__widget mt-3">
            <div className="d-flex flex-wrap">
            {tags.map(tag => (
                <div key={tag.id + Math.random()} className="btn btn-outline-dark tag mr-3 mb-2">
                    {tag.name}
                    <button className="btn-close">
            
            </button>
                </div>
            ))}
          </div>
            <button onClick={() => dispatch(selectFile({
                isModalOpen: !store.isModalOpen,
                event,
                entity
            }))} className="plus-button mr-3">
                +
            </button>
        </div>
    )
}

MaterialWidget.propTypes = {
    event: PropTypes.string,
    tags: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string,
            extension: PropTypes.string,
            image:  PropTypes.string
        })
    ),
    entity: PropTypes.string
}
export default MaterialWidget;