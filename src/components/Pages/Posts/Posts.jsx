import { useEffect, useState } from 'react';
import './Posts.scss';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
        fetchPosts();
    }, []);
    async function fetchPosts(){
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
            .then(setLoader(false));
    }
    return (
        <div className='posts'>
            <h1 className="post-title">
                Posts
            </h1>
            <div className="post-content container">
                <div className='post-box' >
                            {posts.map((post)=>{
                                return(
                                    
                                        <div className="post-card" key={post.id}>
                                            <div className="post-card-title">
                                                {post.title}
                                            </div>
                                            <div className="card-body">
                                                {post.body}
                                            </div>
                                        </div>

                                   
                                )
                            })}
                            </div>
            </div>
        </div>
    )
}
export default Posts;