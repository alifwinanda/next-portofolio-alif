import React from "react"
import styled from "@emotion/styled"
import theme from "@/common/theme"
import { Heading, Text, VStack } from "@chakra-ui/react"

const Wrapper = styled.div`
  border-radius: 8px;
  border: 2px solid ${theme.colors.delftBlue.DEFAULT};
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 16px;
  color: ${theme.colors.aliceBlue.DEFAULT};
`

function WelcomeSection(): JSX.Element {
  return (
    <Wrapper>
      <VStack alignItems="start">
        <Heading textAlign="start">Hello!</Heading>
        <Text>
          I&apos;m a budding Frontend Engineer ready to bring your website to
          life! Proficient in HTML, CSS, and JavaScript, I specialize in
          crafting captivating user interfaces that captivate and engage. With a
          passion for innovation and a thirst for learning, I&apos;m excited to
          collaborate with your team to create stunning digital experiences that
          leave a lasting impression. Let&apos;s build something amazing
          together!
        </Text>
      </VStack>
    </Wrapper>
  )
}

export default WelcomeSection
