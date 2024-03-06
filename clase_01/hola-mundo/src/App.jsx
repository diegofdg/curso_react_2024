import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const midudev = { isFollowing: true, userName: "midudev" }
    const pheralb = { isFollowing: false, userName: "pheralb" }
    const vxnder = { isFollowing: true, userName: "vxnder" }

    return (
        <section className='App'>
            <TwitterFollowCard
                {...midudev}                
            >
                Miguel Angel Duran
            </TwitterFollowCard>
            
            <TwitterFollowCard
                {...pheralb}                
            >
                Pablo Hernandez
            </TwitterFollowCard>

            <TwitterFollowCard
                {...vxnder}                
            >
                Vanderhart
            </TwitterFollowCard>
        </section>
    )
}