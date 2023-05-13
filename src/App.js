import './App.css';
import { Fundmentals } from './components/Fundemntals';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route,Routes } from 'react-router-dom';
import { Link1 } from './components/documents/link1';
import { Link2 } from './components/documents/link2';
import { Link3 } from './components/documents/link3';
import { Link4 } from './components/documents/link4';
import { Link5 } from './components/documents/link5';
import { Head } from './components/Head';
import { DocumentaionNav } from './components/DucumentaionNav';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={
        <>
          <Header/>
          <HowItWorks/>
          <Fundmentals/>
          <About/>
        </>
      }/>
      <Route path='documentation' element={        
      <div id="Documentation">
            <Head/>
            <div className="body" >
                <DocumentaionNav/>
                <Outlet/>
            </div>
        </div>}>
        <Route path='' element={
          <section>
            <p>We live in an age where everything is mechanized and linked online. 
              <br/>Every day, the internet of things, image processing, and machine learning evolve.
              <br/> Many systems have been completely altered as a result of this evolution in order to achieve more accurate results. 
              <br/>The attendance system is an example of this transformation, which began with the traditional signature on a paper sheet and progressed to facial recognition.
              <br/> This project provides a way for constructing a fully embedded class attendance system that uses facial recognition to determine whether the person's face is that of a student for that specific class or not. 
            </p>
          </section>}/>
        <Route path='getStarted' element={<Link1/>}/>
        <Route path='facial-recgonition' element={<Link2/>}/>
        <Route path='machine-learning' element={<Link3/>}/>
        <Route path='deep-learning' element={<Link4/>}/>
        <Route path='biometrics' element={<Link5/>}/>
        {/* <Route path='getStarted' element={<Link1/>}/>
        <Route path='getStarted' element={<Link1/>}/>
        <Route path='getStarted' element={<Link1/>}/> */}
      </Route>
    </Routes>

  );
}

export default App;
