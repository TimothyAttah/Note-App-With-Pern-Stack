import styled from "styled-components";
import { Feed } from "../../components/feed/Feed";
import { RightBar } from "../../components/rightbar/RightBar";
import { SideBar } from "../../components/sidebar/SideBar";

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 120px;
  display: flex;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <SideBar />
      <Feed />
      <RightBar />
    </HomeContainer>
  );
};
