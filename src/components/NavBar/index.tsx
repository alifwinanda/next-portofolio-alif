import React, { useState } from "react"
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
  Link,
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import theme from "@/common/theme"
import CometIcon from "@/assets/svg/comet/comet.svg"
import MoonIcon from "@/assets/svg/moon-solid.svg"

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.aliceBlue.DEFAULT};
  padding: 8px 0px;
`

const DarkModeButton = styled.div`
  border-radius: 50%;
  border: 2px solid ${theme.colors.englishViolet.DEFAULT};
  box-sizing: border-box;
  padding: 5px;
`

const NavBar = (): JSX.Element => {
  const [isDarkMode, setIsDarkmode] = useState<boolean>(false)

  const handleClickDarkMode = () => {
    setIsDarkmode(!isDarkMode)
  }

  return (
    <NavbarWrapper>
      <Container maxW="5xl">
        <Flex alignContent={"space-between"}>
          <CometIcon width={30} />
          <Heading size="lg">Wepe</Heading>
          <Spacer />
          <Flex gap="16px" alignItems="center">
            <Link>About</Link>
            <Link>Tech</Link>
            <Link>Contact</Link>
            <DarkModeButton>
              <MoonIcon height={30} width={30} />
            </DarkModeButton>
          </Flex>
        </Flex>
      </Container>
    </NavbarWrapper>
  )
}

export default NavBar
