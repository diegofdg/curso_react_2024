import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`
    const formattedUserName = <span>@midudev</span>

    return (
        <section className='App'>
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing
                userName={"midudev"}
                name={"Miguel Angel Duran"}
            />
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing={false}
                userName="pheralb"
                name={"Pablo Hernandez"}
            />
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing
                userName="vxnder"
                name={"Vanderhart"}
            />
        </section>
    )
}