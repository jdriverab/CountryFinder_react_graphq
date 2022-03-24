import React, { createContext, useMemo, useReducer, useState } from 'react'
import {DocumentNode, gql, QueryResult, useQuery } from "@apollo/client";
import {AppReducer, ActionReducerProps} from './AppReducer'
import { LIST_COUNTRIES_PER_CONTINENT, LIST_COUNTRIES_PER_LENGUAGE } from './gdlQuery';

  export const appInitialState: AppState = {
    country: '',
    groupedBy: undefined,
  }

  export interface AppState {
    country: string,
    groupedBy: 'Language' | 'Continent' | undefined; 
  }

  interface Country {
    name: string;
    code: string;
    capital: string;
    continent: {
      name: string;
    };
  }
  
  interface CountryData {
    countries: Country[];
  }

export interface AppContextProps {
    state:AppState;
    dispatch: (reducerInfo:ActionReducerProps)=> void;
    isSelectedAGroup: boolean;
    getQueryGDLForGroup:any;
}


export const APPCONTEXT = createContext( {} as AppContextProps )

export const AppProvider = ({children}:any) => {

  const [state, dispatch] = useReducer(AppReducer, appInitialState)

  console.log(state)
  
  const getQueryGDLForGroup = useMemo((groupSelected:'Language' | 'Continent' | undefined = state.groupedBy): DocumentNode | undefined => {

    switch(groupSelected){
      case 'Language':
        return LIST_COUNTRIES_PER_LENGUAGE
      case 'Continent':
        return LIST_COUNTRIES_PER_CONTINENT
    }
  },[state.groupedBy])

  const isSelectedAGroup = useMemo((groupSelected:string | undefined = state.groupedBy): boolean => {
    return groupSelected !== undefined && true
  },[state.groupedBy])

  return (
    <APPCONTEXT.Provider value={{state, dispatch, isSelectedAGroup, getQueryGDLForGroup,}}>
      {children}
    </APPCONTEXT.Provider>
  )
}

export default AppProvider;