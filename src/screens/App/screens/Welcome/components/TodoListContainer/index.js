import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as todoActions from '../../store/todosActions';

import AddTodo from '../AddTodo';
import Todo from '../Todo';

export const TodoList = ({ todos, onTodoClick, onTodoAdd }) => (
  <div>
    <AddTodo onSubmit={onTodoAdd} />
    <ul>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
    </ul>
  </div>
);

const getTodos = state => state.welcome.todos;

const mapStateToProps = state => ({
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(todoActions.toggleTodo(id)),
  onTodoAdd: text => dispatch(todoActions.addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
