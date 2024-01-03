import '../styles/todoListItem.scss';
import { FaRegSquare, FaCheckSquare, FaMinusCircle } from 'react-icons/fa';
import React from 'react';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <FaCheckSquare /> : <FaRegSquare />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <FaMinusCircle />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
