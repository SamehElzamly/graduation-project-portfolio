import ill1 from '../public/ill1.svg'
import ill2 from '../public/ill2.svg'
import ill3 from '../public/ill3.svg'
import ill4 from '../public/ill4.svg'
import ill5 from '../public/ill5.svg'
export function HowItWorks(){
    return(
        <div id="HowItWorks">
            <div className="step1">
                <img src={ill1} alt=''></img>
            </div>
            <div className="step2">
                <img src={ill2} alt=''></img>
            </div>
            <div className="step3">
                <img src={ill3} alt=''></img>
            </div>
            <div className="step4">
                <img src={ill4} alt=''></img>
            </div>
            <div className="step5">
                <img src={ill5} alt=''></img>
            </div>
        </div>
    );
}
