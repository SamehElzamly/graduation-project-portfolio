import { Link } from "react-router-dom";
export function Topic2(){
    return(
        <div id="Topic2">
            <ul>
                <li>
                    <Link to={'/documentation/facial-recgonition'} >Facial recognition</Link>
                </li>
                <li >
                    <Link to={'/documentation/machine-learning'} >Machine Learning</Link>
                </li>
                <li >
                    <Link  to={'/documentation/deep-learning'} >Deep Learning</Link>
                </li>
                
                <li >
                    <Link  to={'/documentation/biometrics'} >Biometrics</Link>
                </li>

            </ul>
        </div>
    )
}