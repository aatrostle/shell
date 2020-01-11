import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { AppHeader } from "../shared/components/headers";

const Logo = styled("div")`
  margin: 0 5px 0 0;
`;

const listClass = css`
  margin: 0;
  padding: 0;
  list-style-type: none;

  > li {
    display: inline-block;
    margin-right: 5px;
  }
`;

const Navigation = () => (
  <AppHeader>
    <Logo>10Kft</Logo>
    <ul className={listClass}>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </AppHeader>
);

export default Navigation;
