import {
  Box,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Link as RouteLink } from 'react-router-dom' 

import { Country } from '../interfaces/country';

type countryPreview = {
  data : Country;
}

const Card: React.FC<countryPreview> = ({data}) => {
  const bg = useColorModeValue('lightElements', 'darkElements');
  const color = useColorModeValue('lightText', 'darkText');


  return (
 
      <Box
        as={RouteLink} to={'/country/' + data.cca3}
        width='225px'
        bgColor={bg}
        color={color}
        borderRadius={5}
        cursor='pointer'
      >
        <Image
          src={data.flags["png"]}
          alt='flag'
          height='50%'
          width='100%'
          borderTopRadius={5}
        />
        <Stack height='50%' width='100%' borderBottomRadius={5} paddingX={5}>
          <Text fontWeight={800} fontSize={16} marginTop={4} marginBottom={2}>
            {data.name.official}
          </Text>

          <Stack spacing={2} paddingBottom={6} fontSize='14px' fontWeight={600}>
            <Text>
              Population: <Text variant='data'>{data.population.toLocaleString()}</Text>
            </Text>
            <Text>
              Region: <Text variant='data'>{data.region}</Text>
            </Text>
            <Text>
              Capital: <Text variant='data'>{data.capital && data.capital[0]}</Text>
            </Text>
          </Stack>
        </Stack>
      </Box>
   
  );
};

export default Card;
