import React from "react";
import styled from "styled-components";
import {
  AiOutlineFieldTime,
  AiFillWechat,
  AiFillHome,
  AiOutlineFundProjectionScreen,
  AiFillSetting,
  AiOutlineMenu,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BiStats, BiLogIn } from "react-icons/bi";
import { HackerthonProject } from "./HackerthonProject";

export const Hackerthon = () => {
  const [toggle, setToggle] = React.useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Wrapper>
        <LeftSider>
          <SideHeader>
            <LogoHolder>
              <Logo />
            </LogoHolder>
            <Navigation>
              <NavHolder>
                <Icon>
                  <AiFillHome />
                </Icon>
                <Nav>Overview</Nav>
              </NavHolder>
              <NavHolder>
                <Icon>
                  <AiOutlineFundProjectionScreen />
                </Icon>
                <Nav>Projects</Nav>
              </NavHolder>
              <NavHolder>
                <Icon>
                  <BiStats />
                </Icon>
                <Nav>Stats</Nav>
              </NavHolder>
              <NavHolder>
                <Icon>
                  <AiFillWechat />
                </Icon>
                <Nav>Chat</Nav>
              </NavHolder>
              <NavHolder>
                <Icon>
                  <AiOutlineFieldTime />
                </Icon>
                <Nav>Calender</Nav>
              </NavHolder>
            </Navigation>

            <Ending>
              <NavHolder>
                <Icon>
                  <AiFillSetting />
                </Icon>
                <Nav>Setting</Nav>
              </NavHolder>
              <NavHolder bg>
                <Icon>
                  <BiLogIn />
                </Icon>
                <Nav>Log Out</Nav>
              </NavHolder>
            </Ending>
          </SideHeader>

          {toggle ? (
            <Menu onClick={onToggle}>
              {" "}
              <AiFillCloseCircle />
            </Menu>
          ) : (
            <Menu onClick={onToggle}>
              {" "}
              <AiOutlineMenu />
            </Menu>
          )}

          {toggle ? (
            <SideHeaderMobile>
              <LogoHolder>
                <Logo />
              </LogoHolder>
              <Navigation>
                <NavHolder>
                  <Icon>
                    <AiFillHome />
                  </Icon>
                  <Nav>Overview</Nav>
                </NavHolder>
                <NavHolder>
                  <Icon>
                    <AiOutlineFundProjectionScreen />
                  </Icon>
                  <Nav>Projects</Nav>
                </NavHolder>
                <NavHolder>
                  <Icon>
                    <BiStats />
                  </Icon>
                  <Nav>Stats</Nav>
                </NavHolder>
                <NavHolder>
                  <Icon>
                    <AiFillWechat />
                  </Icon>
                  <Nav>Chat</Nav>
                </NavHolder>
                <NavHolder>
                  <Icon>
                    <AiOutlineFieldTime />
                  </Icon>
                  <Nav>Calender</Nav>
                </NavHolder>
              </Navigation>

              <Ending>
                <NavHolder>
                  <Icon>
                    <AiFillSetting />
                  </Icon>
                  <Nav>Setting</Nav>
                </NavHolder>
                <NavHolder bg>
                  <Icon>
                    <BiLogIn />
                  </Icon>
                  <Nav>Log Out</Nav>
                </NavHolder>
              </Ending>
            </SideHeaderMobile>
          ) : null}
        </LeftSider>
        <RightSider>
          {" "}
          <MainBody>
            <HackerthonProject />
          </MainBody>
        </RightSider>
      </Wrapper>
    </Container>
  );
};

const RightSider = styled.div`
  flex: 0.8;
  margin-left: 20px;
`;
const LeftSider = styled.div`
  flex: 0.2;
`;

const MainBody = styled.div`
  padding-top: 100px;
  padding-left: 20px;
  min-height: 80vh;
  height: 100%;
  flex: 0.8;
  /* width: 100%; */
`;

const SideHeader = styled.div`
  padding-top: 50px;
  width: 400px;
  height: 90vh;
  background-color: white;
  border-right: 1px solid #d8d8d8;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  position: fixed;
  flex: 0.2;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex: 1;
`;
const Menu = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    font-size: 30px;
    justify-content: center;
    margin-bottom: 30px;
    /* position: absolute; */
    left: 45px;
    top: 10px;
    z-index: 2;
    position: fixed;
    flex: 0.2;
  }
`;

const Ending = styled.div``;
const Logo = styled.img`
  width: 200px;
  height: 50px;
  background-color: green;
  object-fit: contain;

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 50px;
    background-color: red;
    object-fit: contain;
  }
`;
const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const NavHolder = styled.div`
  padding-top: 20px;
  display: flex;
  height: 50px;
  align-items: center;
  transition: all 350ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;

  :hover {
    background-color: ${({ bg }) => (bg ? "#fbbdc8" : "#dfffef")};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    border-right: 3px solid;
    border-color: ${({ bg }) => (bg ? "red" : "lightgreen")};
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;
  }
`;

const Navigation = styled.div`
  flex: 1;
`;
const Icon = styled.div`
  margin: 0 10px;
  font-size: 20px;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const Nav = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const SideHeaderMobile = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    width: 120px;
    height: 90vh;
    background-color: white;
    border-right: 1px solid #d8d8d8;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    position: absolute;
    z-index: 1;
    position: fixed;
    flex: 0.2;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #ebebeb;
`;
