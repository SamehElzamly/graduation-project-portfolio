import { Link } from "react-router-dom";

export function Topic5(){
    return(
        <div id="Topic5">
            <ul>
                        <li>
                            <Link to={'/documentation/yolo'}>YOLO Algorithm </Link>
                        </li>
                        <li>
                            <Link to={'/documentation/roboflow'}>Roboflow Algorithm</Link>
                        </li>
                        <li>
                            <Link to={'/documentation/facenet'}>FaceNet Algorithm</Link>
                        </li>
                    </ul>
        </div>
    )
}