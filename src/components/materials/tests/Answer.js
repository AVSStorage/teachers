import PropTypes from 'prop-types';
function Answer({ answer, handler }) {
  
    return (
        <div>
            <div className="d-flex justify-content-between">
                <b className="r3">Вариант ответа № {answer.id}</b>
                <button className="btn" onClick={() => {
                    handler(answer, 'delete')
                }}><span>Удалить</span> x</button>
            </div>
            <div className="card d-flex p-2 align-items-center flex-row justify-content-between">
                <input onChange={(evt) => {
                     handler({ ...answer, value: evt.target.value }, 'change')
                }} className="input w-100" value={answer.value}/>
                <label  className="d-flex justify-content-between m-0">
                <div className="d-flex  pr-2">
                    <input className="hidden material__checkbox" checked={answer.checked} onChange={(evt) => {
                       
                        handler({ ...answer, checked: evt.target.checked }, 'change')
                    }} type="checkbox" />
                    <span className="material__checkbox-label"></span>

                </div>
                </label>
            </div>
        </div>
    )
}

Answer.propTypes = {
    answer: PropTypes.objectOf({
        value: PropTypes.string,
        id: PropTypes.number
    }),
    handler: PropTypes.func
}

export default Answer;