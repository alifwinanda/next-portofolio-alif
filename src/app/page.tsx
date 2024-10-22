"use client"
import styled from "@emotion/styled"
import {
  Center,
  Container,
  Heading,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react"
import WelcomeSection from "@/components/WelcomeSection"
import NavBar from "@/components/NavBar"
import theme from "@/common/theme"

const ExperienceContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${theme.colors.aliceBlue.DEFAULT};
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export default function Home() {
  return (
    <>
      <NavBar />
      <VStack
        divider={
          <StackDivider
            alignSelf="center"
            borderColor="gray.200"
            width="50%"
            margin="auto"
          />
        }
        maxW="5xl"
        margin="30px auto"
        align="stretch"
        gap="48px"
      >
        <WelcomeSection />
        <VStack align="stretch" color={theme.colors.aliceBlue.DEFAULT}>
          <Heading size="lg">About</Heading>
          <Text>
            I am a Junior-level Frontend developer passionate about UI/UX and
            Frontend development. My experience includes proficient use of
            technologies such as Next.js with TypeScript, styled-components, and
            Jest to create User-centric web applications.
            <br />
            <br />I am enthusiastic about growing into a managerial role in the
            future and am committed to developing both technical expertise and
            leadership skills. I thrive in collaborative environments where I
            can contribute to innovative solutions while learning from
            experienced team members.
          </Text>
        </VStack>
        <VStack align="stretch" color={theme.colors.aliceBlue.DEFAULT}>
          <Heading size="lg">Experience</Heading>
          <HStack>
            <ExperienceContainer>
              <div>test</div>
              <div>test</div>
              <div>test</div>
            </ExperienceContainer>
          </HStack>
        </VStack>
      </VStack>
    </>
  )
}
