import MaterialMenu from '../widgets/MaterialMenu';
import MaterialCard from '../MaterialCard'
import TagInput from '../TagInput';
import { Fragment } from 'react'
import TestModal from './tests/TestModal';
function Test(){
    return (
        <Fragment>
            <MaterialMenu />
            <TagInput tags={['Файлы', 'История', 'Алгебра']} />
            <div className="d-flex mt-8 flex-column">
                <h2 className="material__title">Тесты</h2>
                <MaterialCard grid={2} addNewText="Добавить тест" type={'test'} />
            </div>
            <TestModal />
        </Fragment>
    )
    
}

export default Test;