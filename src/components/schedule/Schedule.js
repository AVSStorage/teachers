import moment from 'moment'
import 'moment/locale/ru';
import ScheduleCard from './ScheduleCard';
import { useState } from 'react'
import TransferModal from './TransferModal'
import CancelModal from './CancelModal';
import AddModal from './AddModal';
import { useSelector } from 'react-redux'
const startOfWeek = moment().startOf('isoWeek');
const endOfWeek = moment().endOf('isoWeek');

const days = [];
let day = startOfWeek;

while (day <= endOfWeek) {
    days.push(day.toDate());
    day = day.clone().add(1, 'd');
}

function getWeek(date) {
    const startOfWeek = moment(date).startOf('isoWeek');
    const endOfWeek = moment(date).endOf('isoWeek');

    const days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }

    return days;
}


function Schedule() {
    moment.locale('ru')
    const [day, setDays] = useState(days);
    const [currentWeekMove, setWeekMove] = useState(0);
    const { students } = useSelector(state => state.schedule)
 
    return (
        <div className="schedule">
            <h1 className="schedule__title">Расписание</h1>
            <div className="d-flex justify-content-between">
                <button className="navigation-btn navigation-btn--prev " onClick={() => {
                    setDays(getWeek(moment().day(currentWeekMove - 7)))
                    setWeekMove(currentWeekMove - 7)
                }
                }>Prev</button>
                <button className="navigation-btn navigation-btn--next " onClick={() => {
                    setDays(getWeek(moment().day(currentWeekMove + 7)))
                    setWeekMove(currentWeekMove + 7)
                }
                }>Next</button>
            </div>
            <div className="grid-4 mt-4 mb-4">
                {day.map((day, index) => {
                    const currentLang = moment(day).lang("ru").format('dddd');

                    let weekend = [6, 0]
                    return (
                        <ScheduleCard key={index} 
                        isWeekend={weekend.includes(moment(day).day())} students={students.filter(stud => moment(stud.date, 'DD-MM-YYYY HH:mm:ss').format('DD-MM-YYYY') === moment(day).format('DD-MM-YYYY'))} name={currentLang.charAt(0).toUpperCase() + currentLang.slice(1)} date={moment(day).format('DD-MM-YYYY')} />
                    )
                })}
            </div>

            <div className="card">
                <div className="card__header">
                    <h3 className="card__title">Перенос занятий</h3>
                </div>
                <div className="pl-3 pr-3">
                    <table className="w-100 mt-4 mb-4 schedule__table">
                        <thead>
                            <tr>
                                <td>Ученики</td>
                                <td>Первоначальная дата</td>
                                <td>Новая дата</td>
                            </tr>
                        </thead>
                        <tbody>
                            {students.filter(stud => stud.status === 'transfer').map(
                                stud => (
                                <tr key={stud.id}>
                                    <td>{stud.title}</td>
                                    <td>{moment(stud.oldDate,'DD-MM-YYYY HH:mm:ss').format('DD-MM-YYYY')}</td>
                                    <td>{moment(stud.date,'DD-MM-YYYY HH:mm:ss').format('DD-MM-YYYY')}</td>
                                </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <AddModal/>
            <TransferModal/>
            <CancelModal/>
        </div>
    )
}

export default Schedule;