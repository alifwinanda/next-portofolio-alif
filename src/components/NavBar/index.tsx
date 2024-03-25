import React, { useEffect, useState } from "react";
import { Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import theme from "@/common/theme";

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
`;

function NavBar() {
  const [isDarkMode, setIsDarkmode] = useState<boolean>(false);
  const handleClickDarkMode = () => {
    setIsDarkmode(!isDarkMode);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos < prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <NavbarWrapper>
      <div className={visible ? "active hidden" : "active"}>
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
      </div>
    </NavbarWrapper>
  );
}

export default NavBar;
