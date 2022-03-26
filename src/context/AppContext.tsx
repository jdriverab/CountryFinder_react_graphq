import React, { createContext, useMemo, useReducer,  } from 'react'
import {AppReducer, ActionReducerProps} from './AppReducer'
import  { ContinentsProps, Country, CountryData, LanguageAndcontinentProps } from '../Hooks/UseQueryHook';

  export const appInitialState: AppState = {
    country: '',
    groupedBy: undefined,
  }

  export interface AppState {
    country: string,
    groupedBy: 'Language' | 'Continent' | undefined;
  }

  // export interface Country {
  //   name: string;
  //   code: string;
  //   capital: string;
  //   continent: {
  //     name: string;
  //   };
  // }
  
  // export interface CountryData {
  //   countries: Country[];
  // }

  export interface dataToShowReturnProps {
    title: string;
    countries: countriesReturnProps[];
  }

  export type countriesReturnProps = {
    countryName: string;
    capital: string | null;
    emoji: string;
  }

  export interface dataPer {
    title: string;
    countries: countriesReturnProps[];
  }

export interface AppContextProps {
    state:AppState;
    dispatch: (reducerInfo:ActionReducerProps)=> void;
    isSelectedAGroup: boolean;
    dataToShow:any;
    showDataByContinent: (arrayOfCountries:CountryData) => dataToShowReturnProps[]
}


export const APPCONTEXT = createContext( {} as AppContextProps )

export const AppProvider = ({children}:any) => {

  const [state, dispatch] = useReducer(AppReducer, appInitialState)

  // const {queryInfo} = UseQueryHook()

  // console.log(state)
  
  // const getQueryGDLForGroup = useMemo((groupSelected:'Language' | 'Continent' | undefined = state.groupedBy): DocumentNode | undefined => {

  //   switch(groupSelected){
  //     case 'Language':
  //       return LIST_COUNTRIES_PER_LENGUAGE
  //     case 'Continent':
  //       return LIST_COUNTRIES_PER_CONTINENT
  //   }
  // },[state.groupedBy])

  const isSelectedAGroup = useMemo((groupSelected:string | undefined = state.groupedBy): boolean => {
    return groupSelected !== undefined && true
  },[state.groupedBy])

  const showDataByContinent = (arrayOfCountries:CountryData):dataToShowReturnProps[] => {

    return arrayOfCountries.continents.map((response:ContinentsProps)=>{
      return {
        title: response.name,
        countries: response.countries.map((res:Country)=>{
          return {
            countryName: res.name,
            capital: res.capital,
            emoji: res.emoji,
          }
        })
      }
    }) 
  }

  const showDataByLanguage = (arrayOfCountries:CountryData):any | null => {

    if(!arrayOfCountries){ return null }  

    const arrayOfData =  arrayOfCountries.continents
        .map((response:ContinentsProps)=>{
          return response.countries.map((respon:Country)=>{
            return {
              capital: respon.capital,
              name: respon.capital,
              continent: respon.continent.name,
              emoji: respon.emoji,
              languages: respon.languages.map((res:LanguageAndcontinentProps)=>{
                return res.name
              })
            }
          })
        }).flat()
    
  }


  const dataToShow = (arrayOfCountries:CountryData, groupedBy:'Language' | 'Continent'):dataToShowReturnProps[] | null => {
    
    if(!arrayOfCountries){ return null }  
      
    switch (groupedBy){
      case 'Continent':
        return arrayOfCountries.continents.map((response:ContinentsProps)=>{
          return {
            title: response.name,
            countries: response.countries.map((res:Country)=>{
              return {
                countryName: res.name,
                capital: res.capital,
                emoji: res.emoji,
              }
            })
          }
        })

      case 'Language':

        const arrayOfData =  arrayOfCountries.continents
        .map((response:ContinentsProps)=>{
          return response.countries.map((respon:Country)=>{
            return {
              capital: respon.capital,
              name: respon.capital,
              continent: respon.continent.name,
              emoji: respon.emoji,
              languages: respon.languages.map((res:LanguageAndcontinentProps)=>{
                return res.name
              })
            }
          })
        }).flat()
          
        
        
        // console.log(
          
        //   arrayOfData().map((respo:Country)=>{
        //     return {info: respo,
        //       lenguage: respo.languages.map((res:LanguageAndcontinentProps)=>{
        //         return res.name
        //       })
        //     }
        //   })
        // // .map((res:LanguageAndcontinentProps)=>{
        // //   return res.name
        // // })
        
        // )

        console.log(arrayOfData)

        const prueba = 

          arrayOfData.map((response:any)=>{
          })



            // .map((response:Country)=>{
            //   return {
            //     info: response,
            //     languages: response.languages.map((respon:LanguageAndcontinentProps)=>{
            //       return respon.name
            //     })
            //   }
            // })
            // .flat().map((res:LanguageAndcontinentProps)=>{
            //   return res.name
            // })
          // .map((res:LanguageAndcontinentProps)=>{
          //   return res.name
          // })
        
        
        // .map((re:string)=>{
        //   return {
        //     title: re, //ojo re es el nombre del lenguaje
        //     countries: arrayOfData().filter((r:Country)=>{
        //       // console.log(r)

        //     })
        //   }
        // })

        // console.log(arrayOfData())
        
        // //Aqui va bien la funcion
        // .map((response:string)=>{

        //   return {
        //     title: response,
        //     countries: {
              
        //     }
        //   }

        // })
        

//-----------

        // .map((r: string)=>{
        //   return {
        //     title: 
        //   }
        // })
  
        console.log(prueba)
        // console.log(new Set(prueba))

        // const nuevaOrganizacion = arrayOfCountries.continents.map((response:ContinentsProps)=>{
          
        //   return response.countries.map((res:Country)=>{
        //     return res.language
        //     // console.log(res)
        //     // return res.language.forEach((r:LanguageAndcontinentProps)=>{
        //     //   return r.name
        //     // })
        //   })
        // })
        

        // console.log(nuevaOrganizacion)

        return null

    }

  }

  return (
    <APPCONTEXT.Provider value={{state, dispatch, isSelectedAGroup, dataToShow, showDataByContinent}}>
      {children}
    </APPCONTEXT.Provider>
  )
}

export default AppProvider;