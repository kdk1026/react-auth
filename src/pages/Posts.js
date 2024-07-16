import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPosts } from "../apis/posts";

function Posts() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await fetchPosts();
            setPosts(data);
        };
        getPosts();
    // eslint-disable-next-line
    }, [navigate]);

    return (
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    )
}

export default Posts;