import { AppState } from "./AppContext";

export type ActionReducerProps = 
    | {type: 'setCountry', payload: PayloadSetCountryProps}
    | {type: 'setGroupBy', payload: PayloadSetGroupByProps}
    | {type: 'setDataToShow', payload: PayloadSetDataToShow}

    type PayloadSetCountryProps = {
        country: string;
    }

    type PayloadSetGroupByProps = {
        groupBy: 'Language' | 'Continent' | undefined;
    }

    type PayloadSetDataToShow = {
        dataToShow: dataToShowReturnProps[],
    }
    
    export interface dataToShowReturnProps {
        title: string;
        countries: countriesReturnProps[];
      }
    
      export type countriesReturnProps = {
        countryName: string;
        capital: string | null;
        emoji: string;
      }

export const AppReducer = (state: AppState, action: ActionReducerProps ):AppState => {

    switch (action.type) { 

        case 'setDataToShow':
            return {
                ...state,
                dataToShow: action.payload.dataToShow
            }

        case 'setCountry':
            return {
                ...state,
                country: action.payload.country
            }

        case 'setGroupBy':
            return {
                ...state,
                groupedBy: action.payload.groupBy,
                // dataToShow: action.payload.dataToShow
            }

        default: 
            return state;
                
    }
}