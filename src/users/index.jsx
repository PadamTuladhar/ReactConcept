import { useEffect, useState } from "react";

export default function Users() {

    const [users, setUsers] = useState([]);
    const [pending, setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const userListResponse = await fetch('https://dummyjson.com/users');
            const result = await userListResponse.json();
            if (result?.users) {
                setUsers(result?.users);
                setPending(false);
            } else {
                setUsers([]);
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    // useEffect(() => {
    //     fetchAllUsers()
    // }, [])

    if (pending)
        return <p>Loading.....</p>

    return (
        <div>
            <button className='button' onClick={fetchAllUsers}>Fetch users</button>
            <h1>List of users: </h1>
            {
                users && users?.length > 0 ?
                    users.map(ele =>
                        <ul>
                            <li key={ele.id}>{ele.firstName} {ele.lastName}</li>
                        </ul>
                    ) : <h1>No user found</h1>
            }

        </div>
    )
}