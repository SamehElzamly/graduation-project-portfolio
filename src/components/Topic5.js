import { Link } from "react-router-dom";

export function Topic5(){
    return(
        <div id="Topic5">
            <ul>
                        <li>
                            <Link to={'/documentaion/link1'}>link1</Link>
                        </li>
                        <li>
                            <p>link2</p>
                        </li>
                        <li>
                            <p>link3</p>
                        </li>
                        <li>
                            <p>link4</p>
                        </li>
                        <li>
                            <p>link5</p>
                        </li>
                    </ul>
        </div>
    )
}