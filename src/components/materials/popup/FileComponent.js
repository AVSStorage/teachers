import PropTypes from 'prop-types';
function FileComponent({ file, isChecked, handler }) {
    return (
        <div key={file.id} className="d-flex justify-content-between align-items-center col-6 mb-3">

            <label className="d-flex w-100 justify-content-between material__card align-items-center pl-2 pt-2 pb-2">
                <div className="d-flex align-items-center">
                    <img className="card__icon" src={require('../../../static/img/' + file.extension + '.png').default} />
                    <span className="material__label ml-2">{file.name}</span>
                </div>
                <div className="d-flex pr-2">
                    <input defaultChecked={isChecked} onChange={handler} className="hidden material__checkbox" type="checkbox" />
                    <span className="material__checkbox-label"></span>

                </div>
            </label>

        </div>
    )
}

FileComponent.propTypes = {
    file: PropTypes.object,
    isChecked: PropTypes.bool,
    handler: PropTypes.func
}

export default FileComponent;