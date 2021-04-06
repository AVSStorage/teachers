import StudentCard from '../components/student/StudentCard'
import MuteIcon from '../static/img/mute-icon.png'
import DelIcon from '../static/img/del-icon.png'
import FileIcon from '../static/img/files.png'
import SendIcon from '../static/img/send-btn.png'
import Message from './Message';
import { useState} from 'react'

function Chat() {
    const students = [
        {
            id: 1,
            title: 'Валерия Сысоева',
            image: 'avatar_student2.png'
        },
        {
            id: 2,
            title: 'Гавриил Воронин',
            image: 'avatar_student.png'
        },
        {
            id: 3,
            title: 'Владислав Тарасов',
            image: 'avatar.png'
        }
    ]
  
 const [messages, addNewMessage] = useState([{
    id: 1,
    text: 'Привет! Как дела?',
    date: "15:33 21.02.2021",
    from: 2
},
{
id: 2,
text: 'Все хорошо',
date: "15:33 21.02.2021",
},
{
id: 3,
text: 'Пример сообщения',
date: "15:33 21.02.2021",
},
{
id: 4,
text: 'От сообщение',
date: "15:33 21.02.2021",
from: 2
},
{
id: 5,
text: "Hi",
date: "15:33 21.02.2021",
from: 2
},
{
id: 6,
text: "Zomm",
date: "15:33 21.02.2021"
}]);

const [message, changeMessage] = useState({})
    return (
        <div className="d-flex flex-column">
            <h2 className="material__title">Чат</h2>
            <div className="chat ">
                <div className="card chat__sidebar p-4">
                    <input type="text" className="input bg-gray " placeholder="Поиск сообщений"/>
                        {students.map(student => (<StudentCard  key={student.id} card={student}/>))}
                </div>
                <div className="card p-2">
                    <div className="chat__box card__header d-flex justify-content-between w-100 align-items-center">
                        <StudentCard card={students[0]}/>
                        <div className="d-flex">
                            <button className="btn">
                                <img src={MuteIcon}/>
                            </button>
                            <button  className="btn">
                                <img src={DelIcon}/>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex flex-column p-4">
                        <div className="chat__window p-4">
                        {messages.map(msg => (
                            <Message key={msg.id} message={msg}/>
                        ))}
                        </div>
                        <div className="d-flex align-items-center bg-gray">
                            <button className="btn bg-gray">
                                <img src={FileIcon}/>
                            </button>
                        <input onChange={(evt) => {changeMessage({
                            id: messages.length + 1,
                            text: evt.target.value,
                            date:"15:33 21.02.2021"
                        })}} type="text" placeholder="Введите сообщение" className="input w-100 bg-gray"/>
                        <button onClick={() => {
                            addNewMessage([...messages, message])
                        }} className="btn bg-gray">
                                <img src={SendIcon}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;