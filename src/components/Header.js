import React from 'react'
import PropTypes  from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import './styles/Header.scss'

const Header = ({title, onAdd}) => {
  
  const location = useLocation()

  return (
    <div>
      <header className="main-header">
        <div className="row">
          <div className="col-10">
            <h2>{ title }</h2>
          </div>
          {
            location.pathname === '/' && <div className="col-2">
            <Button onClick={onAdd} />
          </div>
          }
        </div>
      </header> 
    </div>
  )
}

Header.defaultProps  = {
  title: 'Application name'
}

Header.propTypes = {
  title: PropTypes.string
}
export default Header
