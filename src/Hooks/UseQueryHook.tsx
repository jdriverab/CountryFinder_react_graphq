import { DocumentNode, gql, useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
// import { LIST_COUNTRIES_PER_LENGUAGE } from '../context/gdlQuery';

export interface CountryData {
    continents: ContinentsProps[]
}

export interface ContinentsProps {
name: string;
countries: Country[];
}
    
export interface Country {
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

    const LIST_COUNTRIES_PER_LENGUAGE: DocumentNode = gql`
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

    const queryInfo = useQuery<CountryData>(LIST_COUNTRIES_PER_LENGUAGE)

    return {
        queryInfo, 
    }
}

export default UseQueryHook
