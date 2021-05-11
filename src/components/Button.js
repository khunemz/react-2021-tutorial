import React from 'react'
import PropTypes  from 'prop-types';

const Button = ({ onClick }) => {

  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>Add</button>  
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}
export default Button
