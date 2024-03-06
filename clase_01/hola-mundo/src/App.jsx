import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const [ name, setName ] = useState('midudev')

    console.log("render with name: ", name)

    // Comentarios de JavaScript
    
    /* Comentarios 
    multilíneas 
    de JavaScript */

    return (        
        <section className='App'>
            <TwitterFollowCard
                userName={name}
            >
                Miguel Angel Duran
            </TwitterFollowCard>
            
            { /* Comentarios en JSX */}
            
            <TwitterFollowCard
                userName="pheralb"
            >
                Pablo Hernandez
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="vxnder"
            >
                Vanderhart
            </TwitterFollowCard>
            <button
                onClick={() => setName("pedromichel")}
            >
                Cambiar nombre
            </button>
        </section>
    )
}