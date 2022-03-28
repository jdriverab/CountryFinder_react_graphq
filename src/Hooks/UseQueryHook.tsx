import React from 'react';
import { DocumentNode, gql, useQuery } from '@apollo/client';

export interface CountryDataProps {
    continents: ContinentsProps[]
}

export interface ContinentsProps {
name: string;
countries: CountryProps[];
}
    
export interface CountryProps {
    name: string;
    capital: string;
    continent: LanguageAndcontinentProps;
    emoji: string;
    languages: LanguageAndcontinentProps[] 
}

export type LanguageAndcontinentProps = {
  name:string
}

const UseQueryHook = () => {

    const LIST_COUNTRIES: DocumentNode = gql`
    query Continent {
        continents {
          name
          countries{
            name
            capital
            continent{
              name
            }
            emoji
            languages{
              name
            }
          }
        }	
      }
    `;

    const queryInfo = useQuery<CountryDataProps>(LIST_COUNTRIES)

    return {
        queryInfo, 
    }
}

export default UseQueryHook
