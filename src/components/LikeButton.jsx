import { useState } from "react"

function LikeButton() {
    const [likes, setlikes] = useState(0)

    return (
        <>
            <h2>いいね機能</h2>
            
            <button onClick={() => setlikes(likes - 1)}>
                -
            </button>

            <p>❤️ {likes}</p>

            <button onClick={() => setlikes(likes + 1)}>
                +
            </button>
        </>
    )
}

export default LikeButton