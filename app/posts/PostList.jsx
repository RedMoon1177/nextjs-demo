import Link from "next/link";
import React from "react"

const url = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async () => {

    const res = await fetch(url);
    const posts = await res.json();

    return posts;
}

const PostList = async () => {
    const posts = await fetchPosts();

    return (
        <div className="flex flex-wrap">
            {
                posts.map(post => (
                    <p key={post.id} className="p-10 w-48 text-center bg-sky-200 border-2 m-2 shadow-lg">
                        <Link href={`/posts/${post.id}`}>Post {post.id}</Link>
                    </p>
                ))
            }
        </div>
    )
}

export default PostList