import { DocumentNode, useQuery } from '@apollo/client';
import { useState } from 'react';
import { LIST_COUNTRIES_PER_LENGUAGE } from '../context/gdlQuery';

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

const UseQueryHook = (query:DocumentNode = LIST_COUNTRIES_PER_LENGUAGE) => {

    const queryInfo = useQuery<CountryData>(query);


    // const [valor, setValor] = useState(inicial)

    // const acumular = (numero:number) => {
    //     setValor( valor + numero );
    // }

    return {
        queryInfo, 
    }
}

export default UseQueryHook
