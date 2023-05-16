import { Link } from "react-router-dom";

export function Topic3(){
    return(
        <div id="Topic3">
            <ul>

                        <li>
                            <Link to={'/documentation/CVLib'}>OpenCV Library </Link>
                        </li>
                        <li>
                            <Link to={'/documentation/NumPy'}>NumPy package </Link>
                        </li>
                        <li>
                            <Link to={'/documentation/Pandas '}>Pandas Library </Link>
                        </li>
                        <li>
                            <Link to={'/documentation/Openpyxl'}>Openpyxl Library</Link>
                        </li>
                        <li>
                            <Link to={'/documentation/pil'}>Python Imaging Library</Link>
                        </li>
                    </ul>
        </div>
    )
}