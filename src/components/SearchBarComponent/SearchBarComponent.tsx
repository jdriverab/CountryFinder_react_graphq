import React, { useContext } from 'react'
import { APPCONTEXT } from '../../context/AppContext'
import SearchIcon from './../../images/searchIconSmall3.png'
import './style.scss'

const SearchBarComponent = () => {

  const {dispatch} = useContext(APPCONTEXT)

  return (
    <form action="" id='searchContainer'  onChange={(response:any)=>{
      dispatch({type:'setCountry', payload:({country: response.target.value})})

    }}>
        <img src={SearchIcon} className='searchComponents'/>
        <input type="text" id='searchComponentInput' placeholder='Find your favorite country here' className='searchComponents' />
    </form>
  )
}

export default SearchBarComponent