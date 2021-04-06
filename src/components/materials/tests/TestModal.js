import MaterialPopup from "../MaterialPopup";
import MaterialWidget from '../MaterialWidget'
import TagWidget from '../TagWidget'
import Popup from '../../Popup'
import { useSelector, useDispatch} from 'react-redux'
import { addTest } from '../../../action/testAction'
import { useState, Fragment } from 'react'
import PopupButtons from '../../PopupButtons'
import Question from "./Question";
function TestModal() {
  
    const { isModalOpen } = useSelector(state => state.test)
    const { actionType } = useSelector(state => state.test)
    const dispatch = useDispatch()
    const [test, changeTest] = useState({
        questions: [
        ]
    })


  
    return (
        <Fragment>
            <Popup isSeen={isModalOpen}>
                <button onClick={() => {
                    dispatch(addTest({
                        isModalOpen: !isModalOpen,
                        editIndex: null,
                        actionType: 'add'
                    }))
                }} type="button" className="btn-close align-self-end text-dark" aria-label="Close">
                </button>
                <h1>{actionType === 'add' ? 'Создать тест' : 'Редактировать тест'}</h1>
                {actionType === 'edit' && (<div className="d-flex justify-content-center"><span>ID <b>{test.id}</b></span></div>)}
                <label className="r3">Название</label>
                <input className="input" value={test.title} onChange={(evt) => {

                    changeTest({ ...test, title: evt.target.value })
                }} />
                <label className="r3">Описание</label>
                <textarea rows="5" onChange={(evt) => { changeTest({ ...test, description: evt.target.value }) }} value={test.description} className="input" placeholder="Описание"></textarea>

                <label className="r3">Ссылки</label>
                <MaterialWidget tags={test.links ? test.links : []} entity={'test'} event={'links'} />
                <TagWidget values={test.tags ? test.tags : []} handler={(key, value) => {
                    changeTest({ ...test, [key]: value })
                }} entity={'test'} />

                <div className={`${test.questions.length === 0 && 'card-new' } flex-column  align-items-start pt-4 `}>
                    <h3 className="card__title r3 pl-4 text-start">Отмете правильные варианты</h3>
                   
                    {test.questions.map((q, index) => (<Question question={q} changeQuestion={
                        (value, type) => { 
                           
                            let newQuestions = [...test.questions];
                            console.log(newQuestions)
                            const index = newQuestions.findIndex(ques => ques.id = q.id)
                        
                            if (type === 'delete') {
                                newQuestions.splice(index, 1)
                            } else if (type === 'change') {
                                newQuestions.splice(index, 1, value)
                               
                            } 
                  
                          
                          changeTest({ ...test, questions: newQuestions }) 
                        }
                    } key={index} />))}
                     <button className={test.questions.length > 0 ? "test__button" : "test__button ml-4"} onClick={() => {
                     
                     changeTest({ ...test, questions: [...test.questions, {
                         id: test.questions.length + 1,
                         tags: [],
                         variants: []
                     }] })
                    
                
                 }}>+ Добавить вопрос </button>
                </div>
                <PopupButtons action={actionType} onClose={(key, value) => { changeTest({ ...test, [key]: value }) }} />
            </Popup>
            <MaterialPopup handler={(key, value) => { changeTest({ ...test, [key]: value }) }} />
        </Fragment>
    )
}

export default TestModal