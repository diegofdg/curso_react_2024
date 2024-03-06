import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const [ isFollowing, setIsFollowing ] = useState(false)

    console.log("App render with isFollowing: ", isFollowing)
    
    return (
        <section className='App'>
            <TwitterFollowCard
                userName={"midudev"}
                initialIsFollowing={isFollowing}
            >
                Miguel Angel Duran
            </TwitterFollowCard>
            <button
                onClick={() => setIsFollowing(!isFollowing)}
            >
                Cambiar estado de App
            </button>
        </section>
    )
}