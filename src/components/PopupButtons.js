import PropTypes from 'prop-types';
function PopupButtons(props) {
  const CancelButton = () => 
  <button className="btn w-50 btn-cancel btn-outline-dark"  onClick={() => {    
    props.onClose(0);
  }}>Отменить</button>;
  return (
    <div className="d-flex justify-content-center w-100 mt-4">
    <button className="btn add-button mr-4"  onClick={() => {
           
           props.onClose(0);
         }}>{props.action === 'edit' ? 'Редактировать': 'Создать'}</button>
    {props.action === 'edit' && <CancelButton/>}
           {props.children}  
    </div>

  )
}

PopupButtons.propTypes = {
    onClose: PropTypes.func,
    action: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node)
}


export default PopupButtons;