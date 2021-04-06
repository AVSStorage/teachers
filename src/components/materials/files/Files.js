
import MaterialMenu from '../../widgets/MaterialMenu'
import FileGrid from './FileGrid'
import { Fragment } from 'react';
import TagInput from '../../TagInput';
import FileModal from './FileModal';

function Files() {
    const files = [
        {
            id: 1, 
            extension: 'pdf',
            name: 'Алгебра',
            image: 'file_example.png'
        },
        {
            id: 2, 
            extension: 'pdf',
            name: 'Точка ПАО',
            image: 'file_example.png'
        },
        {
            id: 3, 
            extension: 'txt',
            name: 'ДЗ',
            image: 'file_example.png'
        }
    ]
    return (
        <Fragment>
            <MaterialMenu/>
            <TagInput tags={['Файлы','История','Алгебра']}/>
            <div className="d-flex mt-8 flex-column">
                <h2 className="material__title">Файлы</h2>
                <FileGrid files={files} grid={3}/>
            </div>
            <FileModal/>
        </Fragment>
    )
}


export default Files;