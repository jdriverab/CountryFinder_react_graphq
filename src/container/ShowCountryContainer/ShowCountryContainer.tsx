import React, { useContext} from 'react'
import { APPCONTEXT, dataToShowReturnProps } from '../../context/AppContext';
import './style.scss'
import ShowCountryComponent from '../../components/ShowCountryComponent/ShowCountryComponent';

const ShowCountryContainer = () => {
  const {state} = useContext(APPCONTEXT)
  
  return (
    <div id='mainContainerShowCountryContainer'>
      { 
        state.dataToShow &&
          state.dataToShow.map((res:dataToShowReturnProps)=>{
            return <ShowCountryComponent title={res.title} countries={res.countries} key={res.title}/>
          })
        }
       

    </div>
  )
}

export default ShowCountryContainer