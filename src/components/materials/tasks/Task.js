import {
    useParams,
    Link
  } from "react-router-dom";
import FileCard from '../../materials/files/FileCard'  
import {  useSelector } from "react-redux";
import LinkCard from "../links/LinkCard";
function Task() {
    let { id } = useParams();
    const tasks = useSelector(state => state.task.tasks)
  
    const task = tasks.find(task => Number(task.id) === Number(id));
    console.log(task)
    return (
        <div>
        <div className="d-flex align-items-center">
        <Link className=" d-flex justify-content-center align-items-center navigation-btn navigation-btn--prev " to="/tasks">back</Link>
        <h1 className="schedule__title ml-3">{task.title}</h1>
        </div>
        <div className="card p-4 mt-4 mb-4">
            <h3 className="card__title">Описание</h3>
            <p className="card__description pl-0">{task.description}</p>
        </div>
        {task.condinition_files.length > 0 && (<div className="mt-4">
                <h3 className="card__title">Условия</h3>
                <p className="card__description pl-0">{task.condition}</p>
                <div className={`cards grid-3 mt-4`}>
                    {task.condinition_files.map(material => (
                        <FileCard editMode={false} key={material.id} file={material} />))
                    }
                </div>
            </div>)}
        {task.materials.length > 0 && (<div className="mt-4">
                <h3 className="card__title">Материалы</h3>
                <div className={`cards grid-3 mt-4`}>
                    {task.materials.map(material => (
                        <FileCard editMode={false} key={material.id} file={material} />))
                    }
                </div>
            </div>)}
            {task.hint_files.length > 0 && (<div className="mt-4">
                <h3 className="card__title">Подсказки</h3>
                <p className="card__description pl-0">{task.hint}</p>
                <div className={`cards grid-3 mt-4`}>
                    {task.hint_files.map(material => (
                        <FileCard editMode={false} key={material.id} file={material} />))
                    }
                </div>
            </div>)}  
            {task.decision_files.length > 0 && (<div className="mt-4">
                <h3 className="card__title">Решения</h3>
                <p className="card__description pl-0">{task.decision}</p>
                <div className={`cards grid-3 mt-4`}>
                    {task.decision_files.map(material => (
                        <FileCard editMode={false} key={material.id} file={material} />))
                    }
                </div>
            </div>)}  
            {task.links.length > 0 && (<div className="mt-4">
                <h3 className="card__title">Ссылки</h3>
           
                <div className={`cards grid-3 mt-4`}>
                    {task.links.map(material => (
                        <LinkCard editMode={false} key={material.id} link={material} />))
                    }
                </div>
            </div>)} 
 
            {task.tags.length > 0 && (<div className="mt-4 d-flex flex-column align-items-start">
                <h3 className="card__title">Теги</h3>
           
                <div className="d-flex flex-wrap align-items-start ">
                    {task.tags.map(material => (
                        <div className="btn btn-outline-dark tag" key={material.id}>
                        {material.name}
                        
                        </div>)
                    )}
                    </div>
                
            </div>)} 
        </div>
    )
}

export default Task;