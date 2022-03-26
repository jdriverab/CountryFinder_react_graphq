import React, { Fragment, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import './../container/CountrySearchContainer/style.scss'


interface Country {
  name: string;
  code: string;
  capital: string;
  continent: {
    name: string;
  };
}

export interface CountryData {
  countries: Country[];
}

interface CountryVariable {
  code: string;
}

const COUNTRIES_QUERY = gql`
  query Counties($code: String) {
    countries(filter: { continent: { eq: $code } }) {
      name
      code
      capital
      continent {
        name
      }
    }
  }
`;

const CountryList = () => {
  const continentCode = 'EU';
  const { data, loading } = useQuery<CountryData, CountryVariable>(COUNTRIES_QUERY, {
    variables: {
      code: continentCode,
    },
  });

  if (loading) return <p>Loading...</p>;
  const countries = data?.countries;

  console.log(RegExp('Chil'))

  

  return (
    <>
      {countries && countries.map((c:any, i:any) => (
        <div key={i}>
          <h1 id='CountrySearchContainerTextStyle'>
            {c.name}
          </h1>
          <p>
          {c.capital} 
          </p>
          <p>
            {c.continent.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default CountryList;