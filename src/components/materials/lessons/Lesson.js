import {
    useParams,
    Link
} from "react-router-dom";
import { useSelector } from "react-redux";
import FileCard from "../files/FileCard";
import LinkCard from '../links/LinkCard'
function Lesson() {
    let { id } = useParams();
    const lessons = useSelector(state => state.lesson.lessons)

    const lesson = lessons.find(lesson => Number(lesson.id) === Number(id));

    return (
        <div>
            <div className="d-flex align-items-center">
                <Link className=" d-flex justify-content-center align-items-center navigation-btn navigation-btn--prev " to="/lessons">back</Link>
                <h1 className="schedule__title ml-3">{lesson.title}</h1>
            </div>
            <div className="card p-4 mt-4 mb-4">
                <h3 className="card__title">Описание</h3>
                <p className="card__description pl-0">{lesson.description}</p>
            </div>
            {lesson.tasks.length > 0 && (<div className="mt-4">
                <h3 className="card__title">Список задач</h3>
                <div className={`cards grid-2 mt-4`}>
                    {lesson.tasks.map(task => (

                        <div key={task.id} className="card flex-column flex-wrap align-items-start">
                            <div className="d-flex card__header justify-content-between align-items-center">
                                <h4 className="card__title">{task.title}</h4>
                            </div>
                            <p className="card__description">{task.description}</p>
                            <Link className="card__link" to={`/lesson/${task.id}`}>Подробнее</Link>
                        </div>
                    ))}
                </div>
            </div>)}
           
            {lesson.materials.length > 0 && (<div className="mt-4">
                <h3 className="card__title">Материалы</h3>
                <div className={`cards grid-3 mt-4`}>
                    {lesson.materials.map(material => (
                        <FileCard editMode={false} key={material.id} file={material} />))
                    }
                </div>
            </div>)}
            {lesson.links.length > 0 && (
                <div className="mt-4">
                    <h3 className="card__title">Ссылки</h3>
                    <div className={`cards grid-3 mt-4`}>
                        {lesson.links.map(link => (
                            <LinkCard editMode={false} key={link.id} link={link} />))
                        }
                    </div>
                </div>)}
        </div>

    )
}

export default Lesson;