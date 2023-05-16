import { useEffect, useState } from "react";
import { Topic2 } from "./Topic2";
import { Topic3 } from "./Topic3";
import { Topic4 } from "./Topic4";
import { Topic5 } from "./Topic5";
import { Link } from "react-router-dom";
export function DocumentaionNav(){
    const [counter,setCounter]=useState([0,0,0,0,0])
    const [fractionalTopics,setFraTopics]=useState([])
    let ele=(element,index)=>{
        if (counter[index]%2!==0)
            return(element)
        else
            return(<></>)
    }
    useEffect(()=>{
        var topics=document.querySelectorAll('nav ul li div ul li a')
        // setFraTopics(document.querySelectorAll('nav ul li div ul li'))
        topics.forEach(topic=>{
            topic.addEventListener('click',(t=>{
                topics.forEach(t=>{
                    t.classList.remove('active')
                })
                topic.classList.add('active');
            }))
        })
    })
    return(<nav className="docNav">
            <h5>Project Documentation</h5>
            <ul>
                <li >
                    <h5 onClick={()=>{
                    setCounter([counter[0]+1,counter[1],counter[2],counter[3],counter[4]])
                }}><Link to={'/documentation/getStarted'}>get started</Link></h5>
                </li>
                <li >
                    <h5 onClick={()=>{
                    setCounter([counter[0],counter[1]+1,counter[2],counter[3],counter[4]])
                }}>Intro</h5>
                    {ele(<Topic2/>,1)}
                </li>
                <li>
                    <h5 onClick={()=>{
                    setCounter([counter[0],counter[1],counter[2]+1,counter[3],counter[4]])
                }}>Libraries</h5>
                    {ele(<Topic3/>,2)}
                </li>
                <li>
                    <h5 onClick={()=>{
                    setCounter([counter[0],counter[1],counter[2],counter[3]+1,counter[4]])
                }}>Modules</h5>
                    {ele(<Topic4/>,3)}
                </li>
                <li>
                    <h5 onClick={()=>{
                    setCounter([counter[0],counter[1],counter[2],counter[3],counter[4]+1])
                }}>Algorithms</h5>
                    {ele(<Topic5/>,4)}
                </li>
            </ul>
            </nav>)
}