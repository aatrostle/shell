import React, { Fragment } from "react";
import { css } from "@emotion/core";

import { AppHeader, PageHeader } from "../../shared/components/headers";
import Title from "../../components/Title";

const nav = css`
  flex: 1;
  display: flex;
  margin-left: 24px;

  > div:not(:last-child) {
    margin-right: 12px;
  }
`;

export default () => (
  <Fragment>
    <AppHeader>
      <div>Corp™</div>
      {false && (
        <div className={nav}>
          <div>NavItem</div>
        </div>
      )}
    </AppHeader>

    <PageHeader>
      <h1>Base - its whats good for you</h1>
      <div>div</div>
    </PageHeader>

    <Title key={1}>Base</Title>
  </Fragment>
);
