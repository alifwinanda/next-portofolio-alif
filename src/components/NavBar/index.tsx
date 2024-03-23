import React, { useState } from "react"
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import theme from "@/common/theme"

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.aliceBlue.DEFAULT};
  padding: 8px 0px;
`

function NavBar() {
  const [isDarkMode, setIsDarkmode] = useState<boolean>(false)

  const handleClickDarkMode = () => {
    setIsDarkmode(!isDarkMode)
  }

  return (
    <NavbarWrapper>
      <Container maxW="4xl">
        <Flex alignContent={"space-between"}>
          <Heading>Alif&apos;s Portofolio</Heading>
          <Spacer />
          <Button
            onClick={handleClickDarkMode}
            backgroundColor={isDarkMode ? "#130430" : "#c9b7eb"}
            color={isDarkMode ? "#c9b7eb" : "#130430"}
          >
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Button>
        </Flex>
      </Container>
    </NavbarWrapper>
  )
}

export default NavBar
