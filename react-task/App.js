import React, { useEffect, useState } from 'react'
import './App.css';

export default function App() {

    const [base, setBase] = useState([])
    const [downoload, setDownoload] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            return response.json()
        })
        .then((json) =>{
            setBase(json)
            setDownoload(false)
        })
    },[])
    
    

    return(
        <div className="header">
            <div>
                <div>
                <h1 className="text">
                    Данные с сервера
                    </h1>
                   
                    </div>
            </div>
            {downoload ? (
                <div>
                    Данные с сервера загружены
                </div>
            ): base.map(elements => {
                return(
                    <div className="date">
                       <div>
                            <b>{elements.id}.</b>
                       </div>
                     <div>
                       {elements.title}
                         </div>
                         
                    </div>
                )
            })}
        </div>
    )
}
