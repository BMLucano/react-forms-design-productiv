import React from "react";
import { render } from "@testing-library/react";
import Todo from './Todo'

const testTodo = {
  id: 1, title:"test",
  description:"test description",
  priority: 1};

it("renders without crashing", function(){
  render(<Todo todo={ testTodo } />)
})

it("matches snapshot", function(){
  const {container} = render(<Todo todo={testTodo} />);
  expect(container).toMatchSnapshot();
})

it("displays todo data properly", function(){
  const {container, debug} = render(<Todo todo={testTodo} />);

  expect(container).toContainHTML("test");
  expect(container).toContainHTML("test description");
  expect(container).toContainHTML("(priority: 1");

})