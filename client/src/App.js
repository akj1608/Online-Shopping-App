import './App.css';
import {Container} from 'react-bootstrap'
import Footer from './components/footer';
import Header from './components/header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <Header/>
    <main>
    <Container>
     <h1 className='mt-2'> Ecommerce App </h1>
     <Homepage/>
    </Container>
    </main>
    <Footer/>
    
   </>
  );
}

export default App;
