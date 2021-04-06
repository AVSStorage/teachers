import { Link } from "react-router-dom";
function Profile() {
    const student = {
        title: 'Владислав Тарасов',
        photos: [{id: 1, image: 'imag1.jpg'}, {id: 2, image: 'imag2.jpg'}],
        id: 1
    }
    const emptyPhotos = [...new Array(5-student.photos.length)];
    return (
        <div className="d-flex flex-column">
        <div className="card  p-4">
            <div className="d-flex mb-3 justify-content-between">
           
             <div className="avatar__label mr-3"></div>
               <div className="mr-auto align-self-center">
                <h2 className="user__title">{student.title}</h2>
                <span className="user__city">г. Москва</span>
               </div>
               <span className="user__registration d-flex">Регистрация:<span className="d-block btn-blue ml-2">Январь 2019</span> </span>
            </div>
            <div className="mt-3">
                <h3 className="card__title">Обо мне</h3>
                <p className="card__description pl-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo ultricies ac. Feugiat ultrices orci pellentesque nibh placerat nisi, cras. Sit ut tincidunt viverra commodo nibh leo luctus nisl.
                </p>
            </div>
            <div className="mt-3 mb-3">
                <h3 className="card__title mb-3">Фото</h3>
                <div className={'user__gallery grid-5'}>
                {student.photos.map(photo => (
                    <div className="user__photo" key={photo.id} style={{backgroundImage: `url(${require('../static/img/'+photo.image).default})`}}> </div>
                ))}
                {emptyPhotos.map((value, index) => (
                     <div className="user__photo" key={index}>
                         </div>
                ))}
                </div>
            </div>
        </div>
        <div className="card mt-5  pt-4 pb-4">
            <div className="card__header">
                <h3 className="card__title">Информация</h3>
            </div>
            <div className="d-flex p-3 flex-wrap">
            <table className="user__info m-4">
                <tr>
                    <td className="card__table-header text-gray">Город</td>
                    <td className="card__table-value">Москва</td>
                </tr>
                <tr>
                    <td className="card__table-header text-gray">Дата рождения</td>
                    <td className="card__table-value">04.11.2000</td>
                </tr>
                <tr>
                    <td className="card__table-header text-gray">Образование</td>
                    <td className="card__table-value">МПГУ</td>
                </tr>
            </table>
            <table className="user__info m-4">
                <tr>
                    <td className="card__table-header text-gray">Место работы</td>
                    <td className="card__table-value">МПГУ</td>
                </tr>
                <tr>
                    <td className="card__table-header text-gray">Степень</td>
                    <td className="card__table-value">Кандидат наук</td>
                </tr>
                <tr>
                    <td className="card__table-header text-gray">Опыт работы</td>
                    <td className="card__table-value">12 лет</td>
                </tr>
            </table>
            </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
            <Link to="/profile/edit" className="add-button-blue pl-5 pr-5 pt-3 pb-3">Редактировать</Link>
            </div>
        </div>
    )
}

export default Profile;