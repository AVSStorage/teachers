function Settings() {
    return (
        <div className="d-flex flex-column">
            <h1 className="schedule__title ml-3">Настройки</h1>
            <div className="card mt-4 p-4">
            
                <input className="d-none checkbox__input" id="news" type="checkbox"/>
                <label className="d-flex mb-3 align-items-center" htmlFor="news">
                    <span className="checkbox mr-4"></span>
                    Получать новости и предложения на почту
                </label>
             
                <input className="d-none mb-3 checkbox__input" id="notifications" type="checkbox"/>
                <label className="d-flex  align-items-center"  htmlFor="notifications">
                    <span className="checkbox mr-4"></span>
                    Получать уведомления
                </label>
            </div>
        </div>
    )
}

export default Settings;