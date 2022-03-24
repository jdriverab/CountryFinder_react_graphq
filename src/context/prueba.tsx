import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      languages{
          code
      }
    }
  }
`;

// create a component that renders a select input for coutries
export function CountrySelect() {
  const [country, setCountry] = useState('US');
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

  console.log(country)
  console.log(data)

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <select value={country} onChange={event => setCountry(event.target.value)}>
      {data.countries.map((country:any) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

ReactDOM.render(<CountrySelect />, document.getElementById('root'));
