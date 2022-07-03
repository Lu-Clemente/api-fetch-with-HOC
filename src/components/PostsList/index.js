import React from "react";
import withRequest from "../RequestHOC";
import "./styles.css";

const PostList = ({ data }) => {
    return (
        <ul className="post--list">
            {
                data.map((post) => (
                    <li key={post.id} className="post--item">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default withRequest(PostList, 'posts')