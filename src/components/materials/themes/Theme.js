import {
    useParams,
    Link
  } from "react-router-dom";
import {  useSelector } from "react-redux";
import FileCard from "../files/FileCard";
import LinkCard from '../links/LinkCard'
function Theme() {
    let { id } = useParams();
    const themes = useSelector(state => state.theme.themes)
   
    const theme = themes.find(theme => Number(theme.id) === Number(id));
  
    return (
        <div>
            <div className="d-flex align-items-center">
        <Link className=" d-flex justify-content-center align-items-center navigation-btn navigation-btn--prev " to="/themes">back</Link>
        <h1 className="schedule__title ml-3">{theme.title}</h1>
        </div>
        <div className="card p-4 mt-4 mb-4">
            <h3 className="card__title">Описание</h3>
            <p className="card__description pl-0">{theme.description}</p>
        </div>
        { theme.lessons.length > 0 && (<div className="mt-4">
            <h3 className="card__title">Занятия</h3>
            <div className={`cards grid-2 mt-4`}>
            {theme.lessons.map(lesson => (
              
                     <div key={lesson.id} className="card flex-column flex-wrap align-items-start">
                         <div className="d-flex card__header justify-content-between align-items-center">
                                        <h4 className="card__title">{lesson.title}</h4>
                                </div>
                                <p className="card__description">{lesson.description}</p>
                                <Link className="card__link" to={`/lesson/${lesson.id}`}>Подробнее</Link>
                    </div>
            ))}
            </div>
        </div>)}
        { theme.materials.length > 0 && (<div className="mt-4">
            <h3 className="card__title">Материалы</h3>
            <div className={`cards grid-3 mt-4`}>
            {theme.materials.map(material => (
            <FileCard key={material.id} file={material}/>))
            }
            </div>
            </div>)}
            { theme.links.length > 0 && (
            <div className="mt-4">
            <h3 className="card__title">Ссылки</h3>
            <div className={`cards grid-3 mt-4`}>
            {theme.links.map(link => (
            <LinkCard key={link.id} link={link}/>))
            }
            </div>
            </div>)}
        </div>
      
    )
}

export default Theme;