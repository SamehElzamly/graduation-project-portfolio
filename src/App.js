import './App.css';
import { Fundmentals } from './components/Fundemntals';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route,Routes } from 'react-router-dom';
import { Link1,Link2,Link3,Link4,Link5,Link6,Link7,Link8,Link9,Link10,Link11,Link12,Link13,Link14,Link15,Link16,Link17,Link18,Link19,Link20,Link21,Link22,Link23,Link24 } from './components/sections';
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
          <Route path='CVLib' element={<Link6/>}/>
          <Route path='NumPy' element={<Link7/>}/>
          <Route path='Pandas' element={<Link8/>}/>
          <Route path='Openpyxl' element={<Link9/>}/>
          <Route path='XlsxWriter' element={<Link10/>}/>
          <Route path='Tkinter' element={<Link11/>}/>
          <Route path='Mediapipe' element={<Link12/>}/>
          <Route path='mysql.connector' element={<Link13/>}/>
          <Route path='ttk' element={<Link14/>}/>
          <Route path='OS' element={<Link15/>}/>
          <Route path='Messagebox' element={<Link16/>}/>
          <Route path='Strftime' element={<Link17/>}/>
          <Route path='HAAR Cascade' element={<Link18/>}/>
          <Route path='LBPH' element={<Link19/>}/>
          <Route path='LBP' element={<Link20/>}/>          
          <Route path='PIL' element={<Link21/>}/>
          <Route path='yolo' element={<Link22/>}/>
          <Route path='roboflow' element={<Link23/>}/>          
          <Route path='facenet' element={<Link24/>}/>
      </Route>
    </Routes>

  );
}

export default App;
