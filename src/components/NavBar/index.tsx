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
  .active {
    display: flex;
    align-items: center;
    height: 4rem;
    width: 100%;
    position: fixed;
    top: 0px;
    transition: 0.3s linear;
    background-color: ${theme.colors.aliceBlue.DEFAULT};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 1;
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.08);
  }
  .hidden {
    top: -80px;
    transition: 0.3s linear;
  }
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
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos < prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })

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
