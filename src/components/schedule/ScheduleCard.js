import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { showModal } from '../../action/modalAction';
import TransferButton from '../../static/img/baseline_swap_vert_black_18dp.png'
import moment from 'moment'
function ScheduleCard({name, date, isWeekend, students = []}) {
    let currentDate = moment().format('DD-MM-YYYY')
    let dispatch = useDispatch()
    return (
        <div  className="card pb-3">
            <div className="card__header d-flex flex-wrap align-items-center justify-content-between">
            <h4 className={isWeekend ? "card__title text-danger  m-0" : 'card__title m-0'}>{name}</h4>
            {date === currentDate && (
                <span className="card__date text-success">Сегодня</span>
            )}
            <span className="card__date">{date}</span>
            </div>
            {students.length > 0 && students.map(student => (
                <div key={student.id} className="d-flex p-4 justify-content-between">
                    
                    <div className="d-flex flex-wrap align-items-start">
                    <span className="card__description p-0">{student.title}</span>
                        <button onClick={() => {
                            dispatch(showModal({
                                modalType: 'transferModal',
                                modalProps: {
                                    student
                                }
                            }))
                        }} className="btn">
                           <img src={TransferButton} />
                        </button>
                        <button onClick={ () => dispatch(showModal({
                                modalType: 'cancelModal',
                                modalProps: {
                                    student
                                }
                            }))} type="button" className="btn-close  text-dark" aria-label="Close">
                        </button>

                    </div>
                    {moment(student.date,'DD-MM-YYYY HH:mm:ss').format('HH:mm')}({student.duration})
                </div>
            ))}
            <button onClick={() => dispatch(showModal({
                                modalType: 'addModal',
                                modalProps: {
                                    date: date
                                }
                            }))} className="btn btn-blue m-3 text-left">Добавить занятие</button>
        </div>
    )

}

ScheduleCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.date,
    students: PropTypes.array,
    isWeekend: PropTypes.bool
  
}


export default ScheduleCard;