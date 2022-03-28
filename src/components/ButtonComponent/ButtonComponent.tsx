import React, {useContext} from 'react'
import './style.scss'
import { APPCONTEXT } from '../../context/AppContext';

interface ButtonComponentProps {
  text: 'Language' | 'Continent' | undefined
}

const ButtonComponent = ({text}:ButtonComponentProps) => {

  const {state, dispatch} = useContext(APPCONTEXT)

  return (

    <button className={"button-43" }  role="button" id={state.groupedBy == text ? 'button-43-active' :'button-43-nonSelected' } onClick={()=> {
          dispatch({type:'setGroupBy', payload:{groupBy: text}})
        }}>
        {text}
    </button>
  )
}

export default ButtonComponent