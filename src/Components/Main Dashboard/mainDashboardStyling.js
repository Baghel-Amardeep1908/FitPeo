import styled from "styled-components";

export const LeftSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 28vw;
  justify-content: space-around;
  align-items: center;
  background-color: #1f2029;
  flex: 1;
`;
export const LeftSideBardIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const LeftSideBarMainIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 54vh;
  padding: 20px;
`;

export const LeftSideBarLowerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  height: 99vh;
`;

export const Header = styled.div`
  display: flex;
  height: 18vh;
  background-color: #1f2029;
  align-items: center;
  width: 95vw;

  align-items: center;
  justify-content: space-between;
`;
export const ContentMainContainer = styled.div`
  flex-basis:95%
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
