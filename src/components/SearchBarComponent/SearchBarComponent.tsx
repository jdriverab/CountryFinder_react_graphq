import React from 'react'
import SearchIcon from './../../images/searchIconSmall2.png'
import './style.scss'


const SearchBarComponent = () => {
  return (
    <form action="" id='searchContainer'>
        <img src={SearchIcon} className='searchComponents'/>
        <input type="text" id='searchComponentInput' placeholder='Chile esta creciendo' className='searchComponents' />
    </form>
  )
}

export default SearchBarComponent