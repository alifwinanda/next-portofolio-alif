"use client"
import styled from "@emotion/styled"
import { Center, Container } from "@chakra-ui/react"
import WelcomeSection from "@/components/WelcomeSection"
import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <>
      <NavBar />
      <Container maxW="5xl" margin="30px auto">
        <WelcomeSection />
      </Container>
    </>
  )
}
