
import TagInput from './TagInput';
import Sidebar from './Sidebar';
import TestModal from './TestModal';
import {useState} from 'react';
import {
    Link
  } from "react-router-dom";

function Dashboard(){
    const [tags, changeTag] = useState(['Тесты','История','Алгебра']);
    const [tests] = useState([{id: 1,title: 'Тест 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo '}, {id: 2,title: 'Тест 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat semper aliquam dolor velit amet est semper vulputate vestibulum. Elit dui sapien, risus, vel ultricies interdum. Faucibus pharetra fusce iaculis magna accumsan, elit euismod nisi. Ut enim vitae eu justo '},
  {id: 3, title:'Тест 3', description: 'Arcu elementum id sit elementum sollicitudin id tortor facilisis quisque euismod nulla nisl amet ex suspendisse scelerisque tempus interdum portaest sit quis ut lacus fusce.' }]);
    const [isSeen, setToggle] = useState(0);
    const [testSelected, selectTest] = useState({
        id: null,
        title: '',
        description: '',
        links : [],
        tags : []
      });
    const [modalTitle, changeModalTitle] = useState('Создать тест')  
   return (
    <div className="d-flex ">
     
      <Sidebar/>
      <div>
    <TagInput tags={tags} changeTag={changeTag}/>
    <h1 className="material__title text-left">Тесты</h1>
    <div className="cards">
    <button onClick={() => {setToggle(1); selectTest({
        id: null,
        title: '',
        description: '',
        links : [],
        tags : []
      })
      changeModalTitle('Создать тест')
      }} className="card-new mb-4"><span className="plus">+</span>Добавить тест</button>
    {tests.map(test => (
      <div className="card" key={test.id}>
        <div className="card-header d-flex justify-content-between">
            <h2>{test.title}</h2>
            <button className="btn" onClick={() => {
           setToggle(1)
           selectTest(test)
           changeModalTitle('Редактировать тест')
        }}><span  className="material-icons md-48">face</span></button>
           
        </div>
      
        <div className="d-flex card-body justify-content-start flex-wrap">
        <p className="card-text text-left">{test.description}</p>
        <Link className="text-left" to={`/test/${test.id}`}>Подробнее</Link>
        </div>
      </div>
    ))}
    
    </div>

    <TestModal isSeen={isSeen} setToggle={setToggle} test={testSelected} title={modalTitle} />
    </div>
    </div>   
   )
}

export default Dashboard;