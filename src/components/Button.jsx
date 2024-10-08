import PropTypes from 'prop-types';

export function Button(props){
    return(
        <div className="child3">
            <button id="new-quote" onClick={props.action} className="btn btn-success btn-block">New Quote</button>
        </div>     
    )
}

Button.propTypes = {
    action: PropTypes.func.isRequired
}