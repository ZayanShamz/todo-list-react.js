import PropTypes from "prop-types";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

// PropTypes validation
TodoCard.propTypes = {
  children: PropTypes.node.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
};
