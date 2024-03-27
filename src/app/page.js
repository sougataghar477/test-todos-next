'use client';
import { useEffect,useState } from "react";
import { Container,Textarea,Flex,Text,Button,Box } from "@mantine/core";
import { useSession, getSession } from "next-auth/react";
import { Notifications } from '@mantine/notifications';
import { notifications } from '@mantine/notifications';
export default  function Home() { 
  let [text,setText]=useState('');
  const { data, status } = useSession();
//  useEffect(()=>{
//   fetch("/api/login")
//   .then(a => a.json())
//   .then(b => console.log(b))
//  },[])
  return (
    <Container maw={640}>
    <Notifications />
      <Flex mt={32} gap={16}>
        <Box maw={480} flex={1}>

        <Textarea
        value={text}
        mx={'auto'}
        size="xl"
        placeholder="Type something to add a post"
        onInput={e => setText(e.target.value)}
  />
    <Button title="hello" disabled={!(text.length>0 && status==='authenticated')} onClick={()=>{
      fetch('/api/addPost',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // specifying that the data being sent is JSON
        },
        body: JSON.stringify({text,email:data.user.email}) // converting JavaScript object to JSON string
    });
    setText('');
    notifications.show({
      title: 'Default notification',
      message: 'Hey there, your code is awesome! 🤥',
    })
    }} mt={16}>Add Post</Button>
        </Box>
      
      
  <Text w={240} display={{base:'none',sm:'flex'}}>Hello</Text>
      </Flex>
      </Container>
  );
}
