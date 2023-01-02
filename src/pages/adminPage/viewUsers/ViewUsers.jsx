import { useState } from "react"
import "./viewUsers.css"

export default function ViewUsers() {

    const [users, setUsers] = useState([])

        const dummyUsers = [
        {
            username: "user 1",
            firstname: "user",
            lastname: "1",
            email: "user1@gmai.com",
            phone: "08073421",
            birthday: "200/201/2"
        },
        {
            username: "user 2",
            firstname: "user",
            lastname: "2",
            email: "user2@gmai.com",
            phone: "08073421",
            birthday: "200/201/2"
        },
        {
            username: "user 3",
            firstname: "user",
            lastname: "3",
            email: "user3@gmai.com",
            phone: "08073421",
            birthday: "200/201/2"
        },
        {
            username: "user 4",
            firstname: "user",
            lastname: "4",
            email: "user4@gmai.com",
            phone: "08073421",
            birthday: "200/201/2"
        }
    ]

    const [selectedUser, setSelectedUser]= useState(dummyUsers[0])




    return(
        <div className="users-container">
            <div className="users-list">
                {dummyUsers.map((user, i) => {
                    return(
                        <button className="user-button">
                            <p className="button-text">{user.username}</p>
                        </button>
                    )

                })}

            </div>
            <div className="selected-user">

            </div>

        </div>
    )
}