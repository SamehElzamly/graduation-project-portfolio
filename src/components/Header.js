import processor from'../public/backgroundaddition.png'
export function Header(){
    return(
        <header>
            <div className="head">
                <h1 className="logo"><span>V</span>iking</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">How it works</a>
                        </li>
                        <li>
                            <a href="/">Fundementals</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="body">
                <h1><span>AI</span> provide easier life</h1>
                <img src={processor} alt='processor img'></img>
                <div>
                </div>
            </div>
        </header>
    );
}
