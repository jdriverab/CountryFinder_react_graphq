import React from 'react'
import './style.scss'
import SearchIcon from './../../images/searchIconSmall2.png'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const SearchBarContainer = () => {
  return (
    <div id='searchBarContainerStyle'>
        <h1 id='searchBarTextTitleStyle'>Country search</h1>
        <p id='searchBarTextStyle'>Le some random text</p>

        <form action="" id='searchContainer'>
            <img src={SearchIcon} className='searchComponents'/>
            <input type="text" id='searchComponentInput' placeholder='Chile esta creciendo' className='searchComponents' />
        </form>

        <div id='groupContainer'>
            <h1 id='buttonSelectionText'>Group by:</h1>

            <div id='buttonSelectionContainer'>
                <ButtonComponent text={'Continent'}/>
                <ButtonComponent text={'Language'}/>
            </div>
        </div>

    </div>
  )
}

export default SearchBarContainer