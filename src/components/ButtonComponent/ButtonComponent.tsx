import React, {useContext} from 'react'
import './style.scss'
import { APPCONTEXT } from '../../context/AppContext';

interface ButtonComponentProps {
  text: 'Language' | 'Continent' | undefined
}

const ButtonComponent = ({text}:ButtonComponentProps) => {

  const {dispatch} = useContext(APPCONTEXT)

  return (

    <button id='buttonStyle' role="button" onClick={()=> {
        dispatch({type:'setGroupBy', payload:{groupBy: text}})
      }}>
        {text}
    </button>
  )
}

export default ButtonComponent