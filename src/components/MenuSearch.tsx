import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Stack,
  Input,
  Menu,
  MenuButton,
  Button,
  MenuList,
  useColorModeValue,
  MenuOptionGroup,
  MenuItemOption,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const CONTINENTS: string[] = ['Africa', 'Asia', 'America', 'Europe', 'Oceania'];

type regionFunction = {
  changeRegion: (value: string) => void;
  searchCountry: (value: string) => void;
};

const MenuSearch: React.FC<regionFunction> = ({
  changeRegion,
  searchCountry,
}) => {
  const bg = useColorModeValue('lightElements', 'darkElements');
  const color = useColorModeValue('lightText', 'darkText');

  return (
    <>
      <Stack
        marginY={[5, 5, 20, 20]}
        display='flex'
        flexDirection={['column', 'column', 'row', 'row']}
        spacing={[10, 10, 0, 0]}
        align={['center', 'center']}
        justifyContent='space-between'
      >
        <InputGroup width='350px'>
          <InputLeftElement children={<Search2Icon color={color} />} />
          <Input
            placeholder='Search for a country...'            
            bgColor={bg}
            color={color}
            _placeholder={{
              fontSize: '80%',
              padding: '10px',
              color: color,
            }}
            _focus={{
              borderColor: 'none',
            }}
            onChange={(e) => searchCountry(e.target.value)}
          />
        </InputGroup>

        <Menu closeOnSelect={true}>
          <MenuButton
            as={Button}
            bgColor={bg}
            color={color}
            fontSize='80%'
            _focus={{ borderColor: 'none' }}
            minWidth='150px'
            rightIcon={<ChevronDownIcon />}
          >
            Filter by region
          </MenuButton>

          <MenuList color={color} minWidth='150px'>
            <MenuOptionGroup defaultValue='all' type='radio'>
              {CONTINENTS.map((region, index) => (
                <MenuItemOption
                  key={index}
                  value={region}
                  onClick={(e) => changeRegion(region)}
                >
                  {region}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Stack>
    </>
  );
};

export default MenuSearch;
