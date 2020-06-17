import React from 'react';
import { useQuery, gql } from '@apollo/client';

const getExchangeRates = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(getExchangeRates);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:(</p>;

  return (
    <>
      {data.rates.map(({ currency, rate }) => {
        return (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ExchangeRates;
