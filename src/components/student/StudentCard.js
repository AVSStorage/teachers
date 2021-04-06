import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const ImageComponent = ({image}) => {
    if (image) {
        return (
            <img className="profile__image" src={image} />
        )
    } else {
        return (
            <div className="profile__image">
               
            </div>
        )
    }
    
}
function StudentCard(props) {
    const { card } = props
 
    let image;
  
    try {
       image = require('../../static/img/'+card.image).default;
    } catch(e) {
       
       image = null; 
        
    }


    return (
        <div className="card">
       <ImageComponent image={image} />
            <div >
                <h3 className="card__title">{card.title}</h3>
                <Link className="btn-blue" to={`/student/${card.id}`}>Подробнее</Link>
            </div>
        </div>
    )
}

StudentCard.propTypes = {
    card: PropTypes.object
}

export default StudentCard;