import { Link } from "react-router-dom"
export function Topic4(){
    return(
        <div id="Topic4">
            <ul>
                        <li>
                            <Link to={'/documentation/Tkinter'}>Tkinter Module </Link>
                        </li>
                        <li>
                            <Link to={'/documentation/Mediapipe'}>Mediapipe Module</Link>
                        </li>
                        <li>
                            <Link to={'/documentation/mysql.connector'}>mysql.connector module</Link>
                        </li>
                        <li>
                            <Link to={'/documentation/ttk'}>ttk Module</Link>
                        </li>
                        <li>
                            <Link to={'/documentation/OS'}>OS module </Link>
                        </li>
                            <li>
                            <Link to={'/documentation/XlsxWriter'}>XlsxWriter module</Link>
                        </li>
                        <li>
                            <Link to={'/documentation/Messagebox'}>Messagebox module</Link>
                        </li>
                        <li>
                            <Link to={'/documentation/Strftime'}>Strftime module</Link>
                        </li>

                    </ul>
        </div>
    )
}