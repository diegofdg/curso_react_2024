import { useState } from "react"

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)

    console.log("TwitterFollowCard render with: ", isFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log("twitter-follow-car render with name: ", userName)

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar" 
                    alt="El avatar del midudev"
                    src={`https://unavatar.io/${userName}`}  />
                <div className="tw-followCard-info">
                    <strong>{ children }</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button
                    className={buttonClassName}
                    onClick={handleClick}
                >
                    {text}
                </button>
            </aside>
        </article>
    )
}