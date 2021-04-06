import MaterialMenu from '../../widgets/MaterialMenu';
import TagInput from '../../TagInput';
import { Fragment } from 'react'
import TaskModal from './TaskModal';

import TaskGrid from './TaskGrid';

function Tasks() {
    
    return (
        <Fragment>
            <MaterialMenu/>
            <TagInput tags={['Файлы','История','Алгебра']}/>
            <div className="d-flex mt-8 flex-column">
            <h2 className="material__title">Задачи</h2>
            <TaskGrid grid={2} materials={[
                { 
                    id: 1
                    ,title: 'Химия',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi ',
                    type: 'task'
                },
                { 
                    id: 2
                    ,title: 'Русский язык',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi',
                    type: 'task'
                },
                { 
                    id: 3
                    ,title: 'Биология',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi',
                    type: 'task'
                }
            ]}/>
            <TaskModal/>
            </div>
           
        </Fragment>
    )
}

export default Tasks;