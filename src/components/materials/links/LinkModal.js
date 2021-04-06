import Popup from "../../Popup";
import TagWidget from "../TagWidget";
import PopupButtons from "../../PopupButtons";
import { editLink, addLink } from '../../../action/linkAction'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
function LinkModal(){
   
    const { editIndex, links, actionType, isModalOpen } = useSelector(state => state.link)
    const dispatch = useDispatch()
    let link,changeLink;
   
    if (editIndex === null) {
       
        [link, changeLink] = useState({
            id: links.length + 1,
            tags: []
        })
     
    } else {
     
        [link, changeLink] = useState({...links[editIndex]})
       
    }


    useEffect(() => {
        changeLink(editIndex === null ? {
            id: links.length + 1,
            tags: []
        } : {...links[editIndex]})
    }, [editIndex, links[editIndex]])
    
    return (
        <Popup isSeen={isModalOpen}>
               <button type="button" onClick={() => dispatch(editLink({
                    isModalOpen: !isModalOpen,
                    actionType,
                    editIndex: null
                }))} className="btn-close align-self-end text-dark" aria-label="Close">
                </button>
                <h1>{actionType === 'add' ? 'Добавить ссылку' : 'Редактировать ссылку'}</h1>
                {actionType === 'edit' && (<div className="d-flex justify-content-center"><span>ID <b>{link.id}</b></span></div>)}
                <label className="r3">Название</label>
                <input value={link.name} onChange={(evt) => {
                        changeLink({...link, name: evt.target.value})
                }} className="input"/>
                <label className="r3">Ссылка</label>
                <input value={link.href} onChange={(evt) => {
                        changeLink({...link, href: evt.target.value})
                }} className="input"/>
                <label className="r3">Описание</label>
                <textarea onChange={(evt) => {
                        changeLink({...link, description: evt.target.value})
                }}  value={link.description} rows="5" className="input" placeholder="Описание"></textarea>
                <TagWidget values={link.tags} entity={'link'} handler={(key, value) => {
                  
                  changeLink({ ...link, [key]: value })
                    
                }}/>
                <PopupButtons action={actionType} onClose={() => {
                    let newLinks = [...links]
                    if (editIndex === null){
                      newLinks = [...newLinks,  {...link, image: 'file_example.png' }]
                    } else {
                         newLinks.splice(editIndex, 1, {...link, image: 'file_example.png' })
                    }
                    dispatch(addLink({
                        isModalOpen: !isModalOpen,
                        links: newLinks,
                        editIndex: null
                    }))
                    changeLink({
                        id: links.length + 1,
                        tags: []
                    })
                }} />
            </Popup>
    )
}

export default LinkModal;