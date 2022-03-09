//Ademas de que countryDetails declara mas informacion que la otra
//Se utilizan las dos versiones de la API ya que en la version 2 no se puede realizar la busqueda mediante continente

export interface Country{
  name: {official:string, common:string};
  population: number;
  region: string;
  capital: string[];
  flags: string[];
  cca3: string;
} //Interface realizada para la version 3 de la API

export interface CountryDetails{
  flags: string[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  capital: string;
  topLevelDomain: string;
  currencies: Array<{name:string}>;
  languages: Array<{name: string}>;
  borders: string[];
  alpha3Code: string;
} //Interface realizada para la version 2 de la API