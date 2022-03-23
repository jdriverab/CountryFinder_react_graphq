import React from 'react'
import './style.scss'
import SearchIcon from './../../images/searchIconSmall.png'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const SearchBarContainer = () => {
  return (
    <div>
        <h1 id='searchBarTextTitleStyle'>Country search</h1>
        <p id='searchBarTextStyle'>Le some random text</p>

        <div id='formStyleContainer'>
            <form action="" id='searchContainer'>
                {/* <div id='searchContainer'> */}
                {/* <label> mete el numero  */}
                    <img src={SearchIcon} className='searchComponents'/>
                    <input type="text" id='searchComponentInput' placeholder='Chile esta creciendo' className='searchComponents' />
                {/* </label> */}

                {/* </div> */}
            </form>
        </div>

        <div id='groupContainer'>
            <h1>Group By:</h1>

            <ButtonComponent text={'Continent'}/>
            <ButtonComponent text={'Language'}/>


        </div>

    </div>
  )
}

export default SearchBarContainer