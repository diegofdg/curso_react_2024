import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const users = [
        {
            userName: "midudev",
            name: "Miguel Angel Duran",
            isFollowing: true,
        },
        {
            userName: "pheralb",
            name: "Pablo Hernandez",
            isFollowing: false
        },
        {
            userName: "vxnder",
            name: "Vanderhart",
            isFollowing: false
        },

    ]
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}