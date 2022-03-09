import { Container } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Detail from './pages/Detail';


import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Container maxW={['container.xl', 'container.xl', 'container.lg', 'container.lg']}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country/:code' element={<Detail />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
