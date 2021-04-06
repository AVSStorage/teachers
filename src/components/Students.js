import StudentCard from "../components/student/StudentCard";

function Students() {
    const students = [{
        id: 1,
        image: 'avatar_student.png',
        title: "Петя Иванов"
    },
    {
        id: 2,
        image: 'avatar_student2.png',
        title: "Валерия Сысоева"
    },
    {
        id: 3,
        image: 'avatar_student2.png',
        title: "Валерия Сысоева"
    },
    {
        id: 4,
        image: 'avatar_student.png',
        title: "Петя Иванов"
    },]
    return (
        <div className="d-flex mt-8 flex-column">
        <h2 className="material__title">Ученики</h2>
        <div className={`cards grid-3 mt-4`}>
            <button className="card-new">
               + Добавить ученика
            </button>
        {students.map(student => <StudentCard key={student.id} card={student}/>)}
        </div>
        </div>)
}

export default Students;