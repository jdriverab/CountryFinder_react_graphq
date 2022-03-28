import React, { createContext, useMemo, useReducer} from 'react'
import {AppReducer, ActionReducerProps} from './AppReducer'
import  { ContinentsProps, CountryProps, CountryDataProps, LanguageAndcontinentProps } from '../Hooks/UseQueryHook';

  export const appInitialState: AppState = {
    country: '',
    groupedBy: undefined,
    dataToShow: null,
  }

  export interface AppState {
    country: string,
    groupedBy: 'Language' | 'Continent' | undefined;
    dataToShow: dataToShowReturnProps[] | null;

  }
  
  interface infoForComponentsProps {
    dataByContinents: dataToShowReturnProps[];
    dataByLanguage: dataToShowReturnProps[];
  }

  export interface dataToShowReturnProps {
    title: string;
    countries: countriesReturnProps[];
  }

  export type countriesReturnProps = {
    countryName: string;
    capital: string | null;
    emoji: string;
    languages: string[];
  }

  interface filterInputProps {
    dataList:dataToShowReturnProps[];
    textToFilter:string;
  }

  //Esta es la interface para la salida de las variables del context
export interface AppContextProps {
    state:AppState;
    dispatch: (reducerInfo:ActionReducerProps)=> void;
    isSelectedAGroup: boolean;
    organiceInfoForComponents: (arrayOfCountries:CountryDataProps) => infoForComponentsProps;
    filterByCountry: ({dataList, textToFilter}:filterInputProps)=> dataToShowReturnProps[];
}

export const APPCONTEXT = createContext( {} as AppContextProps )

export const AppProvider = ({children}:any) => {
  const [state, dispatch] = useReducer(AppReducer, appInitialState)
  
  /**
   * Funcion indica si se eligio una agrupacion de informacion, a partir de esta funcion nace la primera renderizacion de los paises.
   * @param {string} groupSelected es un string que indica como quieren que se agrupen los datos, por defecto llega del estado 
   * @returns {boolean} retorna valor booleano, esta funcion es la que permite la renderizacion de los componentes cuando se eligen en los botones.
   */
  const isSelectedAGroup = useMemo((groupSelected:string | undefined = state.groupedBy): boolean => {
    return groupSelected !== undefined ? true : false
  },[state.groupedBy])

  // esta funcion la implemente porque preferi hacer solo 1 llamado a la BD y dejar preparada la info para los filtros posteriores,
  // asi evitaba tambien muchas llamadas si el usuario elegia filtrar mucho, en todo caso se memoiza para evitar su reprocesamiento posterior

  /**
   * Funcion para organizar informacion extraida del grafo
   * @param {array} arrayOfCountries Es el array extraido del grafo (esta funcion es usada en el HomeContainer)
   * @returns retorna un objeto con los listados de paises agrupados.
   */
  const organiceInfoForComponents = useMemo(()=>(arrayOfCountries:CountryDataProps):infoForComponentsProps => {
    const dataByContinents = arrayOfCountries.continents.map((response:ContinentsProps)=>{
      return {
        title: response.name,
        countries: response.countries.map((res:CountryProps)=>{
          return {
            countryName: res.name,
            capital: res.capital,
            emoji: res.emoji,
            languages: res.languages.map((r:LanguageAndcontinentProps)=>{
              return r.name
            })
          }
        })
      }
    }) 

    const dataByLanguages = getAllLenguages(arrayOfCountries).map((response: string)=>{
      return {
        title:response,
        countries: dataByContinents.map((respon:dataToShowReturnProps)=>{
          return respon.countries.map((resp:countriesReturnProps)=>{
              return resp
          })
        }).flat(2)
        .filter((res:countriesReturnProps)=>{
          return res.languages.includes(response)
        })
      }
    })
    return {dataByContinents: dataByContinents, dataByLanguage:dataByLanguages }
  },[])


/**
   * Funcion para extraer todos los lenguajes de la informacion traida del grafo.
   * @param {array} arrayOfCountries Es el array extraido del grafo (esta funcion es usada en el HomeContainer)
   * @returns retorna un array con todos los idiomas sin duplicados.
   */
  const getAllLenguages = (arrayOfCountries:CountryDataProps): string[] => {
    return  Array.from(new Set(arrayOfCountries.continents.map((response:ContinentsProps)=>{
      return response.countries.map((respon:CountryProps)=>{
        return respon.languages.map((res:LanguageAndcontinentProps)=>{
          return res.name
        })
      })
    }).flat(2)))
  }
  
  /**
   * Funcion para filtrar el listado de paises segun el texto a ingresar.
   * @param {array} dataList array con listado de paises a filtrar segun el input en el SearchBarComponent
   * @param {string} textToFilter es el texto de interes, por lo general se toma del input del SearchBar 
   * @returns retorna el array de paises organizado por categoria ingresada
   */
  const filterByCountry = ({dataList, textToFilter}:filterInputProps): dataToShowReturnProps[] => {

    return dataList.reduce((accumulator:any, currentObj:dataToShowReturnProps) => {
      let output:any = {}
      const transformedSearchQuery = textToFilter.toLowerCase()
      const currentTitle = currentObj.title
      const currentData = currentObj.countries

      const filteredData = currentData.filter((item:countriesReturnProps) => {
        const transformedItem = item.countryName.toLowerCase()
        return transformedItem.includes(transformedSearchQuery)
      })

      if (filteredData.length) {
        output.title = currentTitle
        output.countries = filteredData
      }

      if (Object.entries(output).length) {
        return [...accumulator, output]
      } else {
        return accumulator
      }
    }, [])
    
  }

  return (
    <APPCONTEXT.Provider value={{state, dispatch, isSelectedAGroup, organiceInfoForComponents, filterByCountry}}>
      {children}
    </APPCONTEXT.Provider>
  )
}

export default AppProvider;