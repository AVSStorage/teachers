import Popup from '../../Popup'
import { editTheme, addTheme } from '../../../action/themeAction'
import { useSelector, useDispatch } from 'react-redux'
import MaterialWidget from '../MaterialWidget'
import { useState, useEffect, Fragment } from 'react'
import TagWidget from '../TagWidget';
import MaterialPopup from '../MaterialPopup';
import PopupButtons from '../../PopupButtons';
function ThemeModal() {
    const { isModalOpen, actionType, editIndex, themes } = useSelector(state => state.theme);
    const dispatch = useDispatch()
    const [theme, changeTheme] = useState(actionType === 'add' ? {
        id: themes.length + 1,
        title: '',
        description: '',
        type: 'theme',
        lessons: [],
        materials: [],
        links: [],
        tags: []

    } : { ...themes[editIndex] })
    useEffect(() => {
        changeTheme(actionType === 'add' ? {
            id: themes.length + 1,
            title: '',
            description: '',
            type: 'theme',
            lessons: [],
            materials: [],
            links: [],
            tags: []
        } : { ...themes[editIndex] })
    }, [actionType, themes[editIndex]])
    console.log(theme);
    return (
        <Fragment>
            <Popup isSeen={isModalOpen}>
                <button onClick={() => dispatch(editTheme({
                    isModalOpen: !isModalOpen,
                    actionType,
                    editIndex: null
                }))} type="button" className="btn-close align-self-end text-dark" aria-label="Close">
                </button>
                <h1>{actionType === 'add' ? 'Создать тему' : 'Редактировать тему'}</h1>
                {actionType === 'edit' && (<div className="d-flex justify-content-center"><span>ID <b>{theme.id}</b></span></div>)}
                <label className="r3">Название</label>
                <input className="input" value={theme.title} onChange={(evt) => {

                    changeTheme({ ...theme, title: evt.target.value })
                }} />
                <label className="r3">Описание</label>
                <textarea onChange={(evt) => {
                    changeTheme({ ...theme, description: evt.target.value })

                }} value={theme.description} rows="5" className="input" placeholder="Описание"></textarea>
                <label className="r3">Добавить занятие</label>
                <MaterialWidget event={'lessons'} entity={'theme'} tags={theme.lessons ? theme.lessons : []} />
                <label className="r3">Материалы</label>
                <MaterialWidget event={'materials'} entity={'theme'} tags={theme.materials ? theme.materials : []} />
                <label className="r3">Ссылки</label>
                <MaterialWidget event={'links'} entity={'theme'} tags={theme.links ? theme.links : [] } />
                <TagWidget values={theme.tags ? theme.tags : [] } handler={editIndex ? null : (key, values) => {
               changeTheme({...theme, [key]: values})
           }} entity={'theme'} />
                <PopupButtons action={actionType} onClose={() => {
                    let savedData = [...themes];
                    if (actionType === 'edit') {
                        savedData.splice(editIndex, 1, { ...theme })
                    } else {
                        savedData = [...savedData, theme]
                    }
                    dispatch(addTheme({
                        isModalOpen: false,
                        themes: [...savedData],
                        editIndex: null
                    }))
                }} />

            </Popup>
            <MaterialPopup handler={(key, value) => {
                changeTheme({ ...theme,[key]: value})
            }} />
        </Fragment>
    )
}

export default ThemeModal;