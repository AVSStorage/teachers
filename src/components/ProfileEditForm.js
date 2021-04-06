function ProfileEditForm() {
    return (
        <div className="d-flex flex-column">
            <div className="card p-4">
                <div className="user__form">
                    <input className="d-none" type="file" id="avatar" />
                    <label className="user__avatar bg-gray" htmlFor="avatar">Добавить</label>
                    <div className="d-flex flex-column justify-content-between w-100">
                        <div className="d-flex flex-wrap justify-content-between">
                            <input className="input mr-4 bg-gray" placeholder="Имя" type="text" />
                            <input className="input mr-auto bg-gray" placeholder="Фамилия" type="text" />
                            <span className="user__registration d-flex">Регистрация:<span className="d-block btn-blue ml-2">Январь 2019</span> </span>
                        </div>
                        <input className="input bg-gray" placeholder="Ваш слоган или статус" type="text" />
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="card__title">Обо мне</h3>
                    <textarea className="textarea w-100 bg-gray" placeholder="Расскажите о себе" rows="4"></textarea>
                </div>
                <div className="mt-3 w-100">
                    <h3 className="card__title mb-3">Фото</h3>
                    <div className="grid-5">
                        <input className="d-none" type="file" id="photo"/>
                        <label htmlFor="photo" className="user__add justify-content-around card-new flex-column">
                            <span className="d-block">+</span>
                            Добавить фото</label>
                         <div className="d-flex flex-column justify-content-end">
                             <p className="text-danger">Размер загружаемого изображения не должен превышать 100МБ</p>
                             <p className="text-danger">Система принимает файлы типов .png .jpg </p>
                             </div>   
                    </div>
                </div>
            </div>
            <div className="card p-4 mt-5">
                <div className="card__header mb-4">
                    <h3 className="card__title">Информация</h3>
                </div>
                <div className="d-flex">
                    <div className="d-flex w-50 flex-column">
                        <input className="input bg-gray" placeholder="Город" type="text" />
                        <input className="input bg-gray" placeholder="Дата рождения" type="date" />
                        <input className="input bg-gray" placeholder="Образование" type="text" />
                    </div>
                    <div className="d-flex w-50 ml-3 flex-column">
                        <input className="input bg-gray" placeholder="Место работы" type="text" />
                        <input className="input bg-gray" placeholder="Степень" type="text" />
                        <input className="input bg-gray" placeholder="Опыт работы" type="text" />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-start mt-4">
                <button className="add-button-blue pl-5 pr-5 pt-3 pb-3">Сохранить</button>
            </div>
        </div>
    )
}

export default ProfileEditForm;