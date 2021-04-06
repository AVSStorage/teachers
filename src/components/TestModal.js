import Popup from './Popup';
import PopupButtons from './PopupButtons';
import { Fragment } from 'react';
import PropTypes from "prop-types";
function TestModal({isSeen, setToggle, title = '', test = {
  id: null,
  title: '',
  description: '',
  links : [],
  tags : []
}}){

 
  return (
    <Fragment>
        <Popup isSeen={isSeen} onClose={setToggle} title={title} >
          <label className="r3">Название</label>
          <input  value={test.title}  className="input"/>
          <label className="r3">Описание</label>
          <textarea value={test.description} className="input" placeholder="Описание"></textarea>
          <label className="r3">Ссылки</label>
          <input className="input"/>
          <label className="r3">Теги</label>
          <input className="input"/>
          <PopupButtons action={'add'} onClose={setToggle}/>
      </Popup>
  </Fragment>
  )
}

TestModal.propTypes = {
  isSeen: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  setToggle: PropTypes.func,
  title: PropTypes.string,
  test: PropTypes.objectOf(PropTypes.string)
}


export default TestModal;