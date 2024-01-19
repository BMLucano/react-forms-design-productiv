import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo: {id, title, description, priority}
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(curr => curr = true);

   }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
   }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    setIsEditing(curr => curr = false);
   }

   //FIXME: crystal: send in intial form data without id
  return (
      <div className="EditableTodo">
        { isEditing === true &&  <TodoForm handleSave={handleSave}/>}


            FIXME: crystal: only show todo if not editing
                OR
                //if isEditing === false, show todo with edit/del buttons

                <div className="mb-3">
                  <div className="float-end text-sm-end">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo />
                </div>

      </div>
  );
}

export default EditableTodo;
