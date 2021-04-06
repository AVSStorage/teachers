import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { editTask } from "../../../action/taskAction"
import { selectFile } from '../../../action/fileAction'
import SettingIcon from '../../../static/img/settings.png'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
function TaskCard({ material }) {
    const isModalOpen = useSelector(state => state.task.isModalOpen)
    const dispatch = useDispatch()
    return (
        <div className="card">


            <div className="d-flex w-100 flex-column">
                <div className="d-flex card__header justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <h4 className="card__title">{material.title}</h4>
                        <span className="card__info ml-3">Задание № {material.id}</span>
                    </div>
                    <button onClick={() => {dispatch(editTask(
                        {
                            isModalOpen: !isModalOpen,
                            editIndex: material.id - 1
                        }
                    ))
                    dispatch(selectFile({
                        isModalOpen: false,
                        entity: 'task',
                        event: 'materials'
                    }))
                    }} className="btn">
                        <img src={SettingIcon} />
                    </button>
                </div>
                <p className="card__description">
                    <b>Задание:</b> {material.description}</p>
                <Link className="card__link" to={`/task/${material.id}`}>Подробнее</Link>
            </div>



        </div>
    )
}

TaskCard.propTypes = {

    material: PropTypes.object
}
export default TaskCard