import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Container, VStack } from '@chakra-ui/react';
import Comparison from './components/Comparison';
import Overall from './components/Overall';
import EarlyAccess from './components/EarlyAccess';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#eeefe9' }}>
      <NavBar />
      <VStack spacing={4} margin="30px 0">
        <Hero />
        <Overall />
        <Comparison />
        <EarlyAccess />
      </VStack>
      <Container padding="30px"></Container>
      <Footer />
    </div>
  );
}

export default App;
