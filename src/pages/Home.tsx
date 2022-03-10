import {
  useColorModeValue,
  Stack,
  Wrap,
  Spinner,
  Heading,
} from '@chakra-ui/react';

import { useState } from 'react';

import Card from '../components/Card';
import MenuSearch from '../components/MenuSearch';

import { useFetch } from '../hooks/useFetch';

import { Country } from '../interfaces/country';

const Home = () => {
  const color = useColorModeValue('lightText', 'darkText');

  const [region, setRegion] = useState<String>('all');

  const [countryName, setCountryName] = useState<string>('');

  const getAll: string = 'https://restcountries.com/v3.1/all';
  let getByContinent: string = `https://restcountries.com/v3.1/region/${region}`;
  let getByName: string = `https://restcountries.com/v3.1/name/${countryName}`;

  const sendURL = () => {
    if (countryName.length < 2) {
      if (region == 'all') {
        return getAll;
      } else {
        return getByContinent;
      }
    } else {
      return getByName;
    }
  }; // Esta funcion controla la URL que se envia al customHook, la prioridad la tiene lo que ingrese el usuario en el input

  const { countries, loading } = useFetch(sendURL());

  if (loading) {
    return (
      <>
        <MenuSearch changeRegion={setRegion} searchCountry={setCountryName} />
        <Stack display='flex' justify='center' align='center' marginTop='100px'>
          <Spinner size='xl' color={color} />
        </Stack>
      </>
    );
  } else {
    return (
      <>
        <MenuSearch changeRegion={setRegion} searchCountry={setCountryName} />
        <Wrap spacing='6' align='center' justify='center' shouldWrapChildren>
          {countries && countries.length ?
             countries.map((item: Country) => (
                <Card data={item} key={item.cca3} />
              ))
            : !countries.length && (
                <Heading color={color} fontWeight={800}>
                  Not found!
                </Heading>
              )}
        </Wrap>
      </>
    );
  }
};

export default Home;
