import { useEffect, useState } from 'react';
import {Country, CountryDetails} from '../interfaces/country'


export const useFetch = ( URL:string ) => {

  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async() =>{
    try{
      setLoading(true)

      const response: Response = await fetch(URL);
      const documents = await response.json();
  
      setCountries(documents);
      setLoading(false);

    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getData();
  }, [URL])

  return {
    countries,
    loading
  }

}

export const useGetCountryByCode = (code:any) => {
  const [country, setCountry] = useState<CountryDetails>();
  const [loading, setLoading] = useState<boolean>(true);

  const getDataByCode = async () => {
    const response: Response = await fetch(`      
      https://restcountries.com/v2/alpha/${code}
    `);

    const document = await response.json();

    setCountry(document);
    setLoading(false);
  };

  useEffect(() => {
    getDataByCode();
  }, [code]);

  return {country, loading}
}