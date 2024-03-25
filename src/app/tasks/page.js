'use client';
import { useEffect,useState } from "react";
import { Container } from "@mantine/core";
function Tasks(){
    let [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('/api/getPosts').then(a => a.json()).then(b => setPosts(b.posts))
    },[])
return <Container maw={640}>
    <h1>Tasks</h1>
    {posts && posts.map((post,index) => <h2 key={index}>{post}</h2>)}
</Container>
}
export default Tasks;