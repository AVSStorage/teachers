import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../action/taskAction"
import React from 'react'
import TaskCard from "./TaskCard";
function TaskGrid({grid  }) {
   
    const {isModalOpen, tasks} = useSelector(state =>  ({
        isModalOpen: state.task.isModalOpen,
        tasks: state.task.tasks
    }));

    
    const dispatch = useDispatch();
   
    return (
        
            <div className={`cards grid-${grid} mt-4`}>
                <button onClick={() => dispatch(addTask({
                    tasks, 
                    isModalOpen: !isModalOpen,
                    editIndex: null
                }))} className="card-new">
                    + Добавить задание
                </button>
                {tasks.map(material => (
                    <TaskCard material={material} key={material.id}/>
                ))}
            </div>
    )
}

TaskGrid.propTypes = {
   
    grid: PropTypes.number
}
export default TaskGrid