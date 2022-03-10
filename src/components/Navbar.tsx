import { MoonIcon } from '@chakra-ui/icons';
import {
  Container,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('lightElements', 'darkElements');
  const color = useColorModeValue('lightText', 'darkText');

  return (
    <Container minW={"100%"} bgColor={bg}>
      <Container
        maxW='container.lg'
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        paddingY='20px'
        color={color}
      >
        <Stack>
          <Text fontWeight='800'>Where in the world?</Text>
        </Stack>
        <Stack display="flex" flexDirection="row" align="center" spacing="0">
        <MoonIcon color={color} h={3} w={3} marginX={2}/>
          <Text fontWeight={600} onClick={toggleColorMode} cursor='pointer'>
           {colorMode == 'light' ? 'Light' : 'Dark'} mode
          </Text>
        </Stack>
      </Container>
    </Container>
  );
};

export default Navbar;
