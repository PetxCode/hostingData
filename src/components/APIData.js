import React, { useEffect, useState } from "react";
import styled from "styled-components";

const APIData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [user, setUser] = useState([]);
  const [text, setText] = useState("");

  const urlAPI = `https://api.github.com/users/${text}`;

  const getData = async () => {
    await fetch(urlAPI)
      .then((race) => race.json())
      .then((sam) => setUser(sam));
  };

  useEffect(() => {
    getData();
    console.log("data from GitHub: ", user);
    console.log(urlAPI);
  }, [user]);
  return (
    <Container>
      <Holder>
        <Input
          placeholder="Search for UserName"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            console.log(text);
            getData();
          }}
        >
          Search{text}
        </Button>
      </Holder>
      <Wrapper>
        <Card>
          <Image src={user.avatar_url} />
          <Content>
            <Name>name</Name>
            <span>{""}</span>
            {/* <span>{props.repos_url}</span>  */}
          </Content>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default APIData;

const Holder = styled.div`
  display: flex;
`;
const Button = styled.div`
  margin-left: 10px;
  height: 40px;
  width: 100px;
  background-color: red;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
`;

const Image = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  background-color: red;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
const Content = styled.div``;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: powderblue;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 100px;
`;
