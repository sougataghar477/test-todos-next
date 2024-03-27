'use client';
import { useEffect,useState } from "react";
import { Container,Loader,Center } from "@mantine/core";
function Tasks(){
    let [posts,setPosts]=useState([]);
    let [isLoading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('/api/getPosts').then(a => { return a.json()}).then(b => {setLoading(false);setPosts(b.posts)})
    },[])
return <Container maw={640}>
<h1>Tasks</h1>
{isLoading && (
   <Center w={'100vw'} h={'100vh'}>
    <Loader color="blue" />
   </Center>
)}
{posts && posts.map((post,index) => <h2 key={index}>{post}</h2>)}
</Container>
}
export default Tasks;