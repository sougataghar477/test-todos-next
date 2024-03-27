import { Avatar, Container,Text } from "@mantine/core";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
function Header(){
let { data, status } = useSession();
console.log(data)
return <header>
    <Container w={640}>
        <Link href={'/'}>Home</Link>
        <Link href={'/tasks'}>Tasks</Link>
        {status==='authenticated' ? null :<Link href={'/login'}>Login</Link>}
        {status==='authenticated'?<a onClick={() => signOut()}>Log Out</a>:null}
         <Avatar src={data?.user?.image}/>
        <Text>{data?.user?.email}</Text>
    </Container>
</header>
}
export default Header;