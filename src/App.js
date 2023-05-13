import './App.css';
import { Fundmentals } from './components/Fundemntals';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
        <>
          <Header/>
          <HowItWorks/>
          <Fundmentals/>
          <About/>
        </>

  );
}

export default App;
