import { Head } from "./Head";

export function Header(){
    return(
        <header>
            <Head/>
            <div className="animationText">
                <div className="cursor"></div>
                <h2 className="headLine">Life is better with <span>AI...</span></h2>
            </div>
            <div className="layer"></div>
            <div className="wavy"></div>
        </header>
    );
}
