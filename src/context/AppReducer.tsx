import { AppState } from "./AppContext";

export type ActionReducerProps = 
    | {type: 'setCountry', payload: PayloadSetCountryProps}
    | {type: 'setGroupBy', payload: PayloadSetGroupByProps}


    type PayloadSetCountryProps = {
        country: string;
    }

    type PayloadSetGroupByProps = {
        groupBy: 'Language' | 'Continent' | undefined;
    }

export const AppReducer = (state: AppState, action: ActionReducerProps ):AppState => {

    switch (action.type) { 

        case 'setCountry':
            return {
                ...state,
                country: action.payload.country
            }

            case 'setGroupBy':
            return {
                ...state,
                groupedBy: action.payload.groupBy
            }

        default: 
            return state;
                
    }
}