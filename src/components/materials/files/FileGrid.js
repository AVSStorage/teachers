import PropTypes from 'prop-types';
import FileCard from './FileCard';
import { useDispatch, useSelector } from 'react-redux'
import { editFile } from "../../../action/fileAction";

function FileGrid({grid}) {
    const { isModalOpen, files } = useSelector(state => state.file)
    const dispatch = useDispatch()
    return (
        <div className={`cards grid-${grid} mt-4`}>
             <button onClick={() => dispatch(editFile({
                  isModalOpen: !isModalOpen,
                  actionType: 'add',
                  editIndex: null
             }))} className="card-new">
                    + Добавить файл
             </button>
            {files.map(file => (
                <FileCard key={file.id} file={file}/>
            ))}
            </div>
           
    )
}

FileGrid.propTypes = {
    grid: PropTypes.number
   
}

export default FileGrid;