import React from "react";
import styled from "styled-components";
import { AiFillFileAdd, AiOutlineSearch } from "react-icons/ai";
export const HackerthonProject = () => {
  return (
    <Container>
      <TopHolder>
        <SiderBar>
          <Icon>
            {" "}
            <AiOutlineSearch />{" "}
          </Icon>
          <Input placeholder="Enter" />
        </SiderBar>
        <AvatarHolder>
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Icon> icon </Icon>
          <Name>Peter</Name>
          <Image />
        </AvatarHolder>
      </TopHolder>
      <Wrapper>
        <Card>
          <span>List of Projects</span>
          <AddButton>
            <IconHolder>
              <AiFillFileAdd />
            </IconHolder>
            <Icons>Add Project</Icons>
          </AddButton>
        </Card>

        <Card>Projects</Card>
        <Card>On Going</Card>
        <Card>Completed</Card>
      </Wrapper>
    </Container>
  );
};

const TopHolder = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-left: 130px;
  justify-content: space-between;
  font-size: 30px;
`;
const SiderBar = styled.div`
  display: flex;
`;
const Icon = styled.div``;
const Input = styled.input``;
const AvatarHolder = styled.div`
  display: flex;
`;
const Name = styled.div``;
const Image = styled.div``;

const IconHolder = styled.div`
  padding-left: 50px;
  margin-right: 50px;
`;

const Icons = styled.div`
  font-weight: bold;
  opacity: 0;
  transition: all 350ms;

  :hover {
    opacity: 1;
  }
`;

const AddButton = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 50px;
  background-color: rgba(239, 240, 175, 0.3);
  font-size: 30px;
  transition: all 350ms;
  /* font-weight: bold; */

  :hover {
    background-color: rgba(239, 240, 175, 0.9);
    cursor: pointer;
  }
`;
const Card = styled.div`
  width: 400px;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  height: 550px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
// const Container = styled.div``
