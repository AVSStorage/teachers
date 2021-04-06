import '../Popup.css';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
function Popup(props) {

  return (
    <CSSTransition
        in={!!props.isSeen}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
    <div className={'modal fade show'} style={{display: props.isSeen && 'block'}} id="form" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className={`modal-dialog modal-dialog-centered ${props.isSmall && 'modal-small'}`} role="document">
    <div className="modal-content py-md-5 px-md-4 p-sm-3 p-4">
   
     {props.children}

     </div>
     </div>
    
    </div>
    </CSSTransition>
  );
}

Popup.propTypes = {
    isSeen: PropTypes.bool,
    isSmall: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.node)
}


export default Popup;
