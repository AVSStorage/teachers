import CourseImage from '../../static/img/courses.png';
import ThemeImage from '../../static/img/themes.png'
import LessonImage from '../../static/img/lessons.png'
import TaskImage from '../../static/img/tasks.png'
import TestImage from '../../static/img/tests.png'
import LinkImage from '../../static/img/links.png'
import FileImage from '../../static/img/files.png'
import MenuItemWithIcon from '../MenuItemWithIcon'
function MaterialMenu() {
    const items = [
        {'Курсы' : CourseImage, href:'courses'},
        {'Темы' : ThemeImage, href: 'themes'},
        {'Занятия' : LessonImage, href: 'lessons'},
        {'Задачи' : TaskImage, href: 'tasks'},
        {'Тесты' : TestImage, href: 'tests'},
        {'Ссылки' : LinkImage, href: 'links'
    },
{'Файлы': FileImage, href: 'files' }]
    return (
        <ul className="material-menu d-flex">
            {items.map((item, index) => (
                <MenuItemWithIcon key={index} text={Object.keys(item)[0]} icon={Object.values(item)[0]} href={item.href}  imageClass='material-menu__image' menuClassName='material-menu__item'/>
            ))}

        </ul>
    )
}


export default MaterialMenu