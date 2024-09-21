import TodoCard from "./TodoCard";
import PropTypes from "prop-types";

export default function TodoList(props) {
  const { todos = [], handleEditTodo, handleDeleteTodo } = props; // Default to empty array

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard 
          key={todoIndex} 
          index={todoIndex} 
          handleEditTodo={handleEditTodo} 
          handleDeleteTodo={handleDeleteTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

// PropTypes validation
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
