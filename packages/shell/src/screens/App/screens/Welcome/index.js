import React from "react";

import Title from "../../components/Title";
import { PageHeader } from "../../shared/components/headers";

import TodoListContainer from "./components/TodoListContainer";

export default () => [
  <PageHeader>
    <h1>Welcome</h1>
  </PageHeader>,
  <Title key={1}>Welcome</Title>,
  <TodoListContainer />
];
