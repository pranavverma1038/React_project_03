import React from 'react'
import logoImg from '../assets/icons8-logo.svg'

function Logo(width= '100px') {
  return (
    <div>
      <img src={logoImg} alt="logo"/>
    </div>
  )
}

export default Logo