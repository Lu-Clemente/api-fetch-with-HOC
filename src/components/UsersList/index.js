import React from "react";
import withRequest from "../RequestHOC";
import "./styles.css";

const UsersList = ({ data }) => {
    return (
        <ul className="user--list">
            {
                data.map((user) => (
                    <li key={user.id} className="user--item">
                        <h2>{user.username}</h2>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default withRequest(UsersList, 'users')