import { useEffect, useState } from 'react';

import { Button, Spinner, Stack, useColorModeValue } from '@chakra-ui/react';

import { useParams, Link } from 'react-router-dom';
import DetailBox from '../components/DetailBox';


import { ArrowBackIcon } from '@chakra-ui/icons';
import { useGetCountryByCode } from '../hooks/useFetch';

const Detail = () => {
  const bg = useColorModeValue('lightElements', 'darkElements');
  const color = useColorModeValue('lightText', 'darkText');

  let code = useParams().code;

  const { country, loading } = useGetCountryByCode(code); 


  if (loading) {
    return (
      <>
        <Stack display='flex' justify='center' align='center' marginTop='100px'>
          <Spinner size='xl' color={color} />
        </Stack>
      </>
    );
  }

  return (
    <>
      <Stack marginY='50px' display='flex' justify='flex-start'>
        <Button
          as={Link}
          to='/'
          width='100px'
          height='30px'
          bgColor={bg}
          color={color}
          borderRadius='2px'
          fontWeight='300'
          fontSize='80%'
          boxShadow='dark-lg'
          leftIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Stack>

      {country && <DetailBox country={country} />}
    </>
  );
};

export default Detail;
