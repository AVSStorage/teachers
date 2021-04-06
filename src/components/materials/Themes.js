import MaterialMenu from '../widgets/MaterialMenu';
import MaterialCard from '../MaterialCard'
import TagInput from '../TagInput';
import { Fragment } from 'react'
import ThemeModal from './themes/ThemeModal';

function Themes() {
    return (
        <Fragment>
            <MaterialMenu/>
            <TagInput tags={['Файлы','История','Алгебра']}/>
            <div className="d-flex mt-8 flex-column">
            <h2 className="material__title">Темы</h2>
            <MaterialCard  grid={2} type={'theme'} addNewText="Добавить тему" materials={[
                { 
                    id: 1
                    ,title: 'Название темы',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
                    type: 'theme'
                },
                { 
                    id: 2
                    ,title: 'Название темы',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
                    type: 'theme'
                },
                { 
                    id: 3
                    ,title: 'Название темы',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ',
                    type: 'theme'
                }
            ]}/>
            </div>
            <ThemeModal/>
        </Fragment>
    )
}

export default Themes;