import React from "react";
import styled from "@emotion/styled";

const Wrap = styled("div")`
  height: 100%;
  background: #f8f9f9;
  transition: background 0.5s ease;

  &:hover {
    background: #ffffff;
  }
`;

const Indicator = styled("div")`
  padding: 6px;
  font-style: italic;
`;

export default () => (
  <Wrap>
    <Indicator>loading…</Indicator>
  </Wrap>
);
