import styled from "@emotion/styled";

export const AppHeader = styled("div")`
  height: 49px;
  background: ${props => props.theme.appHeader.background};
  color: ${props => props.theme.appHeader.color};
  display: flex;
  align-items: center;
  padding: 0px 24px;
`;

export const PageHeader = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f2f2f2;

  padding: 0px 24px;

  // > h1 {
  //   margin-left: 24px;
  // }

  // > button {
  //   margin-right: 24px;
  // }
`;
