"use client";
import { Container, TextInput, Button, Text } from "@mantine/core";
import { signIn } from "next-auth/react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from 'react'

function Login() {
  const { data, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (data?.user) {
fetch("/api/signin").then(a => a.json()).then(b => console.log(b))
      setTimeout(() => {
        router.push("/")
      }, 600)
    }
  }, [data])

  return (
    <Container w={640}>
      {status === "authenticated" ? (
        <h1>You are logged in</h1>
      ) : (
        <>
          <Text>Sign in with Google</Text>
          <Button
            mt={16}
            onClick={ () => {
               signIn("google");
            }}
          >
            Sign In
          </Button>
        </>
      )}
    </Container>
  );
}
export default Login;