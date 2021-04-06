import PropTypes from 'prop-types';
function Message({ message }) {
    return (
        <div className="d-flex flex-column" >
            <div className={message.from ? "chat__message align-self-start" : "chat__message align-self-end bg-gray"}>
                <div className="chat__text">
                    {message.text}
                </div>

            </div>
            <span className={message.from ? "chat__date text-start" : "chat__date text-end"}>{message.date}</span>
        </div>
    )
}


Message.propTypes = {
    message: PropTypes.exact({
        id: PropTypes.number,
        text: PropTypes.string,
        date: PropTypes.string,
        from: PropTypes.number
    })
}

export default Message;