
import MaterialMenu from '../widgets/MaterialMenu'
import MaterialCard from '../MaterialCard'
import React from 'react';
import TagInput from '../TagInput';

import CourseModal from '../materials/courses/CourseModal'
function Course() {
  
    return (
        <React.Fragment>
            <MaterialMenu/>      
            <TagInput tags={['Файлы','История','Алгебра']}/>
            <div className="d-flex mt-8 flex-column">
            <h2 className="material__title">Курсы</h2>
            <MaterialCard grid={3} title={'Курсы'} addNewText="Добавить курс" type={"course"} />
                </div>
              
                <CourseModal/>
             
        </React.Fragment>
    )
}

export default Course;