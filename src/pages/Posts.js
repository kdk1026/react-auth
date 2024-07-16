import { useNavigate } from "react-router-dom";
import { useAxios } from "../utils/http";
import { useEffect, useState } from "react";

function Posts() {
    const navigate = useNavigate();

    const {instance} = useAxios();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await instance.get('/posts');
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