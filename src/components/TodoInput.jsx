import PropTypes from "prop-types";

export default function TodoInput(props) {
  const { handleAddTodos, currentTodo, setCurrentTodo } = props;

  const handleAddClick = () => {
    if (currentTodo.trim()) { // Prevent adding empty todos
      handleAddTodos(currentTodo);
      setCurrentTodo('');
    }
  };

  return (
    <header>
      <input 
        value={currentTodo} 
        onChange={(e) => setCurrentTodo(e.target.value)} 
        placeholder="Enter To-do..."
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddClick();
            }
          }}
      />
      <button onClick={handleAddClick}>ADD</button>
    </header>
  );
}

// PropTypes validation
TodoInput.propTypes = {
  handleAddTodos: PropTypes.func.isRequired,
  currentTodo: PropTypes.string.isRequired,
  setCurrentTodo: PropTypes.func.isRequired,
};
