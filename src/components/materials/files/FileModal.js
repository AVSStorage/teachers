import Popup from "../../Popup";
import TagWidget from "../TagWidget";
import PopupButtons from "../../PopupButtons";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { editFile, addFile } from "../../../action/fileAction";

function FileModal(){
    const { editIndex, files, actionType, isModalOpen } = useSelector(state => state.file)
    // const actionType ='add'
    // const file = {
    //     id: 1,
    //     tags: []
    // }


    const dispatch = useDispatch()
    let file,changeFile;
   
    if (editIndex === null) {
       
        [file, changeFile] = useState({
            id: files.length + 1,
            tags: []
        })
     
    } else {
     
        [file, changeFile] = useState({...files[editIndex]})
       
    }


    useEffect(() => {
        changeFile(editIndex === null ? {
            id: files.length + 1,
            tags: []
        } : {...files[editIndex]})
    }, [editIndex, files[editIndex]])
    
    return (
        <Popup isSeen={isModalOpen}>
            <button type="button" onClick={() => dispatch(editFile({
                    isModalOpen: !isModalOpen,
                    actionType,
                    editIndex: null
                }))} className="btn-close align-self-end text-dark" aria-label="Close">
            </button>
            <h1>{actionType === 'add' ? 'Добавить файл' : 'Редактировать файл'}</h1>
            {actionType === 'edit' && (<div className="d-flex justify-content-center"><span>ID <b>{file.id}</b></span></div>)}
            <label className="r3">Название</label>
            <input value={file.name} onChange={(evt) => {
                changeFile({...file, name: evt.target.value})
            }} className="input" />
            <label className="r3">Описание</label>
            <textarea value={file.description}  onChange={(evt) => {
                changeFile({...file, description: evt.target.value})
            }} rows="5" className="input" placeholder="Описание"></textarea>
            <span className="r3">Файл</span>
            <div className="d-flex">
            <label className="card-new file__input">
                <span>Добавить файл</span>
                <input className="hidden d-none" type="file" />
            </label>
            <div className="ml-3">
                <p className="text-danger validation-message"> Размер загружаемого изображения не должен превышать 100МБ </p>
                <p className="text-danger validation-message"> Система принимает файлы типов .png .jpg .pdf </p>
            </div>
            </div>
            <TagWidget handler={(key, value) => {
                 changeFile({...file, [key]: value})
            }} values={file.tags} entity={'file'} />
            <PopupButtons action={actionType} onClose={() => { 
                let newFiles = [...files]
                if (editIndex === null) {
                    newFiles = [...newFiles, file]
                } else {
                    newFiles.splice(editIndex,1, file )
                }
                dispatch(addFile({
                    files: newFiles,
                    editIndex: null
            })) }} />
        </Popup>
    )
}

export default FileModal;