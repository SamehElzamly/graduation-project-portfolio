import fillData from '../public/fillData.jpg'
import dataBase from '../public/dataBase.jpeg'
import code from '../public/code.png'
import output from '../public/output.jpg'
import result from '../public/result.jpg' 
import { useEffect } from 'react'
import { useState } from 'react'
export function HowItWorks(){
    const [paragraph,setParagraph]=useState(<></>)
        useEffect(()=>{
            let i=2;
            setParagraph(<p>At first the administrator should collect the all data of all students and fill it on the project....</p>)
            setInterval(()=>{
                if(i%5===1)
                    setParagraph(<p>At first the administrator should collect the all data of all students and fill it on the project....</p>)
                else if(i%5===2)
                    setParagraph(<p>The data stored in the data Base....</p>)
                else if(i%5===3)
                    setParagraph(<p>Project is ready to work....</p>)
                else if(i%5===4)
                    setParagraph(<p> Project can now comparing all faces and recgonizing it....</p>)
                else
                    setParagraph(<p>Project produce the name of students have attended and the date of each attendance....</p>)
                i++
            },4000)
    },[])
    return(
        <div id="HowItWorks">
            <h1 className='h1Bottom'>How it works</h1>
            <div className='texts'>
                {paragraph}
            </div>
            <div>
                <div className="step1 w-50">
                    <img src={fillData} alt=''></img>
                </div>
                <div className="step2 w-50">
                    <img src={dataBase} alt=''></img>
                </div>
                <div className="step3 w-50">
                    <img src={code} alt=''></img>
                </div>
                <div className="step4 w-50">
                    <img src={output} alt=''></img>
                </div>
                <div className="step5 w-50">
                    <img src={result} alt=''></img>
                </div>
                </div>
        </div>
    );
}
