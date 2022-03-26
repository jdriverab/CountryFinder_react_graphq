import React, {useContext} from 'react'
import './style.scss'
import { APPCONTEXT } from '../../context/AppContext';

interface ButtonComponentProps {
  text: 'Language' | 'Continent' | undefined
}

const ButtonComponent = ({text}:ButtonComponentProps) => {
  const {dispatch, isSelectedAGroup} = useContext(APPCONTEXT)

  return (

    <button id='buttonStyle' role="button" onClick={()=>dispatch({type:'setGroupBy', payload:{groupBy: text}})}>
    {/* <button className="button-15" role="button"> */}
      {/* <h2 id='buttonText'> */}
        {text}
      {/* </h2> */}
    </button>
  )
}

export default ButtonComponent