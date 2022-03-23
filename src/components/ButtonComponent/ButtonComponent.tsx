import React from 'react'
import './style.scss'

interface ButtonComponentProps {
  text:string
}


const ButtonComponent = ({text}:ButtonComponentProps) => {
  return (
    // <button id='buttonStyle'>
    <button className="button-15" role="button">

      {/* <h2 id='buttonText'> */}
        {text}
      {/* </h2> */}
    </button>
  )
}

export default ButtonComponent