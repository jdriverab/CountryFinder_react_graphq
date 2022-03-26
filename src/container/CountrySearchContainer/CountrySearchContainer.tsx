import React from 'react'
import './style.scss'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';

const CountrySearchContainer = () => {
  return (
    <div id='CountrySearchContainerStyle'>
        <h1 id='CountrySearchContainerTextTitleStyle'>Country search</h1>
        <p id='CountrySearchContainerTextStyle'>Le some random text</p>

        <SearchBarComponent/>

        <div id='groupContainer'>
            <h1 id='buttonSelectionText'>Group by:</h1>

            <div id='buttonSelectionContainer'>
                <div id='buttonSelectionContainer2'>
                    <ButtonComponent text={'Continent'}/>
                    <ButtonComponent text={'Language'}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CountrySearchContainer