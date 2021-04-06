
import EditIcon from '../../../static/img/edit.png'
import DownloadIcon from '../../../static/img/download.png'
import { useDispatch, useSelector } from 'react-redux'
import { editFile } from "../../../action/fileAction";
import PropTypes from 'prop-types';
function FileCard({ file, editMode = true }) {
    const { isModalOpen } = useSelector(state => state.file)
    const dispatch = useDispatch()
    return (

        <div key={file.id} className="card  p-4 d-flex flex-column">
            <div className="d-flex w-100 mb-3 justify-content-between">
                <div className="d-flex align-items-center">
                    <img className="card__icon" src={require('../../../static/img/' + file.extension + '.png').default} />
                    <h4 className="card__title mb-0 ml-2">{file.name}</h4>
                </div>
                {editMode && (
                    <div className="d-flex align-items-center">
                        <button onClick={() => {
                            dispatch(editFile({
                                editIndex: file.id -1,
                                isModalOpen: !isModalOpen,
                                actionType: 'edit'
                            }))
                        }} className="btn btn-bg-round">
                            <img src={EditIcon} />
                        </button>
                        <button className="btn ml-2 btn-bg-round">
                            <img src={DownloadIcon} />
                        </button>
                    </div>
                )}

            </div>
            <a className="d-flex w-100" href={`/file/${file.id}`}>
                <img className="card__image" style={{ backgroundImage: `url('${require('../../../static/img/' + file.image).default}')` }} />
            </a>
        </div>

    )
}

FileCard.propTypes = {
    file: PropTypes.exact({
        id: PropTypes.number,
        extension: PropTypes.string,
        name: PropTypes.string,
        image: PropTypes.string
    }),
    editMode: PropTypes.bool
}

export default FileCard;