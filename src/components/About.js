import sameh from '../public/sameh.jpg'
import ayman from '../public/ayman.jpg'
import hamdia from '../public/hamdia.jpg'
import hassan from '../public/hassan.jpg'
import mahmoud from '../public/mahmoud.jpg'
import rawan from '../public/rawan.jpg'
import yousef from '../public/yousef.jpg'
import azzoz from '../public/azzoz.jpg'
import marwa from '../public/marwa.jpg'
// import {ahmed} from '../public/ahmed.jpg'
// import {marwa} from '../public/marwa.jpg'
export function About(){
    return(
        <div id="About">
            <h1 className='h1Bottom'>About Us</h1>
            <div>
                <div className='text'>
                    <h2>Meet our team of creators , desingers and world class problem solvers.</h2>
                    <p>We are a software team, we have developed this project as graduation project, using tools like the mintioned above.</p>
                </div>
                <div className="boxes">
                    <div className="box">
                        <img src={sameh } alt='sameh ashraf'/>
                        <h3>Sameh Ashraf</h3>
                        <p>Mern-stack developer</p>
                    </div>
                    <div className="box">
                        <img src={ayman} alt='ayman Reda' />
                        <h3>Ayman Reda</h3>
                        <p>mobile app developer</p>
                    </div>
                    <div className="box">
                        <img src={yousef} alt='yousef'/>
                        <h3>Yousef Elattar</h3>
                        <p>Front-end developer</p>
                    </div>
                    <div className="box">
                        <img src={hassan} alt='hassan'/>
                        <h3>Hassan Abdalla</h3>
                        <p></p>
                    </div>
                    <div className="box">
                        <img src={mahmoud} alt='mahmoud hamdy'/>
                        <h3>Mahmoud Hamdy</h3>
                        <p>Back-end developer</p>
                    </div>
                    <div className="box">
                        <img src={hamdia} alt='hamdia'/>
                        <h3>Hamdia Mahmoud</h3>
                        <p></p>
                    </div>
                    <div className="box">
                        <img src={rawan} alt='rawan elsayed'/>
                        <h3>Rawan Elsayed</h3>
                        <p>Front-end developer</p>
                    </div>
                    <div className="box">
                        <img src={azzoz} alt='ahmed azzoz'/>
                        <h3>Ahmed Mohamed</h3>
                        <p>Front-end developer</p>
                    </div>
                    <div className="box">
                        <img src={marwa} alt='rawan elsayed'/>
                        <h3>Marwa Mohamed</h3>
                        <p>Front-end developer</p>
                    </div>
                </div>
            </div>
        </div>
        )
}