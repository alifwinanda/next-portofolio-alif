import React from "react"
import styled from "@emotion/styled"
import theme from "@/common/theme"
import { Heading, Text, VStack, Flex, StackDivider } from "@chakra-ui/react"

const Wrapper = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  height: fit-content;
  box-sizing: border-box;
  margin: 100px 0px;
  color: ${theme.colors.aliceBlue.DEFAULT};
`

function WelcomeSection(): JSX.Element {
  return (
    <VStack align="stretch">
      <Wrapper>
        <Heading size="4xl" fontSize="96px">
          Hello!
        </Heading>
      </Wrapper>
      <Text
        fontSize="36px"
        fontWeight={500}
        color={theme.colors.aliceBlue.DEFAULT}
      >
        I am Alif, a Frontend engineer
        <br />
        based in Jakarta, Indonesia
      </Text>
    </VStack>
  )
}

export default WelcomeSection
