import {
  useColorModeValue,
  Button,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Wrap,
  HStack,
  VStack,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import { CountryDetails } from '../interfaces/country';

type CountryData = {
  country: CountryDetails;
};

const DetailBox: React.FC<CountryData> = ({ country }) => {
  const bg = useColorModeValue('lightElements', 'darkElements');
  const color = useColorModeValue('lightText', 'darkText');

  return (
    <>
      <Stack display='flex' flexDirection={["column", "column", "row", "row"]} color='#000' spacing={[10, 10, 0, 0]}>
        <Stack flex={1} display='flex' justify='center' align={["center","center"]}>
          <Image
            src={country.flags['svg']}
            alt='flag'
            height='100%'
            width='80%'
            paddingY='20px'
          />
        </Stack>
        <Stack flex={1} padding='30px'>
          <Heading fontWeight='600' size='lg' color={color}>
            {country.name}
          </Heading>

          <Stack
            color={color}
            display='flex' justify='space-between'
            flexDirection={["column", "column", "row", "row"]}            
            paddingY='5'
            spacing={[3, 3, 0, 0]}
            fontWeight='600' fontSize='sm'
          >
            <Stack spacing='3'>
              <Text >
                Native name: <Link>{country.nativeName}</Link>
              </Text>
              <Text>
                Population: <Link>{country.population.toLocaleString()}</Link>
              </Text>
              <Text>
                Region: <Link>{country.region}</Link>
              </Text>
              <Text>
                Capital: <Link>{country.capital}</Link>
              </Text>
            </Stack>

            <Stack spacing='3'>
              <Text>
                Top Level Domain: <Link>{country.topLevelDomain}</Link>
              </Text>
              <Text display='flex'>
                Currencies:{' '}
                <VStack marginLeft={2} spacing='0'>
                  {country.currencies.map((currency) => (
                    <Link key={currency.name}>{currency.name} </Link>
                  ))}
                </VStack>
              </Text>
              <Text display='flex'>
                Languages:{' '}
                <VStack marginLeft={2} spacing='0'>
                  {country.languages.map((language, index) => (
                    <Link key={`${index}_ ${language}`}>{language.name} </Link>
                  ))}
                </VStack>
              </Text>
            </Stack>
          </Stack>

          {country.borders  && (
            <>
              <HStack spacing='5' display='flex' flexDirection='row'>
                <Text fontWeight={600} size='sm' color={color}>
                  Border Countries:
                </Text>
                <Wrap spacing='2' shouldWrapChildren>
                  {country.borders.map((border) => (
                    <Button
                      key={border}
                      as={RouterLink}
                      to={`/country/${border}`}
                      borderRadius={2}
                      cursor='pointer'
                      height='20px'
                      fontSize='80%'
                      bgColor={bg}
                      color='gray.400'
                      boxShadow='dark-lg'
                      _focus={{ border: 'none' }}
                    >
                      {border}
                    </Button>
                  ))}
                </Wrap>
              </HStack>
            </>
          )}


        </Stack>
      </Stack>
    </>
  );
};

export default DetailBox;
