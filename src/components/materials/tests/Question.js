import Answer from "./Answer";
import PropTypes from 'prop-types';
import MaterialWidget from '../MaterialWidget'
function Question({changeQuestion, question}) {
    const number = 1;

    return (
        <div className="pb-4 pl-3 question pr-3 pt-4 w-100">
            <div className="d-flex flex-column">
            <label className="r3">Вопрос № {number}</label>
            <input className="input" />
            </div>
            <label className="r3">Материалы</label>
            <MaterialWidget tags={question.tags} entity={'test'} event={'question'} />
            {question.variants.length > 0 && (<div className="grid-2 bg-gray question__variants mt-4 mb-4">
                {question.variants.map(variant => <Answer handler={(variant, action) => {
                    const newVariants = [...question.variants]
                    const index = newVariants.findIndex(vars => vars.id === variant.id)
                   if (action === 'delete'){
                      
                       newVariants.splice(index, 1)
                    
                   } else if (action === 'change') {
              
                        newVariants.splice(index, 1, variant)
                   }
                 
                   changeQuestion({...question, variants: newVariants }, 'change')
                
             
                }} key={variant.id} answer={variant} />)}
            </div>)}
            <button className="card-new" onClick={() => {
                
                changeQuestion({...question, variants: [...question.variants, {
                    id: question.variants.length + 1,
                    value: '',
                    checked: false
                }]}, 'change')
             
                //handler(question)
            }}>+ Добавить вариант ответа</button>
        </div>
    )
}
Question.propTypes = {
    question: PropTypes.object,
    changeQuestion: PropTypes.func
}

export default Question;