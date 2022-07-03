import React from "react";
import "./styles.css";

const PostList = ({ posts }) => {
    return (
        <ul className="post--list">
            {
                posts.map((post) => (
                    <li key={post.id} className="post--item">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default PostList;