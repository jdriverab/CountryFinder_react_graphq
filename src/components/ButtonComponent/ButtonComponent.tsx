import React from 'react'

interface ButtonComponentProps {
  text:string
}


const ButtonComponent = ({text}:ButtonComponentProps) => {
  return (
    <button>
      <h2>
        {text}
      </h2>
    </button>
  )
}

export default ButtonComponent