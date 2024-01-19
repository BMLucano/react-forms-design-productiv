import React from "react";
import { render } from "@testing-library/react";
import TopTodo from './TopTodo'
import Todo from './Todo'


const testTodos = [{
  id: 1,
  title:"test",
  description:"test description",
  priority: 1},
  {
    id: 2,
    title:"test2",
    description:"test description2",
    priority: 2}
  ];

  let renderedTodo;

beforeEach(function(){
  renderedTodo = render(<TopTodo todos={testTodos} />)
  // debug(renderedTodo)
  // console.log(renderedTodo )
})

it("renders without crashing", function(){
  render(<TopTodo todos={testTodos} />)
});

it("matches snapshot", function(){
  expect(renderedTodo.asFragment()).toMatchSnapshot()
});

it("displays highest priority todo", function(){
  expect(renderedTodo.getByText("test")).toBeInTheDocument();
  expect(renderedTodo.getByText("test description")).toBeInTheDocument();
  expect(renderedTodo.getByText("(priority: 1)")).toBeInTheDocument();

})

it("does not display other todos", function(){
  expect(renderedTodo.queryByText("test2")).not.toBeInTheDocument();
  expect(renderedTodo.queryByText("test description2")).not.toBeInTheDocument();
  expect(renderedTodo.queryByText("(priority: 2)")).not.toBeInTheDocument();
});
