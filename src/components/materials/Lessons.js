import MaterialMenu from '../widgets/MaterialMenu';
import MaterialCard from '../MaterialCard'
import TagInput from '../TagInput';
import LessonModal from './lessons/LessonModal'
import { Fragment } from 'react'
function Lessons() {
    return (
        <Fragment>
        <MaterialMenu/>
            <TagInput tags={['Файлы','История','Алгебра']}/>
            <div className="d-flex mt-8 flex-column">
            <h2 className="material__title">Занятия</h2>
            <MaterialCard type={"lesson"}  grid={2} addNewText="Добавить занятие" />
            </div>
            <LessonModal/>
            </Fragment>
    )
}

export default Lessons;