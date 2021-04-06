import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import SettingIcon from '../static/img/settings.png'
import {addCourse, editCourse} from '../action/courseAction'
import {addTheme, editTheme} from '../action/themeAction'
import {addLesson, editLesson} from '../action/lessonAction'
import {addTest, editTest} from '../action/testAction'
import React from 'react'
function MaterialCard({addNewText, grid, type  }) {
    const isModalOpen  = useSelector(state => state[type].isModalOpen)
    const data  = useSelector(state => state[type][`${type}s`])
    const addHandlers = {
        course: addCourse,
        theme: addTheme,
        lesson: addLesson,
        test: addTest
    };
    const editHandlers =  {
        theme: editTheme,
        course: editCourse,
        lesson: editLesson,
        test: editTest
    }
    const dispatch = useDispatch()
    return (
     
            <div className={`cards grid-${grid} mt-4`}>
                <button onClick={() => dispatch(addHandlers[type]({
                    isModalOpen: !isModalOpen,
                    actionType: 'add',
                    [`${type}s`]: [...data],
                    editIndex: null
                }))} className="card-new">
                    + {addNewText}
                </button>
                {data.map((material, index) => (
                    <div key={material.id} className="card">
                
                        {type === 'course' ? (
                            <React.Fragment>
                                <div className="d-flex flex-column">
                                    <h4 className="card__title">{material.title}</h4>
                                    <Link className="btn-blue"  to={`/${material.type}/${material.id}`}>Подробнее</Link>
                                </div>
                                <button onClick={() => dispatch(editHandlers[type]({
                                    isModalOpen: !isModalOpen,
                                    actionType: 'edit',
                                    editIndex: index
                                }))} className="btn">
                                    <img src={SettingIcon}/>
                                </button>

                              </React.Fragment>
                        ): (
                            <div className="d-flex w-100 flex-column">
                                <div className="d-flex card__header justify-content-between align-items-center">
                                        <h4 className="card__title">{material.title}</h4>
                                        <button onClick={() => dispatch(editHandlers[type]({
                                    isModalOpen: !isModalOpen,
                                    actionType: 'edit',
                                    editIndex: index
                                }))} className="btn">
                                            <img src={SettingIcon}/>
                                        </button>
                                </div>
                                <p className="card__description">{material.description}</p>
                                <Link className="card__link" to={`/${material.type}/${material.id}`}>Подробнее</Link>
                             </div>
                        )}
                      
                       
                        </div>
                ))}
            </div>
    )
}

MaterialCard.propTypes = {
    title: PropTypes.string,
    addNewText: PropTypes.string,
    materials: PropTypes.arrayOf(PropTypes.exact({
        title: PropTypes.string,
        type:  PropTypes.string,
        description:  PropTypes.string,
        id:  PropTypes.number
    })),
    type: PropTypes.string,
    grid: PropTypes.number
}
export default MaterialCard