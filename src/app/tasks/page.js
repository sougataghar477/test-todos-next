'use client';
import { useEffect,useState } from "react";
import { Container,Loader } from "@mantine/core";
function Tasks(){
    let [posts,setPosts]=useState([]);
    let [isLoading,setLoading]=useState(false);
    useEffect(()=>{
        fetch('/api/getPosts').then(a => {setLoading(true); return a.json()}).then(b => {setLoading(false);setPosts(b.posts)})
    },[])
return <Container maw={640}>
    <h1>Tasks</h1>
    {isLoading?<Loader color="blue" />:null}
    {posts && posts.map((post,index) => <h2 key={index}>{post}</h2>)}
</Container>
}
export default Tasks;