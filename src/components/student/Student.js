import StudentCard from './StudentCard'
import { Fragment } from 'react'
import { Link } from "react-router-dom";
function Student() {
    const student = {
        image: "avatar_student2.png",
        title: "Владислав Тарасов",
        courses: [
            {
                id: 1,
                title: 'Курс 1'
            },
            {
                id: 2,
                title: 'Курс 2'
            }
        ]
    }
    return (
        <Fragment>
        <div className="card p-4">
            <div className="d-flex justify-content-between">
               <img className="profile__image mr-3" src={require('../../static/img/'+student.image).default} />
               <div className="mr-auto">
                <h2 className="user__title">{student.title}</h2>
                <span className="user__city">г. Москва</span>
               </div>
               <span className="user__registration d-flex">Регистрация: <span className="d-block btn-blue ml-2">Январь 2019</span></span>
            </div>
            <h3 className="card__title mt-4">Обо мне</h3>
            <p className="card__description pl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ultricies ac. Feugiat ultrices orci pellentesque nibh placerat nisi, cras. Sit ut tincidunt viverra commodo nibh leo luctus nisl.
Vulputate quis dignissim id massa adipiscing odio purus. </p>
            <h3 className="card__title mt-4">Родители</h3>
            <div className={`cards grid-3`}>
            <StudentCard card={{
                id: 1,
                title: 'Николай Шашков',
                image: 'avatar_student2.png',
            }}/>
            <StudentCard card={{
            id: 2,
        image: 'avatar_student2.png',
        title: "Наталья Вешнякова"}}/>
            </div>
        </div>
        <div className="card mt-4">
            <div className="card__header">
                <h3 className="card__title">Личная информация</h3>
            </div>
            <table className="user__info m-4">
                <tr>
                    <td className="card__table-header text-gray">Школа</td>
                    <td className="card__table-value">№ 1</td>
                </tr>
                <tr>
                    <td className="card__table-header text-gray">Класс</td>
                    <td className="card__table-value">9 класс</td>
                </tr>
                <tr>
                    <td className="card__table-header text-gray">Уровень</td>
                    <td className="card__table-value">Средний</td>
                </tr>
            </table>
        </div>
        <div className="card mt-4 pb-3 pr-3">
            <div className="card__header">
                <h3 className="card__title">Назначенные курсы</h3>
            </div>
            <div className={`cards mt-4 ml-4 mb-4 grid-3`}>
                <button className="add-button-blue">+ Назначить курс</button>
                {student.courses.map(course => (
                    <div className="d-flex border rounded p-4 flex-column align-items-end" key={course.id}>
                        <div className="w-100">
                            <h3 className="card__title">{course.title}</h3>
                            <Link to={`/course/${course.id}`}>Подробнее</Link>
                        </div>
                        <Link className="text-dark" to={`/student/course/${course.id}`}>Снять с курса</Link>
                    </div>
                ))}
                </div>
                <div className="card__header">
                <h3 className="card__title">Архивные курсы</h3>
                </div>
                <div className={`cards mt-4 ml-4 mb-4 grid-3`}>
                {student.courses.map(course => (
                    <div className="d-flex opacity border rounded p-4 flex-column align-items-end" key={course.id}>
                        <div className="w-100">
                            <h3 className="card__title">{course.title}</h3>
                            <Link to={`/course/${course.id}`}>Подробнее</Link>
                        </div>
                        <Link className="text-dark" to={`/student/course/${course.id}`}>Возобновить</Link>
                    </div>
                ))}
              
            </div>
        </div>
        <form className="card mt-4 pb-3 pr-3 align-items-end">
            <div className="card__header w-100">
                <h3 className="card__title">Заметки</h3>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Co\</p>
                <button type="button" className="btn btn-blue m-3 text-left">
                    Редактировать
                </button>
            </div>
            <div className="w-100 p-4">
                <h3 className="card__title">Редактировать заметку</h3>
                <textarea className="border w-100 p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Co\</textarea>
            </div>
            <button className="add-button-blue pl-5 pr-5 pt-3 pb-3">Редактировать</button>
        </form>
        </Fragment>
    )
}

export default Student;