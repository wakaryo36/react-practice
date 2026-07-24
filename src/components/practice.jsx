import { useState, useEffect } from "react";

function Practice() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        const data = await response.json()

        setUsers(data)
    }

    useEffect(() => {

        getUsers()
    }, [])

    return (
        <>
            <h2>API通信</h2>
            
            <p>取得件数： {users.length}件</p>

            {users.map((user) => (

                <p>{user.name}</p>
            ))}
        </>
    )
}

export default Practice